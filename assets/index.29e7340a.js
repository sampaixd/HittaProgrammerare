(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Rc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const _m="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Em=Rc(_m);function pf(t){return!!t||t===""}function Dc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Pe(s)?bm(s):Dc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Pe(t))return t;if(Ee(t))return t}}const Im=/;(?![^(]*\))/g,Tm=/:(.+)/;function bm(t){const e={};return t.split(Im).forEach(n=>{if(n){const s=n.split(Tm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Nc(t){let e="";if(Pe(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Nc(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Sm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=vo(t[s],e[s]);return n}function vo(t,e){if(t===e)return!0;let n=ru(t),s=ru(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gr(t),s=gr(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?Sm(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!vo(t[o],e[o]))return!1}}return String(t)===String(e)}function Cm(t,e){return t.findIndex(n=>vo(n,e))}const su=t=>Pe(t)?t:t==null?"":j(t)||Ee(t)&&(t.toString===yf||!Y(t.toString))?JSON.stringify(t,gf,2):String(t),gf=(t,e)=>e&&e.__v_isRef?gf(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:_o(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!j(e)&&!vf(e)?String(e):e,de={},fs=[],vt=()=>{},Am=()=>!1,km=/^on[^a-z]/,wo=t=>km.test(t),Oc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rm=Object.prototype.hasOwnProperty,se=(t,e)=>Rm.call(t,e),j=Array.isArray,ds=t=>Vr(t)==="[object Map]",_o=t=>Vr(t)==="[object Set]",ru=t=>Vr(t)==="[object Date]",Y=t=>typeof t=="function",Pe=t=>typeof t=="string",gr=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",mf=t=>Ee(t)&&Y(t.then)&&Y(t.catch),yf=Object.prototype.toString,Vr=t=>yf.call(t),Dm=t=>Vr(t).slice(8,-1),vf=t=>Vr(t)==="[object Object]",Mc=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nm=/-(\w)/g,ws=Eo(t=>t.replace(Nm,(e,n)=>n?n.toUpperCase():"")),Om=/\B([A-Z])/g,Ms=Eo(t=>t.replace(Om,"-$1").toLowerCase()),wf=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Eo(t=>t?`on${wf(t)}`:""),mr=(t,e)=>!Object.is(t,e),Ci=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$i=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let iu;const Pm=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ct;class Mm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ct&&(this.parent=Ct,this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function xm(t,e=Ct){e&&e.active&&e.effects.push(t)}const xc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_f=t=>(t.w&gn)>0,Ef=t=>(t.n&gn)>0,Lm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},Um=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];_f(r)&&!Ef(r)?r.delete(t):e[n++]=r,r.w&=~gn,r.n&=~gn}e.length=n}},xa=new WeakMap;let Xs=0,gn=1;const La=30;let mt;const On=Symbol(""),Ua=Symbol("");class Lc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xm(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,cn=!0,gn=1<<++Xs,Xs<=La?Lm(this):ou(this),this.fn()}finally{Xs<=La&&Um(this),gn=1<<--Xs,mt=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(ou(this),this.onStop&&this.onStop(),this.active=!1)}}function ou(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let cn=!0;const If=[];function xs(){If.push(cn),cn=!1}function Ls(){const t=If.pop();cn=t===void 0?!0:t}function lt(t,e,n){if(cn&&mt){let s=xa.get(t);s||xa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=xc()),Tf(r)}}function Tf(t,e){let n=!1;Xs<=La?Ef(t)||(t.n|=gn,n=!_f(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function jt(t,e,n,s,r,i){const o=xa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Mc(n)&&a.push(o.get("length")):(a.push(o.get(On)),ds(t)&&a.push(o.get(Ua)));break;case"delete":j(t)||(a.push(o.get(On)),ds(t)&&a.push(o.get(Ua)));break;case"set":ds(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&Fa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Fa(xc(c))}}function Fa(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&au(s);for(const s of n)s.computed||au(s)}function au(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Fm=Rc("__proto__,__v_isRef,__isVue"),bf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr)),Vm=Uc(),$m=Uc(!1,!0),Bm=Uc(!0),cu=jm();function jm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)lt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xs();const s=ae(this)[e].apply(this,n);return Ls(),s}}),t}function Uc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ry:Rf:e?kf:Af).get(s))return s;const o=j(s);if(!t&&o&&se(cu,r))return Reflect.get(cu,r,i);const a=Reflect.get(s,r,i);return(gr(r)?bf.has(r):Fm(r))||(t||lt(s,"get",r),e)?a:_e(a)?o&&Mc(r)?a:a.value:Ee(a)?t?Df(a):Us(a):a}}const Hm=Sf(),qm=Sf(!0);function Sf(t=!1){return function(n,s,r,i){let o=n[s];if(yr(o)&&_e(o)&&!_e(r))return!1;if(!t&&!yr(r)&&(Va(r)||(r=ae(r),o=ae(o)),!j(n)&&_e(o)&&!_e(r)))return o.value=r,!0;const a=j(n)&&Mc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?mr(r,o)&&jt(n,"set",s,r):jt(n,"add",s,r)),c}}function Km(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&jt(t,"delete",e,void 0),s}function zm(t,e){const n=Reflect.has(t,e);return(!gr(e)||!bf.has(e))&&lt(t,"has",e),n}function Wm(t){return lt(t,"iterate",j(t)?"length":On),Reflect.ownKeys(t)}const Cf={get:Vm,set:Hm,deleteProperty:Km,has:zm,ownKeys:Wm},Gm={get:Bm,set(t,e){return!0},deleteProperty(t,e){return!0}},Qm=Xe({},Cf,{get:$m,set:qm}),Fc=t=>t,Io=t=>Reflect.getPrototypeOf(t);function hi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&lt(r,"get",e),lt(r,"get",i));const{has:o}=Io(r),a=s?Fc:n?Bc:vr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function fi(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&lt(s,"has",t),lt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function di(t,e=!1){return t=t.__v_raw,!e&&lt(ae(t),"iterate",On),Reflect.get(t,"size",t)}function lu(t){t=ae(t);const e=ae(this);return Io(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function uu(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Io(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?mr(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function hu(t){const e=ae(this),{has:n,get:s}=Io(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&jt(e,"delete",t,void 0),i}function fu(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function pi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?Fc:t?Bc:vr;return!t&&lt(a,"iterate",On),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function gi(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Fc:e?Bc:vr;return!e&&lt(i,"iterate",c?Ua:On),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function Ym(){const t={get(i){return hi(this,i)},get size(){return di(this)},has:fi,add:lu,set:uu,delete:hu,clear:fu,forEach:pi(!1,!1)},e={get(i){return hi(this,i,!1,!0)},get size(){return di(this)},has:fi,add:lu,set:uu,delete:hu,clear:fu,forEach:pi(!1,!0)},n={get(i){return hi(this,i,!0)},get size(){return di(this,!0)},has(i){return fi.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:pi(!0,!1)},s={get(i){return hi(this,i,!0,!0)},get size(){return di(this,!0)},has(i){return fi.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=gi(i,!1,!1),n[i]=gi(i,!0,!1),e[i]=gi(i,!1,!0),s[i]=gi(i,!0,!0)}),[t,n,e,s]}const[Xm,Jm,Zm,ey]=Ym();function Vc(t,e){const n=e?t?ey:Zm:t?Jm:Xm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const ty={get:Vc(!1,!1)},ny={get:Vc(!1,!0)},sy={get:Vc(!0,!1)},Af=new WeakMap,kf=new WeakMap,Rf=new WeakMap,ry=new WeakMap;function iy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oy(t){return t.__v_skip||!Object.isExtensible(t)?0:iy(Dm(t))}function Us(t){return yr(t)?t:$c(t,!1,Cf,ty,Af)}function ay(t){return $c(t,!1,Qm,ny,kf)}function Df(t){return $c(t,!0,Gm,sy,Rf)}function $c(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=oy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ps(t){return yr(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Va(t){return!!(t&&t.__v_isShallow)}function Nf(t){return ps(t)||yr(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Of(t){return $i(t,"__v_skip",!0),t}const vr=t=>Ee(t)?Us(t):t,Bc=t=>Ee(t)?Df(t):t;function Pf(t){cn&&mt&&(t=ae(t),Tf(t.dep||(t.dep=xc())))}function Mf(t,e){t=ae(t),t.dep&&Fa(t.dep)}function _e(t){return!!(t&&t.__v_isRef===!0)}function cy(t){return xf(t,!1)}function ly(t){return xf(t,!0)}function xf(t,e){return _e(t)?t:new uy(t,e)}class uy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:vr(e)}get value(){return Pf(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:vr(e),Mf(this))}}function Pn(t){return _e(t)?t.value:t}const hy={get:(t,e,n)=>Pn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return _e(r)&&!_e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Lf(t){return ps(t)?t:new Proxy(t,hy)}class fy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lc(e,()=>{this._dirty||(this._dirty=!0,Mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=vt):(s=t.get,r=t.set),new fy(s,r,i||!r,n)}function ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){To(i,e,n)}return r}function wt(t,e,n,s){if(Y(t)){const i=ln(t,e,n,s);return i&&mf(i)&&i.catch(o=>{To(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(wt(t[i],e,n,s));return r}function To(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ln(c,null,10,[t,o,a]);return}}py(t,n,r,s)}function py(t,e,n,s=!0){console.error(t)}let ji=!1,$a=!1;const at=[];let Ut=0;const sr=[];let Js=null,rs=0;const rr=[];let en=null,is=0;const Uf=Promise.resolve();let jc=null,Ba=null;function Ff(t){const e=jc||Uf;return t?e.then(this?t.bind(this):t):e}function gy(t){let e=Ut+1,n=at.length;for(;e<n;){const s=e+n>>>1;wr(at[s])<t?e=s+1:n=s}return e}function Vf(t){(!at.length||!at.includes(t,ji&&t.allowRecurse?Ut+1:Ut))&&t!==Ba&&(t.id==null?at.push(t):at.splice(gy(t.id),0,t),$f())}function $f(){!ji&&!$a&&($a=!0,jc=Uf.then(Hf))}function my(t){const e=at.indexOf(t);e>Ut&&at.splice(e,1)}function Bf(t,e,n,s){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),$f()}function yy(t){Bf(t,Js,sr,rs)}function vy(t){Bf(t,en,rr,is)}function bo(t,e=null){if(sr.length){for(Ba=e,Js=[...new Set(sr)],sr.length=0,rs=0;rs<Js.length;rs++)Js[rs]();Js=null,rs=0,Ba=null,bo(t,e)}}function jf(t){if(bo(),rr.length){const e=[...new Set(rr)];if(rr.length=0,en){en.push(...e);return}for(en=e,en.sort((n,s)=>wr(n)-wr(s)),is=0;is<en.length;is++)en[is]();en=null,is=0}}const wr=t=>t.id==null?1/0:t.id;function Hf(t){$a=!1,ji=!0,bo(t),at.sort((n,s)=>wr(n)-wr(s));const e=vt;try{for(Ut=0;Ut<at.length;Ut++){const n=at[Ut];n&&n.active!==!1&&ln(n,null,14)}}finally{Ut=0,at.length=0,jf(),ji=!1,jc=null,(at.length||sr.length||rr.length)&&Hf(t)}}function wy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||de;d&&(r=n.map(g=>g.trim())),h&&(r=n.map(Bi))}let a,c=s[a=ha(e)]||s[a=ha(ws(e))];!c&&i&&(c=s[a=ha(Ms(e))]),c&&wt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,r)}}function qf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=qf(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):Xe(o,i),s.set(t,o),o)}function So(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ms(e))||se(t,e))}let Rt=null,Co=null;function Hi(t){const e=Rt;return Rt=t,Co=t&&t.type.__scopeId||null,e}function Ao(t){Co=t}function ko(){Co=null}function _y(t,e=Rt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Eu(-1);const i=Hi(e),o=t(...r);return Hi(i),s._d&&Eu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:D}=t;let b,A;const x=Hi(t);try{if(n.shapeFlag&4){const ee=r||s;b=kt(u.call(ee,ee,h,i,g,d,y)),A=c}else{const ee=e;b=kt(ee.length>1?ee(i,{attrs:c,slots:a,emit:l}):ee(i,null)),A=e.props?c:Ey(c)}}catch(ee){ir.length=0,To(ee,t,1),b=Oe(Un)}let Q=b;if(A&&D!==!1){const ee=Object.keys(A),{shapeFlag:Ie}=Q;ee.length&&Ie&7&&(o&&ee.some(Oc)&&(A=Iy(A,o)),Q=_s(Q,A))}return n.dirs&&(Q=_s(Q),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),b=Q,Hi(x),b}const Ey=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},Iy=(t,e)=>{const n={};for(const s in t)(!Oc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ty(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?du(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!So(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?du(s,o,l):!0:!!o;return!1}function du(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!So(n,i))return!0}return!1}function by({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sy=t=>t.__isSuspense;function Cy(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):vy(t)}function Ai(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function un(t,e,n=!1){const s=je||Rt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const pu={};function ki(t,e,n){return Kf(t,e,n)}function Kf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=je;let c,l=!1,u=!1;if(_e(t)?(c=()=>t.value,l=Va(t)):ps(t)?(c=()=>t,s=!0):j(t)?(u=!0,l=t.some(A=>ps(A)||Va(A)),c=()=>t.map(A=>{if(_e(A))return A.value;if(ps(A))return kn(A);if(Y(A))return ln(A,a,2)})):Y(t)?e?c=()=>ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),wt(t,a,3,[d])}:c=vt,e&&s){const A=c;c=()=>kn(A())}let h,d=A=>{h=b.onStop=()=>{ln(A,a,4)}};if(Er)return d=vt,e?n&&wt(e,a,3,[c(),u?[]:void 0,d]):c(),vt;let g=u?[]:pu;const y=()=>{if(!!b.active)if(e){const A=b.run();(s||l||(u?A.some((x,Q)=>mr(x,g[Q])):mr(A,g)))&&(h&&h(),wt(e,a,3,[A,g===pu?void 0:g,d]),g=A)}else b.run()};y.allowRecurse=!!e;let D;r==="sync"?D=y:r==="post"?D=()=>et(y,a&&a.suspense):D=()=>yy(y);const b=new Lc(c,D);return e?n?y():g=b.run():r==="post"?et(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Pc(a.scope.effects,b)}}function Ay(t,e,n){const s=this.proxy,r=Pe(t)?t.includes(".")?zf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=je;Es(this);const a=Kf(r,i.bind(s),n);return o?Es(o):Mn(),a}function zf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function kn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))kn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)kn(t[n],e);else if(_o(t)||ds(t))t.forEach(n=>{kn(n,e)});else if(vf(t))for(const n in t)kn(t[n],e);return t}function Wf(t){return Y(t)?{setup:t,name:t.name}:t}const Ri=t=>!!t.type.__asyncLoader,Gf=t=>t.type.__isKeepAlive;function ky(t,e){Qf(t,"a",e)}function Ry(t,e){Qf(t,"da",e)}function Qf(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ro(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Gf(r.parent.vnode)&&Dy(s,e,n,r),r=r.parent}}function Dy(t,e,n,s){const r=Ro(e,t,s,!0);Yf(()=>{Pc(s[e],r)},n)}function Ro(t,e,n=je,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xs(),Es(n);const a=wt(e,n,t,o);return Mn(),Ls(),a});return s?r.unshift(i):r.push(i),i}}const Gt=t=>(e,n=je)=>(!Er||t==="sp")&&Ro(t,e,n),Ny=Gt("bm"),Oy=Gt("m"),Py=Gt("bu"),My=Gt("u"),xy=Gt("bum"),Yf=Gt("um"),Ly=Gt("sp"),Uy=Gt("rtg"),Fy=Gt("rtc");function Vy(t,e=je){Ro("ec",t,e)}function as(t,e){const n=Rt;if(n===null)return t;const s=No(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&kn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function In(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(xs(),wt(c,n,8,[t.el,a,t,e]),Ls())}}const $y=Symbol();function yA(t,e,n,s){let r;const i=n&&n[s];if(j(t)||Pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ja=t=>t?cd(t)?No(t)||t.proxy:ja(t.parent):null,qi=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ja(t.parent),$root:t=>ja(t.root),$emit:t=>t.emit,$options:t=>Jf(t),$forceUpdate:t=>t.f||(t.f=()=>Vf(t.update)),$nextTick:t=>t.n||(t.n=Ff.bind(t.proxy)),$watch:t=>Ay.bind(t)}),By={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==de&&se(s,e))return o[e]=1,s[e];if(r!==de&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==de&&se(n,e))return o[e]=4,n[e];Ha&&(o[e]=0)}}const u=qi[e];let h,d;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==de&&se(r,e)?(r[e]=n,!0):s!==de&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&se(t,o)||e!==de&&se(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(qi,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ha=!0;function jy(t){const e=Jf(t),n=t.proxy,s=t.ctx;Ha=!1,e.beforeCreate&&gu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:D,deactivated:b,beforeDestroy:A,beforeUnmount:x,destroyed:Q,unmounted:ee,render:Ie,renderTracked:Ce,renderTriggered:Ke,errorCaptured:Yt,serverPrefetch:Ze,expose:It,inheritAttrs:Mt,components:pt,directives:Xn,filters:Jn}=e;if(l&&Hy(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ue=o[pe];Y(ue)&&(s[pe]=ue.bind(n))}if(r){const pe=r.call(n,n);Ee(pe)&&(t.data=Us(pe))}if(Ha=!0,i)for(const pe in i){const ue=i[pe],it=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):vt,es=!Y(ue)&&Y(ue.set)?ue.set.bind(n):vt,xt=ft({get:it,set:es});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>xt.value,set:Tt=>xt.value=Tt})}if(a)for(const pe in a)Xf(a[pe],s,n,pe);if(c){const pe=Y(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ue=>{Ai(ue,pe[ue])})}u&&gu(u,t,"c");function Ae(pe,ue){j(ue)?ue.forEach(it=>pe(it.bind(n))):ue&&pe(ue.bind(n))}if(Ae(Ny,h),Ae(Oy,d),Ae(Py,g),Ae(My,y),Ae(ky,D),Ae(Ry,b),Ae(Vy,Yt),Ae(Fy,Ce),Ae(Uy,Ke),Ae(xy,x),Ae(Yf,ee),Ae(Ly,Ze),j(It))if(It.length){const pe=t.exposed||(t.exposed={});It.forEach(ue=>{Object.defineProperty(pe,ue,{get:()=>n[ue],set:it=>n[ue]=it})})}else t.exposed||(t.exposed={});Ie&&t.render===vt&&(t.render=Ie),Mt!=null&&(t.inheritAttrs=Mt),pt&&(t.components=pt),Xn&&(t.directives=Xn)}function Hy(t,e,n=vt,s=!1){j(t)&&(t=qa(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=un(i.from||r,i.default,!0):o=un(i.from||r):o=un(i),_e(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function gu(t,e,n){wt(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xf(t,e,n,s){const r=s.includes(".")?zf(n,s):()=>n[s];if(Pe(t)){const i=e[t];Y(i)&&ki(r,i)}else if(Y(t))ki(r,t.bind(n));else if(Ee(t))if(j(t))t.forEach(i=>Xf(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&ki(r,i,t)}}function Jf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ki(c,l,o,!0)),Ki(c,e,o)),i.set(e,c),c}function Ki(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ki(t,i,n,!0),r&&r.forEach(o=>Ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qy={data:mu,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:bn,directives:bn,watch:zy,provide:mu,inject:Ky};function mu(t,e){return e?t?function(){return Xe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Ky(t,e){return bn(qa(t),qa(e))}function qa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function zy(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function Wy(t,e,n,s=!1){const r={},i={};$i(i,Do,1),t.propsDefaults=Object.create(null),Zf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ay(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Gy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(So(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=ws(d);r[y]=Ka(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Zf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Ms(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ka(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h)&&!0)&&(delete i[h],l=!0)}l&&jt(t,"set","$attrs")}function Zf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Si(c))continue;const l=e[c];let u;r&&se(r,u=ws(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:So(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ae(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ka(r,c,h,l[h],t,!se(l,h))}}return o}function Ka(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Es(r),s=l[n]=c.call(null,e),Mn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ms(n))&&(s=!0))}return s}function ed(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=ed(h,e,!0);Xe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,fs),fs;if(j(i))for(let u=0;u<i.length;u++){const h=ws(i[u]);yu(h)&&(o[h]=de)}else if(i)for(const u in i){const h=ws(u);if(yu(h)){const d=i[u],g=o[h]=j(d)||Y(d)?{type:d}:d;if(g){const y=_u(Boolean,g.type),D=_u(String,g.type);g[0]=y>-1,g[1]=D<0||y<D,(y>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function yu(t){return t[0]!=="$"}function vu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function wu(t,e){return vu(t)===vu(e)}function _u(t,e){return j(e)?e.findIndex(n=>wu(n,t)):Y(e)&&wu(e,t)?0:-1}const td=t=>t[0]==="_"||t==="$stable",Hc=t=>j(t)?t.map(kt):[kt(t)],Qy=(t,e,n)=>{if(e._n)return e;const s=_y((...r)=>Hc(e(...r)),n);return s._c=!1,s},nd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(td(r))continue;const i=t[r];if(Y(i))e[r]=Qy(r,i,s);else if(i!=null){const o=Hc(i);e[r]=()=>o}}},sd=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},Yy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),$i(e,"_",n)):nd(e,t.slots={})}else t.slots={},e&&sd(t,e);$i(t.slots,Do,1)},Xy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,nd(e,r)),o=e}else e&&(sd(t,e),o={default:1});if(i)for(const a in r)!td(a)&&!(a in o)&&delete r[a]};function rd(){return{app:null,config:{isNativeTag:Am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Zy(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!Ee(r)&&(r=null);const i=rd(),o=new Set;let a=!1;const c=i.app={_uid:Jy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:vv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Oe(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,No(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function za(t,e,n,s,r=!1){if(j(t)){t.forEach((d,g)=>za(d,e&&(j(e)?e[g]:e),n,s,r));return}if(Ri(s)&&!r)return;const i=s.shapeFlag&4?No(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,se(h,l)&&(h[l]=null)):_e(l)&&(l.value=null)),Y(c))ln(c,a,12,[o,u]);else{const d=Pe(c),g=_e(c);if(d||g){const y=()=>{if(t.f){const D=d?u[c]:c.value;r?j(D)&&Pc(D,i):j(D)?D.includes(i)||D.push(i):d?(u[c]=[i],se(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,et(y,n)):y()}}}const et=Cy;function ev(t){return tv(t)}function tv(t,e){const n=Pm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=vt,cloneNode:y,insertStaticContent:D}=t,b=(f,p,m,_=null,w=null,C=null,N=!1,S=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Gs(f,p)&&(_=L(f),ht(f,w,C,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:F,shapeFlag:P}=p;switch(E){case qc:A(f,p,m,_);break;case Un:x(f,p,m,_);break;case Di:f==null&&Q(p,m,_,N);break;case At:Xn(f,p,m,_,w,C,N,S,k);break;default:P&1?Ce(f,p,m,_,w,C,N,S,k):P&6?Jn(f,p,m,_,w,C,N,S,k):(P&64||P&128)&&E.process(f,p,m,_,w,C,N,S,k,ge)}F!=null&&w&&za(F,f&&f.ref,C,p||f,!p)},A=(f,p,m,_)=>{if(f==null)s(p.el=a(p.children),m,_);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},x=(f,p,m,_)=>{f==null?s(p.el=c(p.children||""),m,_):p.el=f.el},Q=(f,p,m,_)=>{[f.el,f.anchor]=D(f.children,p,m,_,f.el,f.anchor)},ee=({el:f,anchor:p},m,_)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,_),f=w;s(p,m,_)},Ie=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},Ce=(f,p,m,_,w,C,N,S,k)=>{N=N||p.type==="svg",f==null?Ke(p,m,_,w,C,N,S,k):It(f,p,w,C,N,S,k)},Ke=(f,p,m,_,w,C,N,S)=>{let k,E;const{type:F,props:P,shapeFlag:V,transition:K,patchFlag:re,dirs:he}=f;if(f.el&&y!==void 0&&re===-1)k=f.el=y(f.el);else{if(k=f.el=o(f.type,C,P&&P.is,P),V&8?u(k,f.children):V&16&&Ze(f.children,k,null,_,w,C&&F!=="foreignObject",N,S),he&&In(f,null,_,"created"),P){for(const ye in P)ye!=="value"&&!Si(ye)&&i(k,ye,null,P[ye],C,f.children,_,w,R);"value"in P&&i(k,"value",null,P.value),(E=P.onVnodeBeforeMount)&&St(E,_,f)}Yt(k,f,f.scopeId,N,_)}he&&In(f,null,_,"beforeMount");const fe=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;fe&&K.beforeEnter(k),s(k,p,m),((E=P&&P.onVnodeMounted)||fe||he)&&et(()=>{E&&St(E,_,f),fe&&K.enter(k),he&&In(f,null,_,"mounted")},w)},Yt=(f,p,m,_,w)=>{if(m&&g(f,m),_)for(let C=0;C<_.length;C++)g(f,_[C]);if(w){let C=w.subTree;if(p===C){const N=w.vnode;Yt(f,N,N.scopeId,N.slotScopeIds,w.parent)}}},Ze=(f,p,m,_,w,C,N,S,k=0)=>{for(let E=k;E<f.length;E++){const F=f[E]=S?tn(f[E]):kt(f[E]);b(null,F,p,m,_,w,C,N,S)}},It=(f,p,m,_,w,C,N)=>{const S=p.el=f.el;let{patchFlag:k,dynamicChildren:E,dirs:F}=p;k|=f.patchFlag&16;const P=f.props||de,V=p.props||de;let K;m&&Tn(m,!1),(K=V.onVnodeBeforeUpdate)&&St(K,m,p,f),F&&In(p,f,m,"beforeUpdate"),m&&Tn(m,!0);const re=w&&p.type!=="foreignObject";if(E?Mt(f.dynamicChildren,E,S,m,_,re,C):N||it(f,p,S,null,m,_,re,C,!1),k>0){if(k&16)pt(S,p,P,V,m,_,w);else if(k&2&&P.class!==V.class&&i(S,"class",null,V.class,w),k&4&&i(S,"style",P.style,V.style,w),k&8){const he=p.dynamicProps;for(let fe=0;fe<he.length;fe++){const ye=he[fe],gt=P[ye],ts=V[ye];(ts!==gt||ye==="value")&&i(S,ye,gt,ts,w,f.children,m,_,R)}}k&1&&f.children!==p.children&&u(S,p.children)}else!N&&E==null&&pt(S,p,P,V,m,_,w);((K=V.onVnodeUpdated)||F)&&et(()=>{K&&St(K,m,p,f),F&&In(p,f,m,"updated")},_)},Mt=(f,p,m,_,w,C,N)=>{for(let S=0;S<p.length;S++){const k=f[S],E=p[S],F=k.el&&(k.type===At||!Gs(k,E)||k.shapeFlag&70)?h(k.el):m;b(k,E,F,null,_,w,C,N,!0)}},pt=(f,p,m,_,w,C,N)=>{if(m!==_){for(const S in _){if(Si(S))continue;const k=_[S],E=m[S];k!==E&&S!=="value"&&i(f,S,E,k,N,p.children,w,C,R)}if(m!==de)for(const S in m)!Si(S)&&!(S in _)&&i(f,S,m[S],null,N,p.children,w,C,R);"value"in _&&i(f,"value",m.value,_.value)}},Xn=(f,p,m,_,w,C,N,S,k)=>{const E=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:V,slotScopeIds:K}=p;K&&(S=S?S.concat(K):K),f==null?(s(E,m,_),s(F,m,_),Ze(p.children,m,F,w,C,N,S,k)):P>0&&P&64&&V&&f.dynamicChildren?(Mt(f.dynamicChildren,V,m,w,C,N,S),(p.key!=null||w&&p===w.subTree)&&id(f,p,!0)):it(f,p,m,F,w,C,N,S,k)},Jn=(f,p,m,_,w,C,N,S,k)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?w.ctx.activate(p,m,_,N,k):Zn(p,m,_,w,C,N,k):Ae(f,p,k)},Zn=(f,p,m,_,w,C,N)=>{const S=f.component=fv(f,_,w);if(Gf(f)&&(S.ctx.renderer=ge),dv(S),S.asyncDep){if(w&&w.registerDep(S,pe),!f.el){const k=S.subTree=Oe(Un);x(null,k,p,m)}return}pe(S,f,p,m,w,C,N)},Ae=(f,p,m)=>{const _=p.component=f.component;if(Ty(f,p,m))if(_.asyncDep&&!_.asyncResolved){ue(_,p,m);return}else _.next=p,my(_.update),_.update();else p.el=f.el,_.vnode=p},pe=(f,p,m,_,w,C,N)=>{const S=()=>{if(f.isMounted){let{next:F,bu:P,u:V,parent:K,vnode:re}=f,he=F,fe;Tn(f,!1),F?(F.el=re.el,ue(f,F,N)):F=re,P&&Ci(P),(fe=F.props&&F.props.onVnodeBeforeUpdate)&&St(fe,K,F,re),Tn(f,!0);const ye=fa(f),gt=f.subTree;f.subTree=ye,b(gt,ye,h(gt.el),L(gt),f,w,C),F.el=ye.el,he===null&&by(f,ye.el),V&&et(V,w),(fe=F.props&&F.props.onVnodeUpdated)&&et(()=>St(fe,K,F,re),w)}else{let F;const{el:P,props:V}=p,{bm:K,m:re,parent:he}=f,fe=Ri(p);if(Tn(f,!1),K&&Ci(K),!fe&&(F=V&&V.onVnodeBeforeMount)&&St(F,he,p),Tn(f,!0),P&&W){const ye=()=>{f.subTree=fa(f),W(P,f.subTree,f,w,null)};fe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ye()):ye()}else{const ye=f.subTree=fa(f);b(null,ye,m,_,f,w,C),p.el=ye.el}if(re&&et(re,w),!fe&&(F=V&&V.onVnodeMounted)){const ye=p;et(()=>St(F,he,ye),w)}(p.shapeFlag&256||he&&Ri(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&et(f.a,w),f.isMounted=!0,p=m=_=null}},k=f.effect=new Lc(S,()=>Vf(E),f.scope),E=f.update=()=>k.run();E.id=f.uid,Tn(f,!0),E()},ue=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Gy(f,p.props,_,m),Xy(f,p.children,m),xs(),bo(void 0,f.update),Ls()},it=(f,p,m,_,w,C,N,S,k=!1)=>{const E=f&&f.children,F=f?f.shapeFlag:0,P=p.children,{patchFlag:V,shapeFlag:K}=p;if(V>0){if(V&128){xt(E,P,m,_,w,C,N,S,k);return}else if(V&256){es(E,P,m,_,w,C,N,S,k);return}}K&8?(F&16&&R(E,w,C),P!==E&&u(m,P)):F&16?K&16?xt(E,P,m,_,w,C,N,S,k):R(E,w,C,!0):(F&8&&u(m,""),K&16&&Ze(P,m,_,w,C,N,S,k))},es=(f,p,m,_,w,C,N,S,k)=>{f=f||fs,p=p||fs;const E=f.length,F=p.length,P=Math.min(E,F);let V;for(V=0;V<P;V++){const K=p[V]=k?tn(p[V]):kt(p[V]);b(f[V],K,m,null,w,C,N,S,k)}E>F?R(f,w,C,!0,!1,P):Ze(p,m,_,w,C,N,S,k,P)},xt=(f,p,m,_,w,C,N,S,k)=>{let E=0;const F=p.length;let P=f.length-1,V=F-1;for(;E<=P&&E<=V;){const K=f[E],re=p[E]=k?tn(p[E]):kt(p[E]);if(Gs(K,re))b(K,re,m,null,w,C,N,S,k);else break;E++}for(;E<=P&&E<=V;){const K=f[P],re=p[V]=k?tn(p[V]):kt(p[V]);if(Gs(K,re))b(K,re,m,null,w,C,N,S,k);else break;P--,V--}if(E>P){if(E<=V){const K=V+1,re=K<F?p[K].el:_;for(;E<=V;)b(null,p[E]=k?tn(p[E]):kt(p[E]),m,re,w,C,N,S,k),E++}}else if(E>V)for(;E<=P;)ht(f[E],w,C,!0),E++;else{const K=E,re=E,he=new Map;for(E=re;E<=V;E++){const ot=p[E]=k?tn(p[E]):kt(p[E]);ot.key!=null&&he.set(ot.key,E)}let fe,ye=0;const gt=V-re+1;let ts=!1,eu=0;const Ws=new Array(gt);for(E=0;E<gt;E++)Ws[E]=0;for(E=K;E<=P;E++){const ot=f[E];if(ye>=gt){ht(ot,w,C,!0);continue}let bt;if(ot.key!=null)bt=he.get(ot.key);else for(fe=re;fe<=V;fe++)if(Ws[fe-re]===0&&Gs(ot,p[fe])){bt=fe;break}bt===void 0?ht(ot,w,C,!0):(Ws[bt-re]=E+1,bt>=eu?eu=bt:ts=!0,b(ot,p[bt],m,null,w,C,N,S,k),ye++)}const tu=ts?nv(Ws):fs;for(fe=tu.length-1,E=gt-1;E>=0;E--){const ot=re+E,bt=p[ot],nu=ot+1<F?p[ot+1].el:_;Ws[E]===0?b(null,bt,m,nu,w,C,N,S,k):ts&&(fe<0||E!==tu[fe]?Tt(bt,m,nu,2):fe--)}}},Tt=(f,p,m,_,w=null)=>{const{el:C,type:N,transition:S,children:k,shapeFlag:E}=f;if(E&6){Tt(f.component.subTree,p,m,_);return}if(E&128){f.suspense.move(p,m,_);return}if(E&64){N.move(f,p,m,ge);return}if(N===At){s(C,p,m);for(let P=0;P<k.length;P++)Tt(k[P],p,m,_);s(f.anchor,p,m);return}if(N===Di){ee(f,p,m);return}if(_!==2&&E&1&&S)if(_===0)S.beforeEnter(C),s(C,p,m),et(()=>S.enter(C),w);else{const{leave:P,delayLeave:V,afterLeave:K}=S,re=()=>s(C,p,m),he=()=>{P(C,()=>{re(),K&&K()})};V?V(C,re,he):he()}else s(C,p,m)},ht=(f,p,m,_=!1,w=!1)=>{const{type:C,props:N,ref:S,children:k,dynamicChildren:E,shapeFlag:F,patchFlag:P,dirs:V}=f;if(S!=null&&za(S,null,m,f,!0),F&256){p.ctx.deactivate(f);return}const K=F&1&&V,re=!Ri(f);let he;if(re&&(he=N&&N.onVnodeBeforeUnmount)&&St(he,p,f),F&6)M(f.component,m,_);else{if(F&128){f.suspense.unmount(m,_);return}K&&In(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,m,w,ge,_):E&&(C!==At||P>0&&P&64)?R(E,p,m,!1,!0):(C===At&&P&384||!w&&F&16)&&R(k,p,m),_&&zs(f)}(re&&(he=N&&N.onVnodeUnmounted)||K)&&et(()=>{he&&St(he,p,f),K&&In(f,null,p,"unmounted")},m)},zs=f=>{const{type:p,el:m,anchor:_,transition:w}=f;if(p===At){v(m,_);return}if(p===Di){Ie(f);return}const C=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:S}=w,k=()=>N(m,C);S?S(f.el,C,k):k()}else C()},v=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},M=(f,p,m)=>{const{bum:_,scope:w,update:C,subTree:N,um:S}=f;_&&Ci(_),w.stop(),C&&(C.active=!1,ht(N,f,p,m)),S&&et(S,p),et(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(f,p,m,_=!1,w=!1,C=0)=>{for(let N=C;N<f.length;N++)ht(f[N],p,m,_,w)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ce=(f,p,m)=>{f==null?p._vnode&&ht(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,m),jf(),p._vnode=f},ge={p:b,um:ht,m:Tt,r:zs,mt:Zn,mc:Ze,pc:it,pbc:Mt,n:L,o:t};let X,W;return e&&([X,W]=e(ge)),{render:ce,hydrate:X,createApp:Zy(ce,X)}}function Tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function id(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=tn(r[i]),a.el=o.el),n||id(o,a))}}function nv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sv=t=>t.__isTeleport,At=Symbol(void 0),qc=Symbol(void 0),Un=Symbol(void 0),Di=Symbol(void 0),ir=[];let yt=null;function Qe(t=!1){ir.push(yt=t?null:[])}function rv(){ir.pop(),yt=ir[ir.length-1]||null}let _r=1;function Eu(t){_r+=t}function od(t){return t.dynamicChildren=_r>0?yt||fs:null,rv(),_r>0&&yt&&yt.push(t),t}function nt(t,e,n,s,r,i){return od(Z(t,e,n,s,r,i,!0))}function iv(t,e,n,s,r){return od(Oe(t,e,n,s,r,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const Do="__vInternal",ad=({key:t})=>t!=null?t:null,Ni=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||_e(t)||Y(t)?{i:Rt,r:t,k:e,f:!!n}:t:null;function Z(t,e=null,n=null,s=0,r=null,i=t===At?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ad(e),ref:e&&Ni(e),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Kc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),_r>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const Oe=ov;function ov(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===$y)&&(t=Un),Wa(t)){const a=_s(t,e,!0);return n&&Kc(a,n),_r>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(yv(t)&&(t=t.__vccOpts),e){e=av(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=Nc(a)),Ee(c)&&(Nf(c)&&!j(c)&&(c=Xe({},c)),e.style=Dc(c))}const o=Pe(t)?1:Sy(t)?128:sv(t)?64:Ee(t)?4:Y(t)?2:0;return Z(t,e,n,s,r,o,i,!0)}function av(t){return t?Nf(t)||Do in t?Xe({},t):t:null}function _s(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?lv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ad(a),ref:e&&e.ref?n&&r?j(r)?r.concat(Ni(e)):[r,Ni(e)]:Ni(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_s(t.ssContent),ssFallback:t.ssFallback&&_s(t.ssFallback),el:t.el,anchor:t.anchor}}function cv(t=" ",e=0){return Oe(qc,null,t,e)}function vA(t,e){const n=Oe(Di,null,t);return n.staticCount=e,n}function Iu(t="",e=!1){return e?(Qe(),iv(Un,null,t)):Oe(Un,null,t)}function kt(t){return t==null||typeof t=="boolean"?Oe(Un):j(t)?Oe(At,null,t.slice()):typeof t=="object"?tn(t):Oe(qc,null,String(t))}function tn(t){return t.el===null||t.memo?t:_s(t)}function Kc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Kc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Do in e)?e._ctx=Rt:r===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),s&64?(n=16,e=[cv(e)]):n=8);t.children=e,t.shapeFlag|=n}function lv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Nc([e.class,s.class]));else if(r==="style")e.style=Dc([e.style,s.style]);else if(wo(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){wt(t,e,7,[n,s])}const uv=rd();let hv=0;function fv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||uv,i={uid:hv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(s,r),emitsOptions:qf(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wy.bind(null,i),t.ce&&t.ce(i),i}let je=null;const Es=t=>{je=t,t.scope.on()},Mn=()=>{je&&je.scope.off(),je=null};function cd(t){return t.vnode.shapeFlag&4}let Er=!1;function dv(t,e=!1){Er=e;const{props:n,children:s}=t.vnode,r=cd(t);Wy(t,n,r,e),Yy(t,s);const i=r?pv(t,e):void 0;return Er=!1,i}function pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Of(new Proxy(t.ctx,By));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?mv(t):null;Es(t),xs();const i=ln(s,t,0,[t.props,r]);if(Ls(),Mn(),mf(i)){if(i.then(Mn,Mn),e)return i.then(o=>{Tu(t,o,e)}).catch(o=>{To(o,t,0)});t.asyncDep=i}else Tu(t,i,e)}else ld(t,e)}function Tu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Lf(e)),ld(t,n)}let bu;function ld(t,e,n){const s=t.type;if(!t.render){if(!e&&bu&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=bu(r,l)}}t.render=s.render||vt}Es(t),xs(),jy(t),Ls(),Mn()}function gv(t){return new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}})}function mv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=gv(t))},slots:t.slots,emit:t.emit,expose:e}}function No(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lf(Of(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)}}))}function yv(t){return Y(t)&&"__vccOpts"in t}const ft=(t,e)=>dy(t,e,Er);function ud(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!j(e)?Wa(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wa(n)&&(n=[n]),Oe(t,e,n))}const vv="3.2.37",wv="http://www.w3.org/2000/svg",Cn=typeof document<"u"?document:null,Su=Cn&&Cn.createElement("template"),_v={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Cn.createElementNS(wv,t):Cn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Su.innerHTML=s?`<svg>${t}</svg>`:t;const a=Su.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ev(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Iv(t,e,n){const s=t.style,r=Pe(n);if(n&&!r){for(const i in n)Ga(s,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&Ga(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Cu=/\s*!important$/;function Ga(t,e,n){if(j(n))n.forEach(s=>Ga(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Tv(t,e);Cu.test(n)?t.setProperty(Ms(s),n.replace(Cu,""),"important"):t[s]=n}}const Au=["Webkit","Moz","ms"],da={};function Tv(t,e){const n=da[e];if(n)return n;let s=ws(e);if(s!=="filter"&&s in t)return da[e]=s;s=wf(s);for(let r=0;r<Au.length;r++){const i=Au[r]+s;if(i in t)return da[e]=i}return e}const ku="http://www.w3.org/1999/xlink";function bv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ku,e.slice(6,e.length)):t.setAttributeNS(ku,e,n);else{const i=Em(e);n==null||i&&!pf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Sv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[hd,Cv]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Qa=0;const Av=Promise.resolve(),kv=()=>{Qa=0},Rv=()=>Qa||(Av.then(kv),Qa=hd());function An(t,e,n,s){t.addEventListener(e,n,s)}function Dv(t,e,n,s){t.removeEventListener(e,n,s)}function Nv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ov(e);if(s){const l=i[e]=Pv(s,r);An(t,a,l,c)}else o&&(Dv(t,a,o,c),i[e]=void 0)}}const Ru=/(?:Once|Passive|Capture)$/;function Ov(t){let e;if(Ru.test(t)){e={};let n;for(;n=t.match(Ru);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ms(t.slice(2)),e]}function Pv(t,e){const n=s=>{const r=s.timeStamp||hd();(Cv||r>=n.attached-1)&&wt(Mv(s,n.value),e,5,[s])};return n.value=t,n.attached=Rv(),n}function Mv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Du=/^on[a-z]/,xv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Ev(t,s,r):e==="style"?Iv(t,n,s):wo(e)?Oc(e)||Nv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lv(t,e,s,r))?Sv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bv(t,e,s,r))};function Lv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Du.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Du.test(e)&&Pe(n)?!1:e in t}const zi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>Ci(e,n):e};function Uv(t){t.target.composing=!0}function Nu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cs={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=zi(r);const i=s||r.props&&r.props.type==="number";An(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bi(a)),t._assign(a)}),n&&An(t,"change",()=>{t.value=t.value.trim()}),e||(An(t,"compositionstart",Uv),An(t,"compositionend",Nu),An(t,"change",Nu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=zi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Bi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},wA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=_o(e);An(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bi(Wi(o)):Wi(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=zi(s)},mounted(t,{value:e}){Ou(t,e)},beforeUpdate(t,e,n){t._assign=zi(n)},updated(t,{value:e}){Ou(t,e)}};function Ou(t,e){const n=t.multiple;if(!(n&&!j(e)&&!_o(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Wi(i);if(n)j(e)?i.selected=Cm(e,o)>-1:i.selected=e.has(o);else if(vo(Wi(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wi(t){return"_value"in t?t._value:t.value}const Fv=["ctrl","shift","alt","meta"],Vv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fv.some(n=>t[`${n}Key`]&&!e.includes(n))},Ya=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Vv[e[r]];if(i&&i(n,e))return}return t(n,...s)},$v=Xe({patchProp:xv},_v);let Pu;function Bv(){return Pu||(Pu=ev($v))}const jv=(...t)=>{const e=Bv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Hv(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Hv(t){return Pe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof window<"u";function qv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function pa(t,e){const n={};for(const s in e){const r=e[s];n[s]=_t(r)?r.map(t):t(r)}return n}const or=()=>{},_t=Array.isArray,Kv=/\/$/,zv=t=>t.replace(Kv,"");function ga(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Yv(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Wv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Is(e.matched[s],n.matched[r])&&fd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qv(t[n],e[n]))return!1;return!0}function Qv(t,e){return _t(t)?xu(t,e):_t(e)?xu(e,t):t===e}function xu(t,e){return _t(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ir;(function(t){t.pop="pop",t.push="push"})(Ir||(Ir={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function Xv(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zv(t)}const Jv=/^[^#]+#/;function Zv(t,e){return t.replace(Jv,"#")+e}function ew(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Oo=()=>({left:window.pageXOffset,top:window.pageYOffset});function tw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ew(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Lu(t,e){return(history.state?history.state.position-e:-1)+t}const Xa=new Map;function nw(t,e){Xa.set(t,e)}function sw(t){const e=Xa.get(t);return Xa.delete(t),e}let rw=()=>location.protocol+"//"+location.host;function dd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Mu(c,"")}return Mu(n,t)+s+r}function iw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=dd(t,location),y=n.value,D=e.value;let b=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}b=D?d.position-D.position:0}else s(g);r.forEach(A=>{A(n.value,y,{delta:b,type:Ir.pop,direction:b?b>0?ar.forward:ar.back:ar.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(le({},d.state,{scroll:Oo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Uu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Oo():null}}function ow(t){const{history:e,location:n}=window,s={value:dd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:rw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=le({},e.state,Uu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=le({},r.value,e.state,{forward:c,scroll:Oo()});i(u.current,u,!0);const h=le({},Uu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function aw(t){t=Xv(t);const e=ow(t),n=iw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:Zv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function cw(t){return typeof t=="string"||t&&typeof t=="object"}function pd(t){return typeof t=="string"||typeof t=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gd=Symbol("");var Fu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fu||(Fu={}));function Ts(t,e){return le(new Error,{type:t,[gd]:!0},e)}function Lt(t,e){return t instanceof Error&&gd in t&&(e==null||!!(t.type&e))}const Vu="[^/]+?",lw={sensitive:!1,strict:!1,start:!0,end:!0},uw=/[.+*?^${}()[\]/\\]/g;function hw(t,e){const n=le({},lw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(uw,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:D,optional:b,regexp:A}=d;i.push({name:y,repeatable:D,optional:b});const x=A||Vu;if(x!==Vu){g+=10;try{new RegExp(`(${x})`)}catch(ee){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+ee.message)}}let Q=D?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(Q=b&&l.length<2?`(?:/${Q})`:"/"+Q),b&&(Q+="?"),r+=Q,g+=20,b&&(g+=-8),D&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:D,optional:b}=g,A=y in l?l[y]:"";if(_t(A)&&!D)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=_t(A)?A.join("/"):A;if(!x)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function fw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=fw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if($u(s))return 1;if($u(r))return-1}return r.length-s.length}function $u(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pw={type:0,value:""},gw=/[a-zA-Z0-9_]/;function mw(t){if(!t)return[[]];if(t==="/")return[[pw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:gw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function yw(t,e,n){const s=hw(mw(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function vw(t,e){const n=[],s=new Map;e=Hu({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,y=ww(u);y.aliasOf=d&&d.record;const D=Hu(e,u),b=[y];if("alias"in u){const Q=typeof u.alias=="string"?[u.alias]:u.alias;for(const ee of Q)b.push(le({},y,{components:d?d.record.components:y.components,path:ee,aliasOf:d?d.record:y}))}let A,x;for(const Q of b){const{path:ee}=Q;if(h&&ee[0]!=="/"){const Ie=h.record.path,Ce=Ie[Ie.length-1]==="/"?"":"/";Q.path=h.record.path+(ee&&Ce+ee)}if(A=yw(Q,h,D),d?d.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&u.name&&!ju(A)&&o(u.name)),y.children){const Ie=y.children;for(let Ce=0;Ce<Ie.length;Ce++)i(Ie[Ce],A,d&&d.children[Ce])}d=d||A,c(A)}return x?()=>{o(x)}:or}function o(u){if(pd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&dw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!md(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ju(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,D;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ts(1,{location:u});D=d.record.name,g=le(Bu(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Bu(u.params,d.keys.map(x=>x.name))),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(x=>x.re.test(y)),d&&(g=d.parse(y),D=d.record.name);else{if(d=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw Ts(1,{location:u,currentLocation:h});D=d.record.name,g=le({},h.params,u.params),y=d.stringify(g)}const b=[];let A=d;for(;A;)b.unshift(A.record),A=A.parent;return{name:D,path:y,params:g,matched:b,meta:Ew(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Bu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ww(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_w(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _w(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ju(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ew(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Hu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function md(t,e){return e.children.some(n=>n===t||md(t,n))}const yd=/#/g,Iw=/&/g,Tw=/\//g,bw=/=/g,Sw=/\?/g,vd=/\+/g,Cw=/%5B/g,Aw=/%5D/g,wd=/%5E/g,kw=/%60/g,_d=/%7B/g,Rw=/%7C/g,Ed=/%7D/g,Dw=/%20/g;function zc(t){return encodeURI(""+t).replace(Rw,"|").replace(Cw,"[").replace(Aw,"]")}function Nw(t){return zc(t).replace(_d,"{").replace(Ed,"}").replace(wd,"^")}function Ja(t){return zc(t).replace(vd,"%2B").replace(Dw,"+").replace(yd,"%23").replace(Iw,"%26").replace(kw,"`").replace(_d,"{").replace(Ed,"}").replace(wd,"^")}function Ow(t){return Ja(t).replace(bw,"%3D")}function Pw(t){return zc(t).replace(yd,"%23").replace(Sw,"%3F")}function Mw(t){return t==null?"":Pw(t).replace(Tw,"%2F")}function Gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(vd," "),o=i.indexOf("="),a=Gi(o<0?i:i.slice(0,o)),c=o<0?null:Gi(i.slice(o+1));if(a in e){let l=e[a];_t(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function qu(t){let e="";for(let n in t){const s=t[n];if(n=Ow(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_t(s)?s.map(i=>i&&Ja(i)):[s&&Ja(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Lw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_t(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Uw=Symbol(""),Ku=Symbol(""),Wc=Symbol(""),Id=Symbol(""),Za=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ts(4,{from:n,to:e})):h instanceof Error?a(h):cw(h)?a(Ts(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ma(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Fw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(nn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=qv(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&nn(d,n,s,i,o)()}))}}return r}function Fw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zu(t){const e=un(Wc),n=un(Id),s=ft(()=>e.resolve(Pn(t.to))),r=ft(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Is.bind(null,u));if(d>-1)return d;const g=Wu(c[l-2]);return l>1&&Wu(u)===g&&h[h.length-1].path!==g?h.findIndex(Is.bind(null,c[l-2])):d}),i=ft(()=>r.value>-1&&jw(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&fd(n.params,s.value.params));function a(c={}){return Bw(c)?e[Pn(t.replace)?"replace":"push"](Pn(t.to)).catch(or):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Vw=Wf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zu,setup(t,{slots:e}){const n=Us(zu(t)),{options:s}=un(Wc),r=ft(()=>({[Gu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Gu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ud("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),$w=Vw;function Bw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!_t(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Wu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gu=(t,e,n)=>t!=null?t:e!=null?e:n,Hw=Wf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=un(Za),r=ft(()=>t.route||s.value),i=un(Ku,0),o=ft(()=>{let l=Pn(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ft(()=>r.value.matched[o.value]);Ai(Ku,ft(()=>o.value+1)),Ai(Uw,a),Ai(Za,r);const c=cy();return ki(()=>[c.value,a.value,t.name],([l,u,h],[d,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Is(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(D=>D(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Qu(n.default,{Component:d,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,b=ud(d,le({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Qu(n.default,{Component:b,route:l})||b}}});function Qu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Td=Hw;function qw(t){const e=vw(t.routes,t),n=t.parseQuery||xw,s=t.stringifyQuery||qu,r=t.history,i=Qs(),o=Qs(),a=Qs(),c=ly(Jt);let l=Jt;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,v=>""+v),h=pa.bind(null,Mw),d=pa.bind(null,Gi);function g(v,M){let R,L;return pd(v)?(R=e.getRecordMatcher(v),L=M):L=v,e.addRoute(L,R)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function D(){return e.getRoutes().map(v=>v.record)}function b(v){return!!e.getRecordMatcher(v)}function A(v,M){if(M=le({},M||c.value),typeof v=="string"){const W=ga(n,v,M.path),f=e.resolve({path:W.path},M),p=r.createHref(W.fullPath);return le(W,f,{params:d(f.params),hash:Gi(W.hash),redirectedFrom:void 0,href:p})}let R;if("path"in v)R=le({},v,{path:ga(n,v.path,M.path).path});else{const W=le({},v.params);for(const f in W)W[f]==null&&delete W[f];R=le({},v,{params:h(v.params)}),M.params=h(M.params)}const L=e.resolve(R,M),ce=v.hash||"";L.params=u(d(L.params));const ge=Wv(s,le({},v,{hash:Nw(ce),path:L.path})),X=r.createHref(ge);return le({fullPath:ge,hash:ce,query:s===qu?Lw(v.query):v.query||{}},L,{redirectedFrom:void 0,href:X})}function x(v){return typeof v=="string"?ga(n,v,c.value.path):le({},v)}function Q(v,M){if(l!==v)return Ts(8,{from:M,to:v})}function ee(v){return Ke(v)}function Ie(v){return ee(le(x(v),{replace:!0}))}function Ce(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:R}=M;let L=typeof R=="function"?R(v):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),le({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function Ke(v,M){const R=l=A(v),L=c.value,ce=v.state,ge=v.force,X=v.replace===!0,W=Ce(R);if(W)return Ke(le(x(W),{state:typeof W=="object"?le({},ce,W.state):ce,force:ge,replace:X}),M||R);const f=R;f.redirectedFrom=M;let p;return!ge&&Gv(s,L,R)&&(p=Ts(16,{to:f,from:L}),es(L,L,!0,!1)),(p?Promise.resolve(p):Ze(f,L)).catch(m=>Lt(m)?Lt(m,2)?m:it(m):pe(m,f,L)).then(m=>{if(m){if(Lt(m,2))return Ke(le({replace:X},x(m.to),{state:typeof m.to=="object"?le({},ce,m.to.state):ce,force:ge}),M||f)}else m=Mt(f,L,!0,X,ce);return It(f,L,m),m})}function Yt(v,M){const R=Q(v,M);return R?Promise.reject(R):Promise.resolve()}function Ze(v,M){let R;const[L,ce,ge]=Kw(v,M);R=ma(L.reverse(),"beforeRouteLeave",v,M);for(const W of L)W.leaveGuards.forEach(f=>{R.push(nn(f,v,M))});const X=Yt.bind(null,v,M);return R.push(X),ns(R).then(()=>{R=[];for(const W of i.list())R.push(nn(W,v,M));return R.push(X),ns(R)}).then(()=>{R=ma(ce,"beforeRouteUpdate",v,M);for(const W of ce)W.updateGuards.forEach(f=>{R.push(nn(f,v,M))});return R.push(X),ns(R)}).then(()=>{R=[];for(const W of v.matched)if(W.beforeEnter&&!M.matched.includes(W))if(_t(W.beforeEnter))for(const f of W.beforeEnter)R.push(nn(f,v,M));else R.push(nn(W.beforeEnter,v,M));return R.push(X),ns(R)}).then(()=>(v.matched.forEach(W=>W.enterCallbacks={}),R=ma(ge,"beforeRouteEnter",v,M),R.push(X),ns(R))).then(()=>{R=[];for(const W of o.list())R.push(nn(W,v,M));return R.push(X),ns(R)}).catch(W=>Lt(W,8)?W:Promise.reject(W))}function It(v,M,R){for(const L of a.list())L(v,M,R)}function Mt(v,M,R,L,ce){const ge=Q(v,M);if(ge)return ge;const X=M===Jt,W=os?history.state:{};R&&(L||X?r.replace(v.fullPath,le({scroll:X&&W&&W.scroll},ce)):r.push(v.fullPath,ce)),c.value=v,es(v,M,R,X),it()}let pt;function Xn(){pt||(pt=r.listen((v,M,R)=>{if(!zs.listening)return;const L=A(v),ce=Ce(L);if(ce){Ke(le(ce,{replace:!0}),L).catch(or);return}l=L;const ge=c.value;os&&nw(Lu(ge.fullPath,R.delta),Oo()),Ze(L,ge).catch(X=>Lt(X,12)?X:Lt(X,2)?(Ke(X.to,L).then(W=>{Lt(W,20)&&!R.delta&&R.type===Ir.pop&&r.go(-1,!1)}).catch(or),Promise.reject()):(R.delta&&r.go(-R.delta,!1),pe(X,L,ge))).then(X=>{X=X||Mt(L,ge,!1),X&&(R.delta&&!Lt(X,8)?r.go(-R.delta,!1):R.type===Ir.pop&&Lt(X,20)&&r.go(-1,!1)),It(L,ge,X)}).catch(or)}))}let Jn=Qs(),Zn=Qs(),Ae;function pe(v,M,R){it(v);const L=Zn.list();return L.length?L.forEach(ce=>ce(v,M,R)):console.error(v),Promise.reject(v)}function ue(){return Ae&&c.value!==Jt?Promise.resolve():new Promise((v,M)=>{Jn.add([v,M])})}function it(v){return Ae||(Ae=!v,Xn(),Jn.list().forEach(([M,R])=>v?R(v):M()),Jn.reset()),v}function es(v,M,R,L){const{scrollBehavior:ce}=t;if(!os||!ce)return Promise.resolve();const ge=!R&&sw(Lu(v.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return Ff().then(()=>ce(v,M,ge)).then(X=>X&&tw(X)).catch(X=>pe(X,v,M))}const xt=v=>r.go(v);let Tt;const ht=new Set,zs={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:b,getRoutes:D,resolve:A,options:t,push:ee,replace:Ie,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Zn.add,isReady:ue,install(v){const M=this;v.component("RouterLink",$w),v.component("RouterView",Td),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Pn(c)}),os&&!Tt&&c.value===Jt&&(Tt=!0,ee(r.location).catch(ce=>{}));const R={};for(const ce in Jt)R[ce]=ft(()=>c.value[ce]);v.provide(Wc,M),v.provide(Id,Us(R)),v.provide(Za,c);const L=v.unmount;ht.add(v),v.unmount=function(){ht.delete(v),ht.size<1&&(l=Jt,pt&&pt(),pt=null,c.value=Jt,Tt=!1,Ae=!1),L()}}};return zs}function ns(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Kw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Is(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Is(l,c))||r.push(c))}return[n,s,r]}const zw="/HittaProgrammerare/assets/SiggeDrip.79280d2b.jpeg";/**
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
 *//**
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
 */const bd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ww=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ww(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gw=function(t){const e=bd(t);return Sd.encodeByteArray(e,!0)},Cd=function(t){return Gw(t).replace(/\./g,"")},Qw=function(t){try{return Sd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Yw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function kd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){return Me().indexOf("Electron/")>=0}function Dd(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jw(){return Me().indexOf("MSAppHost/")>=0}function Zw(){return typeof indexedDB=="object"}function e_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const t_="FirebaseError";class Qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=t_,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?n_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qt(r,a,s)}}function n_(t,e){return t.replace(s_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const s_=/\{\$([^}]+)}/g;function r_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Yu(i)&&Yu(o)){if(!Qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Yu(t){return t!==null&&typeof t=="object"}/**
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
 */function Br(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function er(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function i_(t,e){const n=new o_(t,e);return n.subscribe.bind(n)}class o_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");a_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ya),r.error===void 0&&(r.error=ya),r.complete===void 0&&(r.complete=ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function a_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class c_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(u_(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:l_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l_(t){return t===Sn?void 0:t}function u_(t){return t.instantiationMode==="EAGER"}/**
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
 */class h_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new c_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const f_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},d_=ie.INFO,p_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},g_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=p_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=d_,this._logHandler=g_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?f_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const m_=(t,e)=>e.some(n=>t instanceof n);let Xu,Ju;function y_(){return Xu||(Xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v_(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nd=new WeakMap,ec=new WeakMap,Od=new WeakMap,va=new WeakMap,Qc=new WeakMap;function w_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nd.set(n,t)}).catch(()=>{}),Qc.set(e,t),e}function __(t){if(ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Od.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E_(t){tc=t(tc)}function I_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wa(this),e,...n);return Od.set(s,e.sort?e.sort():[e]),hn(s)}:v_().includes(t)?function(...e){return t.apply(wa(this),e),hn(Nd.get(this))}:function(...e){return hn(t.apply(wa(this),e))}}function T_(t){return typeof t=="function"?I_(t):(t instanceof IDBTransaction&&__(t),m_(t,y_())?new Proxy(t,tc):t)}function hn(t){if(t instanceof IDBRequest)return w_(t);if(va.has(t))return va.get(t);const e=T_(t);return e!==t&&(va.set(t,e),Qc.set(e,t)),e}const wa=t=>Qc.get(t);function b_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=hn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const S_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],_a=new Map;function Zu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_a.get(e))return _a.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=C_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||S_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return _a.set(e,i),i}E_(t=>({...t,get:(e,n,s)=>Zu(e,n)||t.get(e,n,s),has:(e,n)=>!!Zu(e,n)||t.has(e,n)}));/**
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
 */class A_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(k_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function k_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",eh="0.7.32";/**
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
 */const Vn=new Gc("@firebase/app"),R_="@firebase/app-compat",D_="@firebase/analytics-compat",N_="@firebase/analytics",O_="@firebase/app-check-compat",P_="@firebase/app-check",M_="@firebase/auth",x_="@firebase/auth-compat",L_="@firebase/database",U_="@firebase/database-compat",F_="@firebase/functions",V_="@firebase/functions-compat",$_="@firebase/installations",B_="@firebase/installations-compat",j_="@firebase/messaging",H_="@firebase/messaging-compat",q_="@firebase/performance",K_="@firebase/performance-compat",z_="@firebase/remote-config",W_="@firebase/remote-config-compat",G_="@firebase/storage",Q_="@firebase/storage-compat",Y_="@firebase/firestore",X_="@firebase/firestore-compat",J_="firebase",Z_="9.9.4";/**
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
 */const Pd="[DEFAULT]",eE={[nc]:"fire-core",[R_]:"fire-core-compat",[N_]:"fire-analytics",[D_]:"fire-analytics-compat",[P_]:"fire-app-check",[O_]:"fire-app-check-compat",[M_]:"fire-auth",[x_]:"fire-auth-compat",[L_]:"fire-rtdb",[U_]:"fire-rtdb-compat",[F_]:"fire-fn",[V_]:"fire-fn-compat",[$_]:"fire-iid",[B_]:"fire-iid-compat",[j_]:"fire-fcm",[H_]:"fire-fcm-compat",[q_]:"fire-perf",[K_]:"fire-perf-compat",[z_]:"fire-rc",[W_]:"fire-rc-compat",[G_]:"fire-gcs",[Q_]:"fire-gcs-compat",[Y_]:"fire-fst",[X_]:"fire-fst-compat","fire-js":"fire-js",[J_]:"fire-js-all"};/**
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
 */const Yi=new Map,sc=new Map;function tE(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(sc.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of Yi.values())tE(n,t);return!0}function Yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new $r("app","Firebase",nE);/**
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
 */class sE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=Z_;function rE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pd,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});const r=Yi.get(s);if(r){if(Qi(t,r.options)&&Qi(n,r.config))return r;throw $n.create("duplicate-app",{appName:s})}const i=new h_(s);for(const a of sc.values())i.addComponent(a);const o=new sE(t,n,i);return Yi.set(s,o),o}function Md(t=Pd){const e=Yi.get(t);if(!e)throw $n.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=eE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}bs(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const iE="firebase-heartbeat-database",oE=1,Tr="firebase-heartbeat-store";let Ea=null;function xd(){return Ea||(Ea=b_(iE,oE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tr)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Ea}async function aE(t){var e;try{return(await xd()).transaction(Tr).objectStore(Tr).get(Ld(t))}catch(n){if(n instanceof Qt)Vn.warn(n.message);else{const s=$n.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Vn.warn(s.message)}}}async function th(t,e){var n;try{const r=(await xd()).transaction(Tr,"readwrite");return await r.objectStore(Tr).put(e,Ld(t)),r.done}catch(s){if(s instanceof Qt)Vn.warn(s.message);else{const r=$n.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Vn.warn(r.message)}}}function Ld(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cE=1024,lE=30*24*60*60*1e3;class uE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=lE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nh(),{heartbeatsToSend:n,unsentEntries:s}=hE(this._heartbeatsCache.heartbeats),r=Cd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nh(){return new Date().toISOString().substring(0,10)}function hE(t,e=cE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),sh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zw()?e_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sh(t){return Cd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dE(t){bs(new Fn("platform-logger",e=>new A_(e),"PRIVATE")),bs(new Fn("heartbeat",e=>new uE(e),"PRIVATE")),fn(nc,eh,t),fn(nc,eh,"esm2017"),fn("fire-js","")}dE("");function Xc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ud(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=Ud,Fd=new $r("auth","Firebase",Ud());/**
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
 */const rh=new Gc("@firebase/auth");function Oi(t,...e){rh.logLevel<=ie.ERROR&&rh.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw Jc(t,...e)}function Dt(t,...e){return Jc(t,...e)}function gE(t,e,n){const s=Object.assign(Object.assign({},pE()),{[e]:n});return new $r("auth","Firebase",s).create(e,{appName:t.name})}function Jc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fd.create(t,...e)}function H(t,e,...n){if(!t)throw Jc(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function Ht(t,e){t||Ft(e)}/**
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
 */const ih=new Map;function Vt(t){Ht(t instanceof Function,"Expected a class definition");let e=ih.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ih.set(t,e),e)}/**
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
 */function mE(t,e){const n=Yc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Qi(i,e!=null?e:{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function yE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vE(){return oh()==="http:"||oh()==="https:"}function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vE()||kd()||"connection"in navigator)?navigator.onLine:!0}function _E(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Ad()||Rd()}get(){return wE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zc(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const IE=new Hr(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,s,r={}){return $d(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Br(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Vd.fetch()(Bd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function $d(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},EE),e);try{const r=new TE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gE(t,u,l);Et(t,u)}}catch(r){if(r instanceof Qt)throw r;Et(t,"network-request-failed")}}async function zr(t,e,n,s,r={}){const i=await Kr(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Zc(t.config,r):`${t.config.apiScheme}://${r}`}class TE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),IE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function bE(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}async function SE(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CE(t,e=!1){const n=Je(t),s=await n.getIdToken(e),r=el(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:cr(Ia(r.auth_time)),issuedAtTime:cr(Ia(r.iat)),expirationTime:cr(Ia(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function el(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qw(s);return i?JSON.parse(i):(Oi("Failed to decode base64 JWT payload"),null)}catch(i){return Oi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function AE(t){const e=el(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function br(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Qt&&kE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class RE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await br(t,SE(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?OE(i.providerUserInfo):[],a=NE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function DE(t){const e=Je(t);await Xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function OE(t){return t.map(e=>{var{providerId:n}=e,s=Xc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function PE(t,e){const n=await $d(t,{},async()=>{const s=Br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Bd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await PE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Sr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Zt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await br(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CE(this,e)}reload(){return DE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await br(this,bE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:ee,isAnonymous:Ie,providerData:Ce,stsTokenManager:Ke}=n;H(Q&&Ke,e,"internal-error");const Yt=Sr.fromJSON(this.name,Ke);H(typeof Q=="string",e,"internal-error"),Zt(h,e.name),Zt(d,e.name),H(typeof ee=="boolean",e,"internal-error"),H(typeof Ie=="boolean",e,"internal-error"),Zt(g,e.name),Zt(y,e.name),Zt(D,e.name),Zt(b,e.name),Zt(A,e.name),Zt(x,e.name);const Ze=new xn({uid:Q,auth:e,email:d,emailVerified:ee,displayName:h,isAnonymous:Ie,photoURL:y,phoneNumber:g,tenantId:D,stsTokenManager:Yt,createdAt:A,lastLoginAt:x});return Ce&&Array.isArray(Ce)&&(Ze.providerData=Ce.map(It=>Object.assign({},It))),b&&(Ze._redirectEventId=b),Ze}static async _fromIdTokenResponse(e,n,s=!1){const r=new Sr;r.updateFromServerResponse(n);const i=new xn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Xi(i),i}}/**
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
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hd.type="NONE";const ah=Hd;/**
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
 */function Pi(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Pi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gs(Vt(ah),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Vt(ah);const o=Pi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gs(i,e,s))}}/**
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
 */function ch(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gd(e))return"Blackberry";if(Qd(e))return"Webos";if(tl(e))return"Safari";if((e.includes("chrome/")||Kd(e))&&!e.includes("edge/"))return"Chrome";if(Wd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qd(t=Me()){return/firefox\//i.test(t)}function tl(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kd(t=Me()){return/crios\//i.test(t)}function zd(t=Me()){return/iemobile/i.test(t)}function Wd(t=Me()){return/android/i.test(t)}function Gd(t=Me()){return/blackberry/i.test(t)}function Qd(t=Me()){return/webos/i.test(t)}function Po(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ME(t=Me()){var e;return Po(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xE(){return Dd()&&document.documentMode===10}function Yd(t=Me()){return Po(t)||Wd(t)||Qd(t)||Gd(t)||/windows phone/i.test(t)||zd(t)}function LE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xd(t,e=[]){let n;switch(t){case"Browser":n=ch(Me());break;case"Worker":n=`${ch(Me())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${s}`}/**
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
 */class UE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class FE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lh(this),this.idTokenSubscription=new lh(this),this.beforeStateQueue=new UE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Xi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_E()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Mo(t){return Je(t)}class lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=i_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class nl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function VE(t,e){return Kr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $E(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
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
 */async function BE(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function jE(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
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
 */class Cr extends nl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Cr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Cr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $E(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BE(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return VE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jE(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ms(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
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
 */const HE="http://localhost";class Bn extends nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Xc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Bn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:HE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Br(n)}return e}}/**
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
 */function qE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KE(t){const e=Zs(er(t)).link,n=e?Zs(er(e)).deep_link_id:null,s=Zs(er(t)).deep_link_id;return(s?Zs(er(s)).link:null)||s||n||e||t}class sl{constructor(e){var n,s,r,i,o,a;const c=Zs(er(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=qE((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KE(e);try{return new sl(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Cr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=sl.parseLink(n);return H(s,"argument-error"),Cr._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends Jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends Wr{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class on extends Wr{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends Wr{constructor(){super("twitter.com")}static credential(e,n){return Bn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function zE(t,e){return zr(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await xn._fromIdTokenResponse(e,s,r),o=uh(s);return new jn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=uh(s);return new jn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function uh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ji extends Qt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ji(e,n,s,r)}}function Zd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(t,i,e,s):i})}async function WE(t,e,n=!1){const s=await br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
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
 */async function GE(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await br(t,Zd(r,i,e,t),n);H(o.idToken,r,"internal-error");const a=el(o.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(t.uid===c,r,"user-mismatch"),jn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),o}}/**
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
 */async function ep(t,e,n=!1){const s="signIn",r=await Zd(t,s,e),i=await jn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function QE(t,e){return ep(Mo(t),e)}async function YE(t,e,n){const s=Mo(t),r=await zE(s,{returnSecureToken:!0,email:e,password:n}),i=await jn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function XE(t,e,n){return QE(Je(t),Fs.credential(e,n))}function JE(t,e,n,s){return Je(t).onAuthStateChanged(e,n,s)}function ZE(t){return Je(t).signOut()}const Zi="__sak";/**
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
 */class tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function eI(){const t=Me();return tl(t)||Po(t)}const tI=1e3,nI=10;class np extends tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eI()&&LE(),this.fallbackToPolling=Yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);xE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}np.type="LOCAL";const sI=np;/**
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
 */class sp extends tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sp.type="SESSION";const rp=sp;/**
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
 */function rI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await rI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
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
 */function rl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=rl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nt(){return window}function oI(t){Nt().location.href=t}/**
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
 */function ip(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function aI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lI(){return ip()?self:null}/**
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
 */const op="firebaseLocalStorageDb",uI=1,eo="firebaseLocalStorage",ap="fbase_key";class Gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lo(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function hI(){const t=indexedDB.deleteDatabase(op);return new Gr(t).toPromise()}function ic(){const t=indexedDB.open(op,uI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(eo,{keyPath:ap})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(eo)?e(s):(s.close(),await hI(),e(await ic()))})})}async function hh(t,e,n){const s=Lo(t,!0).put({[ap]:e,value:n});return new Gr(s).toPromise()}async function fI(t,e){const n=Lo(t,!1).get(e),s=await new Gr(n).toPromise();return s===void 0?null:s.value}function fh(t,e){const n=Lo(t,!0).delete(e);return new Gr(n).toPromise()}const dI=800,pI=3;class cp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aI(),!this.activeServiceWorker)return;this.sender=new iI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await hh(e,Zi,"1"),await fh(e,Zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>hh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Lo(r,!1).getAll();return new Gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cp.type="LOCAL";const gI=cp;/**
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
 */function mI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",mI().appendChild(s)})}function vI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Hr(3e4,6e4);/**
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
 */function wI(t,e){return e?Vt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class il extends nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _I(t){return ep(t.auth,new il(t),t.bypassAuthState)}function EI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),GE(n,new il(t),t.bypassAuthState)}async function II(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),WE(n,new il(t),t.bypassAuthState)}/**
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
 */class lp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return II;case"reauthViaPopup":case"reauthViaRedirect":return EI;default:Et(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TI=new Hr(2e3,1e4);class ls extends lp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,TI.get())};e()}}ls.currentPopupAction=null;/**
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
 */const bI="pendingRedirect",Mi=new Map;class SI extends lp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await CI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CI(t,e){const n=RI(e),s=kI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function AI(t,e){Mi.set(t._key(),e)}function kI(t){return Vt(t._redirectPersistence)}function RI(t){return Pi(bI,t.config.apiKey,t.name)}async function DI(t,e,n=!1){const s=Mo(t),r=wI(s,e),o=await new SI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const NI=10*60*1e3;class OI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!up(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NI&&this.cachedEventUids.clear(),this.cachedEventUids.has(dh(e))}saveEventToCache(e){this.cachedEventUids.add(dh(e)),this.lastProcessedEventTime=Date.now()}}function dh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function up({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return up(t);default:return!1}}/**
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
 */async function MI(t,e={}){return Kr(t,"GET","/v1/projects",e)}/**
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
 */const xI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LI=/^https?/;async function UI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MI(t);for(const n of e)try{if(FI(n))return}catch{}Et(t,"unauthorized-domain")}function FI(t){const e=rc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LI.test(n))return!1;if(xI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const VI=new Hr(3e4,6e4);function ph(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $I(t){return new Promise((e,n)=>{var s,r,i;function o(){ph(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ph(),n(Dt(t,"network-request-failed"))},timeout:VI.get()})}if(!((r=(s=Nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Nt().gapi)===null||i===void 0)&&i.load)o();else{const a=vI("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},yI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xi=null,e})}let xi=null;function BI(t){return xi=xi||$I(t),xi}/**
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
 */const jI=new Hr(5e3,15e3),HI="__/auth/iframe",qI="emulator/auth/iframe",KI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zc(e,qI):`https://${t.config.authDomain}/${HI}`,s={apiKey:e.apiKey,appName:t.name,v:jr},r=zI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Br(s).slice(1)}`}async function GI(t){const e=await BI(t),n=Nt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:WI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Nt().setTimeout(()=>{i(o)},jI.get());function c(){Nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const QI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,XI=600,JI="_blank",ZI="http://localhost";class gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e0(t,e,n,s=YI,r=XI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},QI),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Me().toLowerCase();n&&(a=Kd(l)?JI:n),qd(l)&&(e=e||ZI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(ME(l)&&a!=="_self")return t0(e||"",a),new gh(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new gh(h)}function t0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const n0="__/auth/handler",s0="emulator/auth/handler";function mh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:jr,eventId:r};if(e instanceof Jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",r_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Wr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${r0(t)}?${Br(a).slice(1)}`}function r0({config:t}){return t.emulator?Zc(t,s0):`https://${t.authDomain}/${n0}`}/**
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
 */const Ta="webStorageSupport";class i0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rp,this._completeRedirectFn=DI,this._overrideRedirectResult=AI}async _openPopup(e,n,s,r){var i;Ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=mh(e,n,s,rc(),r);return e0(e,o,rl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),oI(mh(e,n,s,rc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ht(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GI(e),s=new OI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ta,{type:Ta},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ta];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yd()||tl()||Po()}}const o0=i0;var yh="@firebase/auth",vh="0.20.6";/**
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
 */class a0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function c0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function l0(t){bs(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(t)},u=new FE(a,c,l);return yE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bs(new Fn("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(s=>new a0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(yh,vh,c0(t)),fn(yh,vh,"esm2017")}/**
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
 */function Ar(t=Md()){const e=Yc(t,"auth");return e.isInitialized()?e.getImmediate():mE(t,{popupRedirectResolver:o0,persistence:[gI,sI,rp]})}l0("Browser");const u0="modulepreload",h0=function(t){return"/HittaProgrammerare/"+t},wh={},f0=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=h0(r),r in wh)return;wh[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":u0,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const Vs=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},d0={},Wn=t=>(Ao("data-v-51cc161e"),t=t(),ko(),t),p0=Wn(()=>Z("h1",null,"V\xE4lkommmen till hitta programmerare!",-1)),g0=Wn(()=>Z("h2",null,"Hitta programmerare genom att s\xF6ka i s\xF6kf\xE4ltet uppe i h\xF6gra h\xF6rnet",-1)),m0=Wn(()=>Z("h2",null,"Logga in eller skapa konto p\xE5 knappen uppe i h\xF6gra h\xF6rnet",-1)),y0=Wn(()=>Z("h2",null,"Inloggad och vill l\xE4gga ut ditt jobb som programmerare? L\xE4ngst ner i listan av programmerare hittar du en knapp d\xE4r du kan l\xE4gga upp ditt jobb. ",-1)),v0=Wn(()=>Z("h2",null,"Klicka p\xE5 sigge i h\xF6rnet f\xF6r att \xE5terg\xE5 till denna meny",-1)),w0=Wn(()=>Z("h2",null,"Om oss",-1)),_0=Wn(()=>Z("span",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum esse reiciendis quasi, tempore totam iusto facilis nostrum doloremque dolorum porro adipisci molestias! Harum quo ea alias explicabo consectetur! Saepe, est.",-1)),E0=[p0,g0,m0,y0,v0,w0,_0];function I0(t,e,n,s,r,i){return Qe(),nt("div",null,E0)}const T0=Vs(d0,[["render",I0],["__scopeId","data-v-51cc161e"]]);const hp=t=>(Ao("data-v-f4f464e1"),t=t(),ko(),t),b0=hp(()=>Z("h1",null,"Skapa nytt konto",-1)),S0={key:0},C0=hp(()=>Z("h1",null,"Logga in",-1)),A0={key:0},k0={data(){return{email:"",password:"",errorMsg:"",isNewUser:!1}},methods:{login(){const t=Ar();XE(t,this.email,this.password).then(e=>{const n=e.user;console.log("Hello ",n.email),ol.push("/")}).catch(e=>{switch(e.code){case"auth/invalid-email":this.errorMsg="ogiltig mail";break;case"auth/user-not-found":this.errorMsg="mailen \xE4r inte registrerad till ett konto";break;case"auth/wrong-password":this.errorMsg="fel l\xF6senord";break;default:this.errorMsg="mailen eller l\xF6senordet \xE4r fel";break}})},createUser(){const t=Ar();YE(t,this.email,this.password).then(e=>{this.errorMsg="Konto skapat"}).catch(e=>{switch(e.code){case"auth/email-in-use":this.errorMsg="mailen anv\xE4nds redan";break}})},toggleIsNewUser(){this.isNewUser=!this.isNewUser}}},R0=Object.assign(k0,{__name:"LoginPage",setup(t){return(e,n)=>(Qe(),nt("div",null,[e.isNewUser?(Qe(),nt("form",{key:0,onSubmit:n[4]||(n[4]=Ya((...s)=>e.createUser&&e.createUser(...s),["prevent"]))},[b0,as(Z("input",{type:"email","onUpdate:modelValue":n[0]||(n[0]=s=>_e(email)?email.value=s:null),placeholder:"Email"},null,512),[[cs,e.email]]),as(Z("input",{type:"password","onUpdate:modelValue":n[1]||(n[1]=s=>_e(password)?password.value=s:null),placeholder:"L\xF6senord"},null,512),[[cs,e.password]]),e.errorMsg?(Qe(),nt("span",S0,su(e.errorMsg),1)):Iu("",!0),Z("button",{type:"button",onClick:n[2]||(n[2]=(...s)=>e.createUser&&e.createUser(...s))},"Skapa konto"),Z("button",{type:"button",onClick:n[3]||(n[3]=(...s)=>e.toggleIsNewUser&&e.toggleIsNewUser(...s))},"Har du redan ett konto? Logga in h\xE4r")],32)):(Qe(),nt("form",{key:1,onSubmit:n[9]||(n[9]=Ya((...s)=>e.login&&e.login(...s),["prevent"]))},[C0,as(Z("input",{type:"email","onUpdate:modelValue":n[5]||(n[5]=s=>_e(email)?email.value=s:null),placeholder:"Email"},null,512),[[cs,e.email]]),as(Z("input",{type:"password","onUpdate:modelValue":n[6]||(n[6]=s=>_e(password)?password.value=s:null),placeholder:"L\xF6senord"},null,512),[[cs,e.password]]),e.errorMsg?(Qe(),nt("span",A0,su(e.errorMsg),1)):Iu("",!0),Z("button",{type:"button",onClick:n[7]||(n[7]=(...s)=>e.login&&e.login(...s))},"Logga in"),Z("button",{type:"button",onClick:n[8]||(n[8]=(...s)=>e.toggleIsNewUser&&e.toggleIsNewUser(...s))},"Har du inget konto? Skapa konto h\xE4r")],32))]))}}),D0=Vs(R0,[["__scopeId","data-v-f4f464e1"]]),ol=qw({history:aw("/HittaProgrammerare/"),routes:[{path:"/",name:"home",component:T0},{path:"/search-results/:ort/:yrke",name:"search-results",component:()=>f0(()=>import("./SearchResults.44291f5d.js"),["assets/SearchResults.44291f5d.js","assets/SearchResults.42e689e0.css"])},{path:"/login",name:"login",component:D0}]});const fp=t=>(Ao("data-v-f613168f"),t=t(),ko(),t),N0=fp(()=>Z("span",null,"Yrke",-1)),O0=fp(()=>Z("span",null,"Ort",-1)),P0={data(){return{yrke:"",allYrke:["webbutvecklare","systemutvecklare","databasansvarig"],selectedYrke:["webbutvecklare","systemutvecklare","databasansvarig"],ort:"",allOrt:["stockholm","bor\xE5s","solna"],selectedOrt:["stockholm","bor\xE5s","solna"],loggedIn:!1}},mounted(){JE(Ar(),t=>{t?(console.log("logged in"),this.loggedIn=!0):(console.log("logged out"),this.loggedIn=!1)})},methods:{search(){let t=this.yrke,e=this.ort;this.yrke===""&&(t="all"),this.ort===""&&(e="all"),this.$emit("search",t,e)},directToLogin(){console.log("wee"),this.$emit("login")},logOut(){ZE(Ar()).then(()=>{ol.push("/")})}}},M0=Object.assign(P0,{__name:"SearchBar",setup(t){return(e,n)=>(Qe(),nt("div",null,[Z("form",{class:"searchForm",onSubmit:n[5]||(n[5]=Ya((...s)=>e.search&&e.search(...s),["prevent"]))},[N0,O0,e.loggedIn?(Qe(),nt("button",{key:0,type:"button",onClick:n[0]||(n[0]=(...s)=>e.logOut&&e.logOut(...s))},"Logga ut")):(Qe(),nt("button",{key:1,type:"button",onClick:n[1]||(n[1]=(...s)=>e.directToLogin&&e.directToLogin(...s))},"Logga in")),as(Z("input",{"onUpdate:modelValue":n[2]||(n[2]=s=>_e(yrke)?yrke.value=s:null),placeholder:"alla yrken"},null,512),[[cs,e.yrke]]),as(Z("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>_e(ort)?ort.value=s:null),placeholder:"alla orter"},null,512),[[cs,e.ort]]),Z("button",{type:"submit",onClick:n[4]||(n[4]=(...s)=>e.search&&e.search(...s))},"Hitta programmerare")],32)]))}}),x0=Vs(M0,[["__scopeId","data-v-f613168f"]]);const L0={class:"logo"},U0={key:0},F0={key:1},V0={data(){return{hover:!1}},methods:{Search(t,e){this.$emit("search",e,t)},login(){this.$emit("login")},returnToHome(){this.$emit("home")}}},$0=Object.assign(V0,{__name:"TheHeader",setup(t){return(e,n)=>(Qe(),nt("header",null,[Z("div",L0,[Z("img",{alt:"Hitta Programmerare logo",class:"logo",src:zw,onClick:n[0]||(n[0]=(...s)=>e.returnToHome&&e.returnToHome(...s)),onMouseenter:n[1]||(n[1]=s=>e.hover=!0),onMouseleave:n[2]||(n[2]=s=>e.hover=!1)},null,32),e.hover?(Qe(),nt("h1",U0,"Klicka f\xF6r att g\xE5 tillbaka till huvudmenyn")):(Qe(),nt("h1",F0,"Hitta programmerare")),Oe(x0,{onSearch:e.Search,onLogin:e.login},null,8,["onSearch","onLogin"])])]))}}),B0=Vs($0,[["__scopeId","data-v-bc9e0217"]]);const j0={},dp=t=>(Ao("data-v-da030af7"),t=t(),ko(),t),H0=dp(()=>Z("div",{class:"content"},[Z("span",null,"info"),Z("span",null,"weee"),Z("span",null,"wooo"),Z("span",null,"waaa")],-1)),q0=dp(()=>Z("div",{class:"content"},[Z("span",null,"kontakt"),Z("span",null,"samuelbroman03@gmail.com"),Z("span",null,"beep"),Z("span",null,"boop")],-1)),K0=[H0,q0];function z0(t,e,n,s,r,i){return Qe(),nt("footer",null,K0)}const W0=Vs(j0,[["render",z0],["__scopeId","data-v-da030af7"]]);var G0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,al=al||{},q=G0||self;function to(){}function oc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Q0(t){return Object.prototype.hasOwnProperty.call(t,ba)&&t[ba]||(t[ba]=++Y0)}var ba="closure_uid_"+(1e9*Math.random()>>>0),Y0=0;function X0(t,e,n){return t.call.apply(t.bind,arguments)}function J0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=X0:Fe=J0,Fe.apply(null,arguments)}function yi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function wn(){this.s=this.s,this.o=this.o}var Z0=0;wn.prototype.s=!1;wn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Z0!=0)&&Q0(this)};wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},gp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function eT(t){e:{var e=KT;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function _h(t){return Array.prototype.concat.apply([],arguments)}function cl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function no(t){return/^[\s\xa0]*$/.test(t)}var Eh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function We(t,e){return t.indexOf(e)!=-1}function Sa(t,e){return t<e?-1:t>e?1:0}var Ge;e:{var Ih=q.navigator;if(Ih){var Th=Ih.userAgent;if(Th){Ge=Th;break e}}Ge=""}function ll(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function mp(t){const e={};for(const n in t)e[n]=t[n];return e}var bh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<bh.length;i++)n=bh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ul(t){return ul[" "](t),t}ul[" "]=to;function tT(t){var e=rT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var nT=We(Ge,"Opera"),Ss=We(Ge,"Trident")||We(Ge,"MSIE"),vp=We(Ge,"Edge"),ac=vp||Ss,wp=We(Ge,"Gecko")&&!(We(Ge.toLowerCase(),"webkit")&&!We(Ge,"Edge"))&&!(We(Ge,"Trident")||We(Ge,"MSIE"))&&!We(Ge,"Edge"),sT=We(Ge.toLowerCase(),"webkit")&&!We(Ge,"Edge");function _p(){var t=q.document;return t?t.documentMode:void 0}var so;e:{var Ca="",Aa=function(){var t=Ge;if(wp)return/rv:([^\);]+)(\)|;)/.exec(t);if(vp)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sT)return/WebKit\/(\S+)/.exec(t);if(nT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Aa&&(Ca=Aa?Aa[1]:""),Ss){var ka=_p();if(ka!=null&&ka>parseFloat(Ca)){so=String(ka);break e}}so=Ca}var rT={};function iT(){return tT(function(){let t=0;const e=Eh(String(so)).split("."),n=Eh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Sa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Sa(r[2].length==0,i[2].length==0)||Sa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var cc;if(q.document&&Ss){var Sh=_p();cc=Sh||parseInt(so,10)||void 0}else cc=void 0;var oT=cc,aT=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",to,e),q.removeEventListener("test",to,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function kr(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wp){e:{try{ul(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kr.Z.h.call(this)}}Be(kr,qe);var cT={2:"touch",3:"pen",4:"mouse"};kr.prototype.h=function(){kr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),lT=0;function uT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++lT,this.ca=this.fa=!1}function Uo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Fo(t){this.src=t,this.g={},this.h=0}Fo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=uc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new uT(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function lc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=pp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Uo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var hl="closure_lm_"+(1e6*Math.random()|0),Ra={};function Ep(t,e,n,s,r){if(s&&s.once)return Tp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ep(t,e[i],n,s,r);return null}return n=pl(n),t&&t[Yr]?t.N(e,n,Qr(s)?!!s.capture:!!s,r):Ip(t,e,n,!1,s,r)}function Ip(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Qr(r)?!!r.capture:!!r,a=dl(t);if(a||(t[hl]=a=new Fo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=hT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)aT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Sp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hT(){function t(n){return e.call(t.src,t.listener,n)}var e=fT;return t}function Tp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tp(t,e[i],n,s,r);return null}return n=pl(n),t&&t[Yr]?t.O(e,n,Qr(s)?!!s.capture:!!s,r):Ip(t,e,n,!0,s,r)}function bp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)bp(t,e[i],n,s,r);else s=Qr(s)?!!s.capture:!!s,n=pl(n),t&&t[Yr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=uc(i,n,s,r),-1<n&&(Uo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=dl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uc(e,n,s,r)),(n=-1<t?e[t]:null)&&fl(n))}function fl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Yr])lc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Sp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=dl(e))?(lc(n,t),n.h==0&&(n.src=null,e[hl]=null)):Uo(t)}}}function Sp(t){return t in Ra?Ra[t]:Ra[t]="on"+t}function fT(t,e){if(t.ca)t=!0;else{e=new kr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&fl(t),t=n.call(s,e)}return t}function dl(t){return t=t[hl],t instanceof Fo?t:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function pl(t){return typeof t=="function"?t:(t[Da]||(t[Da]=function(e){return t.handleEvent(e)}),t[Da])}function xe(){wn.call(this),this.i=new Fo(this),this.P=this,this.I=null}Be(xe,wn);xe.prototype[Yr]=!0;xe.prototype.removeEventListener=function(t,e,n,s){bp(this,t,e,n,s)};function Ve(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(s,t),yp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=vi(o,s,!0,e)&&r}if(o=e.g=t,r=vi(o,s,!0,e)&&r,r=vi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=vi(o,s,!1,e)&&r}xe.prototype.M=function(){if(xe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Uo(n[s]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function vi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var gl=q.JSON.stringify;function dT(){var t=Ap;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pT{constructor(){this.h=this.g=null}add(e,n){const s=Cp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gT,t=>t.reset());class gT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mT(t){q.setTimeout(()=>{throw t},0)}function ml(t,e){hc||yT(),fc||(hc(),fc=!0),Ap.add(t,e)}var hc;function yT(){var t=q.Promise.resolve(void 0);hc=function(){t.then(vT)}}var fc=!1,Ap=new pT;function vT(){for(var t;t=dT();){try{t.h.call(t.g)}catch(n){mT(n)}var e=Cp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fc=!1}function Vo(t,e){xe.call(this),this.h=t||1,this.g=e||q,this.j=Fe(this.kb,this),this.l=Date.now()}Be(Vo,xe);O=Vo.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ve(this,"tick"),this.da&&(yl(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Vo.Z.M.call(this),yl(this),delete this.g};function vl(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function kp(t){t.g=vl(()=>{t.g=null,t.i&&(t.i=!1,kp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wT extends wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:kp(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(t){wn.call(this),this.h=t,this.g={}}Be(Rr,wn);var Ch=[];function Rp(t,e,n,s){Array.isArray(n)||(n&&(Ch[0]=n.toString()),n=Ch);for(var r=0;r<n.length;r++){var i=Ep(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Dp(t){ll(t.g,function(e,n){this.g.hasOwnProperty(n)&&fl(e)},t),t.g={}}Rr.prototype.M=function(){Rr.Z.M.call(this),Dp(this)};Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $o(){this.g=!0}$o.prototype.Aa=function(){this.g=!1};function _T(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ET(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function us(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TT(t,n)+(s?" "+s:"")})}function IT(t,e){t.info(function(){return"TIMEOUT: "+e})}$o.prototype.info=function(){};function TT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return gl(n)}catch{return e}}var Gn={},Ah=null;function Bo(){return Ah=Ah||new xe}Gn.Ma="serverreachability";function Np(t){qe.call(this,Gn.Ma,t)}Be(Np,qe);function Dr(t){const e=Bo();Ve(e,new Np(e))}Gn.STAT_EVENT="statevent";function Op(t,e){qe.call(this,Gn.STAT_EVENT,t),this.stat=e}Be(Op,qe);function Ye(t){const e=Bo();Ve(e,new Op(e,t))}Gn.Na="timingevent";function Pp(t,e){qe.call(this,Gn.Na,t),this.size=e}Be(Pp,qe);function Xr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var jo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Mp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function wl(){}wl.prototype.h=null;function kh(t){return t.h||(t.h=t.i())}function xp(){}var Jr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _l(){qe.call(this,"d")}Be(_l,qe);function El(){qe.call(this,"c")}Be(El,qe);var dc;function Ho(){}Be(Ho,wl);Ho.prototype.g=function(){return new XMLHttpRequest};Ho.prototype.i=function(){return{}};dc=new Ho;function Zr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Rr(this),this.P=bT,t=ac?125:void 0,this.W=new Vo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Lp}function Lp(){this.i=null,this.g="",this.h=!1}var bT=45e3,pc={},ro={};O=Zr.prototype;O.setTimeout=function(t){this.P=t};function gc(t,e,n){t.K=1,t.v=Ko(qt(e)),t.s=n,t.U=!0,Up(t,null)}function Up(t,e){t.F=Date.now(),ei(t),t.A=qt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),qp(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Lp,t.g=ug(t.l,n?e:null,!t.s),0<t.O&&(t.L=new wT(Fe(t.Ia,t,t.g),t.O)),Rp(t.V,t.g,"readystatechange",t.gb),e=t.H?mp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Dr(),_T(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ac||this.g&&(this.h.h||this.g.ga()||Oh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Dr(3):Dr(2)),qo(this);var n=this.g.ba();this.N=n;t:if(Fp(this)){var s=Oh(this.g);t="";var r=s.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),lr(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ET(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!no(a)){var l=a;break t}}l=null}if(n=l)us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mc(this,n);else{this.i=!1,this.o=3,Ye(12),Rn(this),lr(this);break e}}this.U?(Vp(this,u,o),ac&&this.i&&u==3&&(Rp(this.V,this.W,"tick",this.fb),this.W.start())):(us(this.j,this.m,o,null),mc(this,o)),u==4&&Rn(this),this.i&&!this.I&&(u==4?og(this.l,this):(this.i=!1,ei(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),Rn(this),lr(this)}}}catch{}finally{}};function Fp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Vp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=ST(t,n),r==ro){e==4&&(t.o=4,Ye(14),s=!1),us(t.j,t.m,null,"[Incomplete Response]");break}else if(r==pc){t.o=4,Ye(15),us(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else us(t.j,t.m,r,null),mc(t,r);Fp(t)&&r!=ro&&r!=pc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dl(e),e.L=!0,Ye(11))):(us(t.j,t.m,n,"[Invalid Chunked Response]"),Rn(t),lr(t))}O.fb=function(){if(this.g){var t=$t(this.g),e=this.g.ga();this.C<e.length&&(qo(this),Vp(this,t,e),this.i&&t!=4&&ei(this))}};function ST(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ro:(n=Number(e.substring(n,s)),isNaN(n)?pc:(s+=1,s+n>e.length?ro:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,Rn(this)};function ei(t){t.Y=Date.now()+t.P,$p(t,t.P)}function $p(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xr(Fe(t.eb,t),e)}function qo(t){t.B&&(q.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(IT(this.j,this.A),this.K!=2&&(Dr(),Ye(17)),Rn(this),this.o=2,lr(this)):$p(this,this.Y-t)};function lr(t){t.l.G==0||t.I||og(t.l,t)}function Rn(t){qo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,yl(t.W),Dp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yc(n.i,t))){if(n.I=t.N,!t.J&&yc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)co(n),Go(n);else break e;Rl(n),Ye(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Xr(Fe(n.ab,n),6e3));if(1>=Wp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Dn(n,11)}else if((t.J||n.g==t)&&co(n),!no(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(We(y,"spdy")||We(y,"quic")||We(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(bl(i,i.h),i.h=null))}if(s.D){const D=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,ve(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=lg(s,s.H?s.la:null,s.W),o.J){Gp(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(qo(a),ei(a)),s.g=o}else rg(s);0<n.l.length&&Qo(n)}else l[0]!="stop"&&l[0]!="close"||Dn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Dn(n,7):kl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Dr(4)}catch{}}function CT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(oc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Il(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oc(t)||typeof t=="string")gp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(oc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=CT(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function $s(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof $s)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=$s.prototype;O.R=function(){Tl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Tl(this),this.g.concat()};function Tl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Hn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Hn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Hn(this.h,t)?this.h[t]:e};O.set=function(t,e){Hn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Bp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function AT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qn){this.g=e!==void 0?e:t.g,io(this,t.j),this.s=t.s,oo(this,t.i),ao(this,t.m),this.l=t.l,e=t.h;var n=new Nr;n.i=e.i,e.g&&(n.g=new $s(e.g),n.h=e.h),Rh(this,n),this.o=t.o}else t&&(n=String(t).match(Bp))?(this.g=!!e,io(this,n[1]||"",!0),this.s=ur(n[2]||""),oo(this,n[3]||"",!0),ao(this,n[4]),this.l=ur(n[5]||"",!0),Rh(this,n[6]||"",!0),this.o=ur(n[7]||"")):(this.g=!!e,this.h=new Nr(null,this.g))}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tr(e,Dh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tr(e,Dh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(tr(n,n.charAt(0)=="/"?OT:NT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tr(n,MT)),t.join("")};function qt(t){return new qn(t)}function io(t,e,n){t.j=n?ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oo(t,e,n){t.i=n?ur(e,!0):e}function ao(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rh(t,e,n){e instanceof Nr?(t.h=e,xT(t.h,t.g)):(n||(e=tr(e,PT)),t.h=new Nr(e,t.g))}function ve(t,e,n){t.h.set(e,n)}function Ko(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kT(t){return t instanceof qn?qt(t):new qn(t,void 0)}function RT(t,e,n,s){var r=new qn(null,void 0);return t&&io(r,t),e&&oo(r,e),n&&ao(r,n),s&&(r.l=s),r}function ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Dh=/[#\/\?@]/g,NT=/[#\?:]/g,OT=/[#\?]/g,PT=/[#\?@]/g,MT=/#/g;function Nr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _n(t){t.g||(t.g=new $s,t.h=0,t.i&&AT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Nr.prototype;O.add=function(t,e){_n(this),this.i=null,t=Bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jp(t,e){_n(t),e=Bs(t,e),Hn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Hn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Tl(t)))}function Hp(t,e){return _n(t),e=Bs(t,e),Hn(t.g.h,e)}O.forEach=function(t,e){_n(this),this.g.forEach(function(n,s){gp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){_n(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){_n(this);var e=[];if(typeof t=="string")Hp(this,t)&&(e=_h(e,this.g.get(Bs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_h(e,t[n])}return e};O.set=function(t,e){return _n(this),this.i=null,t=Bs(this,t),Hp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function qp(t,e,n){jp(t,e),0<n.length&&(t.i=null,t.g.set(Bs(t,e),cl(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xT(t,e){e&&!t.j&&(_n(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(jp(this,s),qp(this,r,n))},t)),t.j=e}var LT=class{constructor(t,e){this.h=t,this.g=e}};function Kp(t){this.l=t||UT,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UT=10;function zp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wp(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bl(t,e){t.g?t.g.add(e):t.h=e}function Gp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Kp.prototype.cancel=function(){if(this.i=Qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return cl(t.i)}function Sl(){}Sl.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Sl.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function FT(){this.g=new Sl}function VT(t,e,n){const s=n||"";try{Il(t,function(r,i){let o=r;Qr(r)&&(o=gl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function $T(t,e){const n=new $o;if(q.Image){const s=new Image;s.onload=yi(wi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yi(wi,n,s,"TestLoadImage: error",!1,e),s.onabort=yi(wi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yi(wi,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ti(t){this.l=t.$b||null,this.j=t.ib||!1}Be(ti,wl);ti.prototype.g=function(){return new zo(this.l,this.j)};ti.prototype.i=function(t){return function(){return t}}({});function zo(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(zo,xe);var Cl=0;O=zo.prototype;O.open=function(t,e){if(this.readyState!=Cl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Or(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=Cl};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Yp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ni(this):Or(this),this.readyState==3&&Yp(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,ni(this))};O.Ta=function(t){this.g&&(this.response=t,ni(this))};O.ha=function(){this.g&&ni(this)};function ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Or(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Or(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BT=q.JSON.parse;function Se(t){xe.call(this),this.headers=new $s,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xp,this.K=this.L=!1}Be(Se,xe);var Xp="",jT=/^https?$/i,HT=["POST","PUT"];O=Se.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?kh(this.u):kh(dc),this.g.onreadystatechange=Fe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nh(this,i);return}t=n||"";const r=new $s(this.headers);s&&Il(s,function(i,o){r.set(o,i)}),s=eT(r.T()),n=q.FormData&&t instanceof q.FormData,!(0<=pp(HT,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{eg(this),0<this.B&&((this.K=qT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.pa,this)):this.A=vl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nh(this,i)}};function qT(t){return Ss&&iT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function KT(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof al<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Nh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jp(t),Wo(t)}function Jp(t){t.D||(t.D=!0,Ve(t,"complete"),Ve(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),Wo(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wo(this,!0)),Se.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Zp(this):this.cb())};O.cb=function(){Zp(this)};function Zp(t){if(t.h&&typeof al<"u"&&(!t.C[1]||$t(t)!=4||t.ba()!=2)){if(t.v&&$t(t)==4)vl(t.Fa,0,t);else if(Ve(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Bp)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!jT.test(r?r.toLowerCase():"")}n=s}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Jp(t)}}finally{Wo(t)}}}}function Wo(t,e){if(t.g){eg(t);const n=t.g,s=t.C[0]?to:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=s}catch{}}}function eg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BT(e)}};function Oh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function zT(t){let e="";return ll(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Al(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tg(t){this.za=0,this.l=[],this.h=new $o,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ys("baseRetryDelayMs",5e3,t),this.$a=Ys("retryDelaySeedMs",1e4,t),this.Ya=Ys("forwardChannelMaxRetries",2,t),this.ra=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Kp(t&&t.concurrentRequestLimit),this.Ca=new FT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=tg.prototype;O.ma=8;O.G=1;function kl(t){if(ng(t),t.G==3){var e=t.V++,n=qt(t.F);ve(n,"SID",t.J),ve(n,"RID",e),ve(n,"TYPE","terminate"),si(t,n),e=new Zr(t,t.h,e,void 0),e.K=2,e.v=Ko(qt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=ug(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ei(e)}cg(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Go(t){t.g&&(Dl(t),t.g.cancel(),t.g=null)}function ng(t){Go(t),t.u&&(q.clearTimeout(t.u),t.u=null),co(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Na(t,e){t.l.push(new LT(t.Za++,e)),t.G==3&&Qo(t)}function Qo(t){zp(t.i)||t.m||(t.m=!0,ml(t.Ha,t),t.C=0)}function WT(t,e){return Wp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Xr(Fe(t.Ha,t,e),ag(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Zr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=mp(i),yp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sg(this,r,e),n=qt(this.F),ve(n,"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),si(this,n),this.o&&i&&Al(n,this.o,i),bl(this.i,r),this.Ra&&ve(n,"TYPE","init"),this.ja?(ve(n,"$req",e),ve(n,"SID","null"),r.$=!0,gc(r,n,null)):gc(r,n,e),this.G=2}}else this.G==3&&(t?Ph(this,t):this.l.length==0||zp(this.i)||Ph(this))};function Ph(t,e){var n;e?n=e.m:n=t.V++;const s=qt(t.F);ve(s,"SID",t.J),ve(s,"RID",n),ve(s,"AID",t.U),si(t,s),t.o&&t.s&&Al(s,t.o,t.s),n=new Zr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=sg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bl(t.i,n),gc(n,s,e)}function si(t,e){t.j&&Il({},function(n,s){ve(e,s,n)})}function sg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Fe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{VT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function rg(t){t.g||t.u||(t.Y=1,ml(t.Ga,t),t.A=0)}function Rl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Xr(Fe(t.Ga,t),ag(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,ig(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Xr(Fe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ye(10),Go(this),ig(this))};function Dl(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function ig(t){t.g=new Zr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=qt(t.oa);ve(e,"RID","rpc"),ve(e,"SID",t.J),ve(e,"CI",t.N?"0":"1"),ve(e,"AID",t.U),si(t,e),ve(e,"TYPE","xmlhttp"),t.o&&t.s&&Al(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ko(qt(e)),n.s=null,n.U=!0,Up(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Go(this),Rl(this),Ye(19))};function co(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function og(t,e){var n=null;if(t.g==e){co(t),Dl(t),t.g=null;var s=2}else if(yc(t.i,e))n=e.D,Gp(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Bo(),Ve(s,new Pp(s,n)),Qo(t)}else rg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&WT(t,e)||s==2&&Rl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Dn(t,5);break;case 4:Dn(t,10);break;case 3:Dn(t,6);break;default:Dn(t,2)}}}function ag(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Dn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Fe(t.jb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||io(n,"https"),Ko(n)),$T(n.toString(),s)}else Ye(2);t.G=0,t.j&&t.j.va(e),cg(t),ng(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ye(2)):(this.h.info("Failed to ping google.com"),Ye(1))};function cg(t){t.G=0,t.I=-1,t.j&&((Qp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,cl(t.l),t.l.length=0),t.j.ua())}function lg(t,e,n){let s=kT(n);if(s.i!="")e&&oo(s,e+"."+s.i),ao(s,s.m);else{const r=q.location;s=RT(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&ll(t.aa,function(r,i){ve(s,i,r)}),e=t.D,n=t.sa,e&&n&&ve(s,e,n),ve(s,"VER",t.ma),si(t,s),s}function ug(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new ti({ib:!0})):new Se(t.qa),e.L=t.H,e}function hg(){}O=hg.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function lo(){if(Ss&&!(10<=Number(oT)))throw Error("Environmental error: no available transport.")}lo.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){xe.call(this),this.g=new tg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!no(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!no(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}Be(ut,xe);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ml(Fe(t.hb,t,e))),Ye(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=lg(t,null,t.W),Qo(t)};ut.prototype.close=function(){kl(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Na(this.g,e)}else this.v?(e={},e.__data__=gl(t),Na(this.g,e)):Na(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,kl(this.g),delete this.g,ut.Z.M.call(this)};function fg(t){_l.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(fg,_l);function dg(){El.call(this),this.status=1}Be(dg,El);function js(t){this.g=t}Be(js,hg);js.prototype.xa=function(){Ve(this.g,"a")};js.prototype.wa=function(t){Ve(this.g,new fg(t))};js.prototype.va=function(t){Ve(this.g,new dg)};js.prototype.ua=function(){Ve(this.g,"b")};lo.prototype.createWebChannel=lo.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;jo.NO_ERROR=0;jo.TIMEOUT=8;jo.HTTP_ERROR=6;Mp.COMPLETE="complete";xp.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";xe.prototype.listen=xe.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var GT=function(){return new lo},QT=function(){return Bo()},Oa=jo,YT=Mp,XT=Gn,Mh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},JT=ti,_i=xp,ZT=Se;const xh="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let Hs="9.9.4";/**
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
 */const Kn=new Gc("@firebase/firestore");function Lh(){return Kn.logLevel}function U(t,...e){if(Kn.logLevel<=ie.DEBUG){const n=e.map(Nl);Kn.debug(`Firestore (${Hs}): ${t}`,...n)}}function Kt(t,...e){if(Kn.logLevel<=ie.ERROR){const n=e.map(Nl);Kn.error(`Firestore (${Hs}): ${t}`,...n)}}function Uh(t,...e){if(Kn.logLevel<=ie.WARN){const n=e.map(Nl);Kn.warn(`Firestore (${Hs}): ${t}`,...n)}}function Nl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Kt(e),new Error(e)}function me(t,e){t||z()}function G(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class nb{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new eb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new tt(e)}}class sb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new sb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ob{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ab(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class pg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ab(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ke(0,0))}static max(){return new J(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Pr{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Pr{construct(e,n,s){return new He(e,n,s)}static isValidIdentifier(e){return cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(we.fromString(e))}static fromName(e){return new $(we.fromString(e).popFirst(5))}static empty(){return new $(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new we(e.slice()))}}function lb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new ke(n+1,0):new ke(n,s));return new mn(r,$.empty(),e)}function ub(t){return new mn(t.readTime,t.key,-1)}class mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new mn(J.min(),$.empty(),-1)}static max(){return new mn(J.max(),$.empty(),-1)}}function hb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ri(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==fb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ii(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Fh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Ol.at=-1;class De{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ei(this.root,e,this.comparator,!0)}}class Ei{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=r!=null?r:Le.EMPTY,this.right=i!=null?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vh(this.data.getIterator())}getIteratorFrom(e){return new Vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class Vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new dt([])}unionWith(e){let n=new Re(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new $e(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(t){if(me(!!t),typeof t=="string"){let e=0;const n=pb.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
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
 */function mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yg(t){const e=t.mapValue.fields.__previous_value__;return mg(e)?yg(e):e}function Mr(t){const e=yn(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class gb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xr&&e.projectId===this.projectId&&e.database===this.database}}function Yo(t){return t==null}function uo(t){return t===0&&1/t==-1/0}function mb(t){return typeof t=="number"&&Number.isInteger(t)&&!uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mg(t)?4:yb(t)?9007199254740991:10:z()}function Pt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mr(t).isEqual(Mr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=yn(s.timestampValue),o=yn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return As(s.bytesValue).isEqual(As(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=be(s.doubleValue),o=be(r.doubleValue);return i===o?uo(i)===uo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Fh(i)!==Fh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Lr(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=zn(t),s=zn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=be(r.integerValue||r.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $h(t.timestampValue,e.timestampValue);case 4:return $h(Mr(t),Mr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=As(r),a=As(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(be(r.latitude),be(i.latitude));return o!==0?o:oe(be(r.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ks(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ii.mapValue&&i===Ii.mapValue)return 0;if(r===Ii.mapValue)return 1;if(i===Ii.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const d=ks(o[a[u]],c[l[u]]);if(d!==0)return d}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function $h(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=yn(t),s=yn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function ys(t){return vc(t)}function vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=yn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?As(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=vc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${vc(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function wc(t){return!!t&&"integerValue"in t}function Pl(t){return!!t&&"arrayValue"in t}function Bh(t){return!!t&&"nullValue"in t}function jh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Li(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Li(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=He.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Li(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Li(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Qn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new st(hr(this.value))}}function vg(t){const e=[];return Qn(t.fields,(n,s)=>{const r=new He([n]);if(Li(s)){const i=vg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new dt(e)}/**
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
 */class Ue{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ue(e,0,J.min(),J.min(),st.empty(),0)}static newFoundDocument(e,n,s){return new Ue(e,1,n,J.min(),s,0)}static newNoDocument(e,n){return new Ue(e,2,n,J.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,J.min(),st.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Hh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new vb(t,e,n,s,r,i,o)}function Ml(t){const e=G(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ys(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Yo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ys(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ys(s)).join(",")),e.ht=n}return e.ht}function wb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ys(s.value)}`;var s}).join(", ")}]`),Yo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ys(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ys(n)).join(",")),`Target(${e})`}function xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ab(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Pt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kh(t.startAt,e.startAt)&&Kh(t.endAt,e.endAt)}function _c(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new _b(e,n,s):n==="array-contains"?new Tb(e,s):n==="in"?new bb(e,s):n==="not-in"?new Sb(e,s):n==="array-contains-any"?new Cb(e,s):new rt(e,n,s)}static lt(e,n,s){return n==="in"?new Eb(e,s):new Ib(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ks(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.ft(ks(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class _b extends rt{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.ft(n)}}class Eb extends rt{constructor(e,n){super(e,"in",n),this.keys=wg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ib extends rt{constructor(e,n){super(e,"not-in",n),this.keys=wg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class Tb extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pl(n)&&Lr(n.arrayValue,this.value)}}class bb extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class Sb extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class Cb extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Lr(this.value.arrayValue,s))}}class ho{constructor(e,n){this.position=e,this.inclusive=n}}class fr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ab(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function kb(t,e,n,s,r,i,o,a){return new Xo(t,e,n,s,r,i,o,a)}function _g(t){return new Xo(t)}function zh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Rb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Db(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Nb(t){return t.collectionGroup!==null}function Ur(t){const e=G(t);if(e._t===null){e._t=[];const n=Db(e),s=Rb(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new fr(n)),e._t.push(new fr(He.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new fr(He.keyField(),i))}}}return e._t}function zt(t){const e=G(t);if(!e.wt)if(e.limitType==="F")e.wt=Hh(e.path,e.collectionGroup,Ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ur(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new fr(i.field,o))}const s=e.endAt?new ho(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ho(e.startAt.position,e.startAt.inclusive):null;e.wt=Hh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Ec(t,e,n){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jo(t,e){return xl(zt(t),zt(e))&&t.limitType===e.limitType}function Eg(t){return`${Ml(zt(t))}|lt:${t.limitType}`}function Ic(t){return`Query(target=${wb(zt(t))}; limitType=${t.limitType})`}function Ll(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=qh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ur(n),s)||n.endAt&&!function(r,i,o){const a=qh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ur(n),s))}(t,e)}function Ob(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ig(t){return(e,n)=>{let s=!1;for(const r of Ur(t)){const i=Pb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Pb(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ks(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
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
 */function Tg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function bg(t){return{integerValue:""+t}}function Mb(t,e){return mb(e)?bg(e):Tg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Zo{constructor(){this._=void 0}}function xb(t,e,n){return t instanceof fo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Rs?Cg(t,e):t instanceof Fr?Ag(t,e):function(s,r){const i=Sg(s,r),o=Wh(i)+Wh(s.yt);return wc(i)&&wc(s.yt)?bg(o):Tg(s.It,o)}(t,e)}function Lb(t,e,n){return t instanceof Rs?Cg(t,e):t instanceof Fr?Ag(t,e):n}function Sg(t,e){return t instanceof po?wc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class fo extends Zo{}class Rs extends Zo{constructor(e){super(),this.elements=e}}function Cg(t,e){const n=kg(e);for(const s of t.elements)n.some(r=>Pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Fr extends Zo{constructor(e){super(),this.elements=e}}function Ag(t,e){let n=kg(e);for(const s of t.elements)n=n.filter(r=>!Pt(r,s));return{arrayValue:{values:n}}}class po extends Zo{constructor(e,n){super(),this.It=e,this.yt=n}}function Wh(t){return be(t.integerValue||t.doubleValue)}function kg(t){return Pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ub{constructor(e,n){this.field=e,this.transform=n}}function Fb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Rs&&s instanceof Rs||n instanceof Fr&&s instanceof Fr?Cs(n.elements,s.elements,Pt):n instanceof po&&s instanceof po?Pt(n.yt,s.yt):n instanceof fo&&s instanceof fo}(t.transform,e.transform)}class Vb{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ea{}function Rg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ng(t.key,Ot.none()):new oi(t.key,t.data,Ot.none());{const n=t.data,s=st.empty();let r=new Re(He.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new En(t.key,s,new dt(r.toArray()),Ot.none())}}function $b(t,e,n){t instanceof oi?function(s,r,i){const o=s.value.clone(),a=Qh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof En?function(s,r,i){if(!Ui(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Qh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function dr(t,e,n,s){return t instanceof oi?function(r,i,o,a){if(!Ui(r.precondition,i))return o;const c=r.value.clone(),l=Yh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof En?function(r,i,o,a){if(!Ui(r.precondition,i))return o;const c=Yh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Dg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ui(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Bb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Sg(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function Gh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Cs(n,s,(r,i)=>Fb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oi extends ea{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class En extends ea{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Qh(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Lb(o,a,n[r]))}return s}function Yh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,xb(i,o,e))}return s}class Ng extends ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jb extends ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hb{constructor(e){this.count=e}}/**
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
 */var Te,ne;function qb(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Og(t){if(t===void 0)return Kt("GRPC error has no .code"),T.UNKNOWN;switch(t){case Te.OK:return T.OK;case Te.CANCELLED:return T.CANCELLED;case Te.UNKNOWN:return T.UNKNOWN;case Te.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Te.INTERNAL:return T.INTERNAL;case Te.UNAVAILABLE:return T.UNAVAILABLE;case Te.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Te.NOT_FOUND:return T.NOT_FOUND;case Te.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Te.ABORTED:return T.ABORTED;case Te.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Te.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Qn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return gg(this.inner)}size(){return this.innerSize}}/**
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
 */const Kb=new De($.comparator);function Wt(){return Kb}const Pg=new De($.comparator);function nr(...t){let e=Pg;for(const n of t)e=e.insert(n.key,n);return e}function Mg(t){let e=Pg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Nn(){return pr()}function xg(){return pr()}function pr(){return new qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const zb=new De($.comparator),Wb=new Re($.comparator);function te(...t){let e=Wb;for(const n of t)e=e.add(n);return e}const Gb=new Re(oe);function Lg(){return Gb}/**
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
 */class ta{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,ai.createSynthesizedTargetChangeForCurrentChange(e,n)),new ta(J.min(),s,Lg(),Wt(),te())}}class ai{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ai($e.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
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
 */class Fi{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Ug{constructor(e,n){this.targetId=e,this.At=n}}class Fg{constructor(e,n,s=$e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Xh{constructor(){this.Rt=0,this.bt=Zh(),this.Pt=$e.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),s=te();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new ai(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Zh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Qb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Wt(),this.qt=Jh(),this.Kt=new Re(oe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(_c(i))if(s===0){const o=new $(i.path);this.jt(n,o,Ue.newNoDocument(o,J.min()))}else me(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&_c(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ue.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=te();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ta(e,n,this.Kt,this.Ut,s);return this.Ut=Wt(),this.qt=Jh(),this.Kt=new Re(oe),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Xh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Re(oe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Xh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Jh(){return new De($.comparator)}function Zh(){return new De($.comparator)}/**
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
 */const Yb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Jb{constructor(e,n){this.databaseId=e,this.gt=n}}function go(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Zb(t,e){return go(t,e.toTimestamp())}function Bt(t){return me(!!t),J.fromTimestamp(function(e){const n=yn(e);return new ke(n.seconds,n.nanos)}(t))}function Ul(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function $g(t){const e=we.fromString(t);return me(Hg(e)),e}function Tc(t,e){return Ul(t.databaseId,e.path)}function Pa(t,e){const n=$g(e);if(n.get(1)!==t.databaseId.projectId)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Bg(n))}function bc(t,e){return Ul(t.databaseId,e)}function eS(t){const e=$g(t);return e.length===4?we.emptyPath():Bg(e)}function Sc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bg(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ef(t,e,n){return{name:Tc(t,e),fields:n.value.mapValue.fields}}function tS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(me(l===void 0||typeof l=="string"),$e.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),$e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Og(c.code);return new B(l,c.message||"")}(o);n=new Fg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pa(t,s.document.name),i=Bt(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=Ue.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Fi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Pa(t,s.document),i=s.readTime?Bt(s.readTime):J.min(),o=Ue.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Pa(t,s.document),i=s.removedTargetIds||[];n=new Fi([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Hb(r),o=s.targetId;n=new Ug(o,i)}}return n}function nS(t,e){let n;if(e instanceof oi)n={update:ef(t,e.key,e.value)};else if(e instanceof Ng)n={delete:Tc(t,e.key)};else if(e instanceof En)n={update:ef(t,e.key,e.data),updateMask:fS(e.fieldMask)};else{if(!(e instanceof jb))return z();n={verify:Tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof fo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof po)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Zb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function sS(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Bt(s.updateTime):Bt(r);return i.isEqual(J.min())&&(i=Bt(r)),new Vb(i,s.transformResults||[])}(n,e))):[]}function rS(t,e){return{documents:[bc(t,e.path)]}}function iS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=bc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(jh(h.value))return{unaryFilter:{field:ss(h.field),op:"IS_NAN"}};if(Bh(h.value))return{unaryFilter:{field:ss(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(jh(h.value))return{unaryFilter:{field:ss(h.field),op:"IS_NOT_NAN"}};if(Bh(h.value))return{unaryFilter:{field:ss(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(h.field),op:lS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ss(u.field),direction:cS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Yo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function oS(t){let e=eS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=jg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fr(hs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Yo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ho(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ho(d,h)}(n.endAt)),kb(e,r,o,i,a,"F",c,l)}function aS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function jg(t){return t?t.unaryFilter!==void 0?[hS(t)]:t.fieldFilter!==void 0?[uS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>jg(e)).reduce((e,n)=>e.concat(n)):z():[]}function cS(t){return Yb[t]}function lS(t){return Xb[t]}function ss(t){return{fieldPath:t.canonicalString()}}function hs(t){return He.fromServerFormat(t.fieldPath)}function uS(t){return rt.create(hs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function hS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hs(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hs(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hs(t.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=hs(t.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function fS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&$b(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=xg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Rg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,s)=>Gh(n,s))&&Cs(this.baseMutations,e.baseMutations,(n,s)=>Gh(n,s))}}class Fl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=zb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fl(e,n,s,r)}}/**
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
 */class pS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ln{constructor(e,n,s,r,i=J.min(),o=J.min(),a=$e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class gS{constructor(e){this.re=e}}function mS(t){const e=oS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ec(e,e.limit,"L"):e}/**
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
 */class yS{constructor(){this.Ye=new vS}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(mn.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class vS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Re(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Re(we.comparator)).toArray()}}/**
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
 */class Ds{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ds(0)}static vn(){return new Ds(-1)}}/**
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
 */class wS{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class _S{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ES{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&dr(s.mutation,r,dt.empty(),ke.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Nn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Nn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Wt();const o=pr(),a=pr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof En)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),dr(u.mutation,l,u.mutation.getFieldMask(),ke.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new _S(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=pr();let r=new De((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=xg();u.forEach(d=>{if(!i.has(d)){const g=Rg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(Nn());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:Mg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=nr();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Xo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ue.newInvalidDocument(l)))});let o=nr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&dr(l.mutation,c,dt.empty(),ke.now()),Ll(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Ue.newInvalidDocument(n))}}/**
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
 */class IS{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Bt(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:mS(s.bundledQuery),readTime:Bt(s.readTime)}}(n)),I.resolve()}}/**
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
 */class TS{constructor(){this.overlays=new De($.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Nn();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=Nn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Nn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Nn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pS(n,s));let i=this.es.get(n);i===void 0&&(i=te(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Vl{constructor(){this.ns=new Re(Ne.ss),this.rs=new Re(Ne.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ne(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new $(new we([])),s=new Ne(n,e),r=new Ne(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new $(new we([])),s=new Ne(n,e),r=new Ne(n,e+1);let i=te();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return $.comparator(e.key,n.key)||oe(e._s,n._s)}static os(e,n){return oe(e._s,n._s)||$.comparator(e.key,n.key)}}/**
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
 */class bS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Re(Ne.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),r=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Re(oe);return n.forEach(r=>{const i=new Ne(r,0),o=new Ne(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),I.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new $(i),0);let a=new Re(oe);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return I.forEach(n.mutations,r=>{const i=new Ne(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ne(n,0),r=this.gs.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class SS{constructor(e){this.Es=e,this.docs=new De($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let s=Wt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ue.newInvalidDocument(r))}),I.resolve(s)}getAllFromCollection(e,n,s){let r=Wt();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||hb(ub(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,r){z()}As(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new CS(this)}getSize(e){return I.resolve(this.size)}}class CS extends wS{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class AS{constructor(e){this.persistence=e,this.Rs=new qs(n=>Ml(n),xl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vl,this.targetCount=0,this.vs=Ds.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
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
 */class kS{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ol(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new AS(this),this.indexManager=new yS,this.remoteDocumentCache=function(s){return new SS(s)}(s=>this.referenceDelegate.xs(s)),this.It=new gS(n),this.Ns=new IS(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new bS(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new RS(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return I.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class RS extends db{constructor(e){super(),this.currentSequenceNumber=e}}class $l{constructor(e){this.persistence=e,this.Fs=new Vl,this.$s=null}static Bs(e){return new $l(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,s=>{const r=$.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Bl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Bl(e,n.fromCache,s,r)}}/**
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
 */class DS{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(zh(n))return I.resolve(null);let s=zt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ec(n,null,"F"),s=zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Ec(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return zh(n)||r.isEqual(J.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Lh()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ic(n)),this.Bi(e,o,n,lb(r,-1)))})}Fi(e,n){let s=new Re(Ig(e));return n.forEach((r,i)=>{Ll(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Lh()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ic(n)),this.Ni.getDocumentsMatchingQuery(e,n,mn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class NS{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new De(oe),this.qi=new qs(i=>Ml(i),xl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ES(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function OS(t,e,n,s){return new NS(t,e,n,s)}async function qg(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function PS(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=I.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const D=c.docVersions.get(g);me(D!==null),y.version.compareTo(D)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Kg(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function MS(t,e){const n=G(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken($e.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,D,b){return y.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=Wt(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(xS(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(J.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function xS(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Wt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function LS(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function US(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Ln(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Cc(t,e,n){const s=G(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ii(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function tf(t,e,n){const s=G(t);let r=J.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.qi.get(l);return h!==void 0?I.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,zt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:te())).next(a=>(FS(s,Ob(e),a),{documents:a,Hi:i})))}function FS(t,e,n){let s=J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class nf{constructor(){this.activeTargetIds=Lg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VS{constructor(){this.Lr=new nf,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new nf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $S{qr(e){}shutdown(){}}/**
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
 */class sf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const BS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class jS{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class HS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Uh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=BS[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new ZT;a.listenOnce(YT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Oa.NO_ERROR:const l=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Oa.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new B(T.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const u=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new B(d,h.message))}else o(new B(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=GT(),o=QT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JT({})),this.ho(a.initMessageHeaders,n,s),Ad()||Rd()||Xw()||Dd()||Jw()||kd()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new jS({Hr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(u||(U("Connection","Opening WebChannel transport."),l.open(),u=!0),U("Connection","WebChannel sending:",y),l.send(y))},Jr:()=>l.close()}),g=(y,D,b)=>{y.listen(D,A=>{try{b(A)}catch(x){setTimeout(()=>{throw x},0)}})};return g(l,_i.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(l,_i.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.io())}),g(l,_i.EventType.ERROR,y=>{h||(h=!0,Uh("Connection","WebChannel transport errored:",y),d.io(new B(T.UNAVAILABLE,"The operation could not be completed")))}),g(l,_i.EventType.MESSAGE,y=>{var D;if(!h){const b=y.data[0];me(!!b);const A=b,x=A.error||((D=A[0])===null||D===void 0?void 0:D.error);if(x){U("Connection","WebChannel received error:",x);const Q=x.status;let ee=function(Ce){const Ke=Te[Ce];if(Ke!==void 0)return Og(Ke)}(Q),Ie=x.message;ee===void 0&&(ee=T.INTERNAL,Ie="Unknown error status: "+Q+" with message "+x.message),h=!0,d.io(new B(ee,Ie)),l.close()}else U("Connection","WebChannel received:",b),d.ro(b)}}),g(o,XT.STAT_EVENT,y=>{y.stat===Mh.PROXY?U("Connection","Detected buffering proxy"):y.stat===Mh.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ma(){return typeof document<"u"?document:null}/**
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
 */function na(t){return new Jb(t,!0)}class zg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Wg{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new zg(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Kt(n.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new B(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qS extends Wg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=tS(this.It,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Bt(i.readTime):J.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Sc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=_c(a)?{documents:rS(r,a)}:{query:iS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Vg(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=go(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=aS(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Sc(this.It),n.removeTarget=e,this.Bo(n)}}class KS extends Wg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=sS(e.writeResults,e.commitTime),s=Bt(e.commitTime);return this.listener.Zo(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Sc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>nS(this.It,s))};this.Bo(n)}}/**
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
 */class zS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(T.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class WS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Kt(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class GS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Yn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c._u.add(4),await ci(c),c.gu.set("Unknown"),c._u.delete(4),await sa(c)}(this))})}),this.gu=new WS(s,r)}}async function sa(t){if(Yn(t))for(const e of t.wu)await e(!0)}async function ci(t){for(const e of t.wu)await e(!1)}function Gg(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ql(n)?Hl(n):Ks(n).ko()&&jl(n,e))}function Qg(t,e){const n=G(t),s=Ks(n);n.du.delete(e),s.ko()&&Yg(n,e),n.du.size===0&&(s.ko()?s.Fo():Yn(n)&&n.gu.set("Unknown"))}function jl(t,e){t.yu.Ot(e.targetId),Ks(t).zo(e)}function Yg(t,e){t.yu.Ot(e),Ks(t).Ho(e)}function Hl(t){t.yu=new Qb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ks(t).start(),t.gu.uu()}function ql(t){return Yn(t)&&!Ks(t).No()&&t.du.size>0}function Yn(t){return G(t)._u.size===0}function Xg(t){t.yu=void 0}async function QS(t){t.du.forEach((e,n)=>{jl(t,e)})}async function YS(t,e){Xg(t),ql(t)?(t.gu.hu(e),Hl(t)):t.gu.set("Unknown")}async function XS(t,e,n){if(t.gu.set("Online"),e instanceof Fg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mo(t,s)}else if(e instanceof Fi?t.yu.Gt(e):e instanceof Ug?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(J.min()))try{const s=await Kg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken($e.EMPTY_BYTE_STRING,c.snapshotVersion)),Yg(r,a);const l=new Ln(c.target,a,1,c.sequenceNumber);jl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await mo(t,s)}}async function mo(t,e,n){if(!ii(e))throw e;t._u.add(1),await ci(t),t.gu.set("Offline"),n||(n=()=>Kg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await sa(t)})}function Jg(t,e){return e().catch(n=>mo(t,n,e))}async function ra(t){const e=G(t),n=vn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;JS(e);)try{const r=await LS(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,ZS(e,r)}catch(r){await mo(e,r)}Zg(e)&&em(e)}function JS(t){return Yn(t)&&t.fu.length<10}function ZS(t,e){t.fu.push(e);const n=vn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Zg(t){return Yn(t)&&!vn(t).No()&&t.fu.length>0}function em(t){vn(t).start()}async function eC(t){vn(t).eu()}async function tC(t){const e=vn(t);for(const n of t.fu)e.Xo(n.mutations)}async function nC(t,e,n){const s=t.fu.shift(),r=Fl.from(s,e,n);await Jg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ra(t)}async function sC(t,e){e&&vn(t).Yo&&await async function(n,s){if(r=s.code,qb(r)&&r!==T.ABORTED){const i=n.fu.shift();vn(n).Oo(),await Jg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ra(n)}var r}(t,e),Zg(t)&&em(t)}async function rf(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Yn(n);n._u.add(3),await ci(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await sa(n)}async function rC(t,e){const n=G(t);e?(n._u.delete(2),await sa(n)):e||(n._u.add(2),await ci(n),n.gu.set("Unknown"))}function Ks(t){return t.pu||(t.pu=function(e,n,s){const r=G(e);return r.su(),new qS(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:QS.bind(null,t),Zr:YS.bind(null,t),Wo:XS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),ql(t)?Hl(t):t.gu.set("Unknown")):(await t.pu.stop(),Xg(t))})),t.pu}function vn(t){return t.Iu||(t.Iu=function(e,n,s){const r=G(e);return r.su(),new KS(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:eC.bind(null,t),Zr:sC.bind(null,t),tu:tC.bind(null,t),Zo:nC.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await ra(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Kl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Kl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(t,e){if(Kt("AsyncQueue",`${e}: ${t}`),ii(t))return new B(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=nr(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new vs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class of{constructor(){this.Tu=new De($.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ns{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ns(e,n,vs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class iC{constructor(){this.Au=void 0,this.listeners=[]}}class oC{constructor(){this.queries=new qs(e=>Eg(e),Jo),this.onlineState="Unknown",this.Ru=new Set}}async function aC(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new iC),r)try{i.Au=await n.onListen(s)}catch(o){const a=zl(o,`Initialization of query '${Ic(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Wl(n)}async function cC(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function lC(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Wl(n)}function uC(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Wl(t){t.Ru.forEach(e=>{e.next()})}class hC{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class tm{constructor(e){this.key=e}}class nm{constructor(e){this.key=e}}class fC{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=te(),this.mutatedKeys=te(),this.Ku=Ig(e),this.Gu=new vs(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new of,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Ll(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),D=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;d&&g?d.data.isEqual(g.data)?y!==D&&(s.track({type:3,doc:g}),b=!0):this.zu(d,g)||(s.track({type:2,doc:g}),b=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),b=!0):d&&!g&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(g?(o=o.add(g),i=D?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Ns(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new of,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=te(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new nm(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new tm(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=te();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Ns.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class dC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pC{constructor(e){this.key=e,this.ec=!1}}class gC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new qs(a=>Eg(a),Jo),this.ic=new Map,this.rc=new Set,this.oc=new De($.comparator),this.uc=new Map,this.cc=new Vl,this.ac={},this.hc=new Map,this.lc=Ds.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function mC(t,e){const n=CC(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await US(n.localStore,zt(e));n.isPrimaryClient&&Gg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await yC(n,e,s,a==="current")}return r}async function yC(t,e,n,s){t.dc=(u,h,d)=>async function(g,y,D,b){let A=y.view.ju(D);A.$i&&(A=await tf(g.localStore,y.query,!1).then(({documents:ee})=>y.view.ju(ee,A)));const x=b&&b.targetChanges.get(y.targetId),Q=y.view.applyChanges(A,g.isPrimaryClient,x);return cf(g,y.targetId,Q.Yu),Q.snapshot}(t,u,h,d);const r=await tf(t.localStore,e,!0),i=new fC(e,r.Hi),o=i.ju(r.documents),a=ai.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);cf(t,n,c.Yu);const l=new dC(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function vC(t,e){const n=G(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Jo(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Cc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Qg(n.remoteStore,s.targetId),Ac(n,s.targetId)}).catch(ri)):(Ac(n,s.targetId),await Cc(n.localStore,s.targetId,!0))}async function wC(t,e,n){const s=AC(t);try{const r=await function(i,o){const a=G(i),c=ke.now(),l=o.reduce((d,g)=>d.add(g.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Wt(),y=te();return a.Gi.getEntries(d,l).next(D=>{g=D,g.forEach((b,A)=>{A.isValidDocument()||(y=y.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(D=>{u=D;const b=[];for(const A of o){const x=Bb(A,u.get(A.key).overlayedDocument);x!=null&&b.push(new En(A.key,x,vg(x.value.mapValue),Ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(D=>{h=D;const b=D.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,D.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Mg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new De(oe)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await li(s,r.changes),await ra(s.remoteStore)}catch(r){const i=zl(r,"Failed to persist write");n.reject(i)}}async function sm(t,e){const n=G(t);try{const s=await MS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?me(o.ec):r.removedDocuments.size>0&&(me(o.ec),o.ec=!1))}),await li(n,s,e)}catch(s){await ri(s)}}function af(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Wl(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _C(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new De($.comparator);o=o.insert(i,Ue.newNoDocument(i,J.min()));const a=te().add(i),c=new ta(J.min(),new Map,new Re(oe),o,a);await sm(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Gl(s)}else await Cc(s.localStore,e,!1).then(()=>Ac(s,e,n)).catch(ri)}async function EC(t,e){const n=G(t),s=e.batch.batchId;try{const r=await PS(n.localStore,e);im(n,s,null),rm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await li(n,r)}catch(r){await ri(r)}}async function IC(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);im(s,e,n),rm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await li(s,r)}catch(r){await ri(r)}}function rm(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function im(t,e,n){const s=G(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||om(t,s)})}function om(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Qg(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Gl(t))}function cf(t,e,n){for(const s of n)s instanceof tm?(t.cc.addReference(s.key,e),TC(t,s)):s instanceof nm?(U("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||om(t,s.key)):z()}function TC(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.rc.add(s),Gl(t))}function Gl(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new $(we.fromString(e)),s=t.lc.next();t.uc.set(s,new pC(n)),t.oc=t.oc.insert(n,s),Gg(t.remoteStore,new Ln(zt(_g(n.path)),s,2,Ol.at))}}async function li(t,e,n){const s=G(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Bl.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ii(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Ui=l.Ui.insert(h,y)}}}(s.localStore,i))}async function bC(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await qg(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new B(T.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await li(n,s.ji)}}function SC(t,e){const n=G(t),s=n.uc.get(e);if(s&&s.ec)return te().add(s.key);{let r=te();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function CC(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_C.bind(null,e),e.nc.Wo=lC.bind(null,e.eventManager),e.nc._c=uC.bind(null,e.eventManager),e}function AC(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IC.bind(null,e),e}class kC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=na(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return OS(this.persistence,new DS,e.initialUser,this.It)}gc(e){return new kS($l.Bs,this.It)}mc(e){return new VS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>af(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bC.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oC}createDatastore(e){const n=na(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new HS(r));var r;return function(i,o,a,c){return new zS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>af(this.syncEngine,a,0),o=sf.C()?new sf:new $S,new GS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new gC(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ci(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class DC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Kt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=pg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=zl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function OC(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function PC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MC(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>rf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>rf(e.remoteStore,i)),t.onlineComponents=e}async function MC(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await OC(t,new kC)),t.offlineComponents}async function am(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await PC(t,new RC)),t.onlineComponents}function xC(t){return am(t).then(e=>e.syncEngine)}async function LC(t){const e=await am(t),n=e.eventManager;return n.onListen=mC.bind(null,e.syncEngine),n.onUnlisten=vC.bind(null,e.syncEngine),n}function UC(t,e,n={}){const s=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new DC({next:h=>{i.enqueueAndForget(()=>cC(r,u)),h.fromCache&&a.source==="server"?c.reject(new B(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new hC(o,l,{includeMetadataChanges:!0,Nu:!0});return aC(r,u)}(await LC(t),t.asyncQueue,e,n,s)),s.promise}const lf=new Map;/**
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
 */function cm(t,e,n){if(!n)throw new B(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FC(t,e,n,s){if(e===!0&&s===!0)throw new B(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uf(t){if(!$.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hf(t){if($.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Os(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new B(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ff{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,FC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Yl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tb;switch(n.type){case"gapi":const s=n.client;return new rb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lf.get(e);n&&(U("ComponentProvider","Removing Datastore"),lf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class ia{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ia(this.firestore,e,this._query)}}class pn extends ia{constructor(e,n,s){super(e,n,_g(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new $(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function VC(t,e,...n){if(t=Je(t),cm("collection","path",e),t instanceof Yl){const s=we.fromString(e,...n);return hf(s),new pn(t,null,s)}{if(!(t instanceof ct||t instanceof pn))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return hf(s),new pn(t.firestore,null,s)}}function df(t,e,...n){if(t=Je(t),arguments.length===1&&(e=pg.R()),cm("doc","path",e),t instanceof Yl){const s=we.fromString(e,...n);return uf(s),new ct(t,null,new $(s))}{if(!(t instanceof ct||t instanceof pn))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return uf(s),new ct(t.firestore,t instanceof pn?t.converter:null,new $(s))}}/**
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
 */class $C{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new zg(this,"async_queue_retry"),this.jc=()=>{const n=Ma();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new dn;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!ii(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Kt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Kl.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&z()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class oa extends Yl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $C,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||um(this),this._firestoreClient.terminate()}}function BC(t,e){const n=typeof t=="object"?t:Md(),s=typeof t=="string"?t:e||"(default)";return Yc(n,"firestore").getImmediate({identifier:s})}function lm(t){return t._firestoreClient||um(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function um(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new gb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps($e.fromBase64String(e))}catch(n){throw new B(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ca{constructor(e){this._methodName=e}}/**
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
 */class Xl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const jC=/^__.*__$/;class HC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,n,this.fieldTransforms):new oi(e,this.data,n,this.fieldTransforms)}}class hm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new En(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class la{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return yo(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(fm(this.na)&&jC.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class qC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||na(e)}fa(e,n,s,r=!1){return new la({na:e,methodName:n,la:s,path:He.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function dm(t){const e=t._freezeSettings(),n=na(t._databaseId);return new qC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KC(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);Jl("Data must be an object, but it was:",o,s);const a=pm(s,o);let c,l;if(i.merge)c=new dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=kc(e,h,n);if(!o.contains(d))throw new B(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mm(u,d)||u.push(d)}c=new dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new HC(new st(a),c,l)}class ua extends ca{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ua}}function zC(t,e,n){return new la({na:3,la:e.settings.la,methodName:t._methodName,ra:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class WC extends ca{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=zC(this,e,!0),s=this.da.map(i=>ui(i,n)),r=new Rs(s);return new Ub(e.path,r)}isEqual(e){return this===e}}function GC(t,e,n,s){const r=t.fa(1,e,n);Jl("Data must be an object, but it was:",r,s);const i=[],o=st.empty();Qn(s,(c,l)=>{const u=Zl(e,c,n);l=Je(l);const h=r.ua(u);if(l instanceof ua)i.push(u);else{const d=ui(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new dt(i);return new hm(o,a,r.fieldTransforms)}function QC(t,e,n,s,r,i){const o=t.fa(1,e,n),a=[kc(e,s,n)],c=[r];if(i.length%2!=0)throw new B(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(kc(e,i[d])),c.push(i[d+1]);const l=[],u=st.empty();for(let d=a.length-1;d>=0;--d)if(!mm(l,a[d])){const g=a[d];let y=c[d];y=Je(y);const D=o.ua(g);if(y instanceof ua)l.push(g);else{const b=ui(y,D);b!=null&&(l.push(g),u.set(g,b))}}const h=new dt(l);return new hm(u,h,o.fieldTransforms)}function ui(t,e){if(gm(t=Je(t)))return Jl("Unsupported field value:",e,t),pm(t,e);if(t instanceof ca)return function(n,s){if(!fm(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ui(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Mb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ke.fromDate(n);return{timestampValue:go(s.It,r)}}if(n instanceof ke){const r=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:go(s.It,r)}}if(n instanceof Xl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ps)return{bytesValue:Vg(s.It,n._byteString)};if(n instanceof ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ul(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Ql(n)}`)}(t,e)}function pm(t,e){const n={};return gg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qn(t,(s,r)=>{const i=ui(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function gm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Xl||t instanceof Ps||t instanceof ct||t instanceof ca)}function Jl(t,e,n){if(!gm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ql(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function kc(t,e,n){if((e=Je(e))instanceof aa)return e._internalPath;if(typeof e=="string")return Zl(t,e);throw yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const YC=new RegExp("[~\\*/\\[\\]]");function Zl(t,e,n){if(e.search(YC)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new aa(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(T.INVALID_ARGUMENT,a+t+c)}function mm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ym{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XC extends ym{data(){return super.data()}}function vm(t,e){return typeof e=="string"?Zl(t,e):e instanceof aa?e._internalPath:e._delegate._internalPath}/**
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
 */class Ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JC extends ym{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vi extends JC{data(e={}){return super.data(e)}}class ZC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ti(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vi(this._firestore,this._userDataWriter,s.key,s,new Ti(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:eA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function tA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class nA{convertValue(e,n="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return Qn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Xl(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=yg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Mr(e));default:return null}}convertTimestamp(e){const n=yn(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);me(Hg(s));const r=new xr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Kt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function sA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class rA extends nA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function iA(t){t=Os(t,ia);const e=Os(t.firestore,oa),n=lm(e),s=new rA(e);return tA(t._query),UC(n,t._query).then(r=>new ZC(e,s,t,r))}function oA(t,e,n){t=Os(t,ct);const s=Os(t.firestore,oa),r=sA(t.converter,e,n);return wm(s,[KC(dm(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ot.none())])}function aA(t,e,n,...s){t=Os(t,ct);const r=Os(t.firestore,oa),i=dm(r);let o;return o=typeof(e=Je(e))=="string"||e instanceof aa?QC(i,"updateDoc",t._key,e,n,s):GC(i,"updateDoc",t._key,e),wm(r,[o.toMutation(t._key,Ot.exists(!0))])}function wm(t,e){return function(n,s){const r=new dn;return n.asyncQueue.enqueueAndForget(async()=>wC(await xC(n),s,r)),r.promise}(lm(t),e)}function cA(...t){return new WC("arrayUnion",t)}(function(t,e=!0){(function(n){Hs=n})(jr),bs(new Fn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new oa(new nb(n.getProvider("auth-internal")),new ob(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),fn(xh,"3.4.15",t),fn(xh,"3.4.15","esm2017")})();var lA="firebase",uA="9.9.4";/**
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
 */fn(lA,uA,"app");const hA={apiKey:"AIzaSyAwexZTg0zdlgHbz43fIqbi-H39CfpOnXI",authDomain:"hittaprogrammerare-de354.firebaseapp.com",projectId:"hittaprogrammerare-de354",storageBucket:"hittaprogrammerare-de354.appspot.com",messagingSenderId:"341446977298",appId:"1:341446977298:web:aa48695c20bd7a9f23f5cb",measurementId:"G-6KLHJF0GEM"},fA=rE(hA),bi=BC(fA);Ar();const dA=Us({programmerare:[],programmerareIsLoaded:!1,async loadProgrammerare(){const t=await iA(VC(bi,"Programmerare"));console.log(t),t.forEach(e=>{this.programmerare.push(e.data()),this.programmerare[this.programmerare.length-1].id=e.id}),this.programmerare.forEach(e=>{console.log(e.id)}),this.programmerareIsLoaded=!0},addProgrammerare(t,e,n,s,r,i,o){console.table(this.programmerare),console.log(bi);let c=new Date().getTime().toString();this.programmerare.push({name:t,yrke:e,ort:n,skills:s,price:r,aboutUs:i,id:c,contact:o,reviews:[]}),oA(df(bi,"Programmerare",c),{name:t,yrke:e,ort:n,skills:s,price:r,aboutUs:i,contact:o,reviews:[]}).then(()=>{console.log("programmerare added"),this.programmerare.push({name:t,yrke:e,ort:n,skills:s,price:r,aboutUs:i,contact:o,id:c})}).catch(()=>{console.error("Error occured when adding programmerare")})},addReview(t,e,n,s){console.log("yo"),console.log(s);let r=0;try{r=this.findProgrammerareIndex(t)}catch{console.error("review error: programmerare does not exist");return}console.log("yo 2"),this.programmerare[r].reviews.push({rating:e,reviewText:n});const i=df(bi,"Programmerare",this.programmerare[r].id);aA(i,{reviews:cA({rating:e,reviewText:n,author:s})}).then(()=>{console.log("review added")}).catch(()=>{console.error("error occured when adding review")})},calculateReviewScore(t){let e=0;try{e=this.findProgrammerareIndex(t)}catch{return}let n=0,s=0;return this.programmerare[e].reviews.forEach(r=>{n+=r.score,s++}),n/s},findProgrammerareIndex(t){console.log("programmerare: "+t),console.log("indexof: "+this.programmerare.indexOf(t));let e=this.programmerare.indexOf(t);if(e===-1)throw console.error("review error: programmerare does not exist"),new ReferenceError;return e},getFilteredResults(t,e,n,s,r,i){return t=t.toLowerCase(),e=e.toLowerCase(),i?this.programmerare.filter(o=>o.yrke.toLowerCase().includes(t)&&o.ort.toLowerCase().includes(e)&&this.filterAllSkillsRequired(o.skills,n)&&o.price<=r&&o.price>=s):this.programmerare.filter(o=>o.yrke.toLowerCase().includes(t)&&o.ort.toLowerCase().includes(e)&&this.filterOneSkillRequired(o.skills,n)&&o.price<=r&&o.price>=s)},filterOneSkillRequired(t,e){let n=!1;return t.some(s=>{if(e.includes(s))return n=!0,!0}),!!n},filterAllSkillsRequired(t,e){let n=!1;return e.some(s=>{if(t.includes(s)===!1)return n=!0,!0}),console.log(n),!n}});const pA={methods:{Search(t,e){this.$router.replace(`/search-results/${e}/${t}`)},login(){console.log("woo"),this.$router.replace("/login")},returnToHome(){this.$router.replace("/")}}},gA=Object.assign(pA,{__name:"App",setup(t){return(e,n)=>(Qe(),nt(At,null,[Oe(B0,{onSearch:e.Search,onLogin:e.login,onHome:e.returnToHome},null,8,["onSearch","onLogin","onHome"]),Oe(Pn(Td)),Oe(W0,{class:"footer"})],64))}}),mA=Vs(gA,[["__scopeId","data-v-b941fca1"]]);dA.loadProgrammerare().then(()=>{const t=jv(mA);t.use(ol),t.mount("#app")});export{At as F,Vs as _,Z as a,ko as b,nt as c,JE as d,dA as e,wA as f,Ar as g,Oe as h,_e as i,Iu as j,cv as k,vA as l,Qe as o,Ao as p,yA as r,su as t,Pn as u,cs as v,as as w};
