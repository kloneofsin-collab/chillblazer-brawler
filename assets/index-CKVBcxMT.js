(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="186",Sh=0,il=1,yh=2,cr=1,bh=2,ds=3,gi=0,Je=1,nn=2,kn=0,_s=1,hn=2,sl=3,rl=4,Eh=5,Yi=100,Th=101,wh=102,Ah=103,Rh=104,Ch=200,Ph=201,Lh=202,Ih=203,_c=204,xc=205,Dh=206,Uh=207,Nh=208,Fh=209,Oh=210,Bh=211,zh=212,kh=213,Gh=214,Ta=0,wa=1,Aa=2,Ms=3,Ra=4,Ca=5,Pa=6,La=7,xo=0,Hh=1,Vh=2,Cn=0,vc=1,Mc=2,Sc=3,yc=4,bc=5,Ec=6,Tc=7,wc=300,_i=301,Ji=302,kr=303,Gr=304,Ar=306,mr=1e3,An=1001,Ia=1002,Oe=1003,Wh=1004,Us=1005,He=1006,Hr=1007,pi=1008,sn=1009,Ac=1010,Rc=1011,Ss=1012,vo=1013,Pn=1014,_n=1015,Ln=1016,Mo=1017,So=1018,ys=1020,Cc=35902,Pc=35899,Lc=1021,Ic=1022,xn=1023,Vn=1026,mi=1027,yo=1028,bo=1029,xi=1030,Eo=1031,To=1033,hr=33776,ur=33777,fr=33778,dr=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37488,Ga=37489,gr=37490,Ha=37491,Va=37808,Wa=37809,Xa=37810,Ya=37811,qa=37812,Ka=37813,Za=37814,Ja=37815,$a=37816,Qa=37817,ja=37818,to=37819,eo=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,_r=36285,lo=36286,Xh=3200,co=0,Yh=1,ii="",$e="srgb",xr="srgb-linear",vr="linear",re="srgb",Vr=7680,qh=519,Kh=512,Zh=513,Jh=514,wo=515,$h=516,Qh=517,Ao=518,jh=519,Dc=35044,al="300 es",Rn=2e3,bs=2001;function tu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){const i=Mr("canvas");return i.style.display="block",i}const ol={};function Sr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Uc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=Uc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=Uc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ki(...i){const t=i.join(" ");t in ol||(ol[t]=!0,Ct(...i))}function nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const iu={[Ta]:wa,[Aa]:Pa,[Ra]:La,[Ms]:Ca,[wa]:Ta,[Pa]:Aa,[La]:Ra,[Ca]:Ms};class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const xs=Math.PI/180,Es=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function Ro(i,t){return(i%t+t)%t}function su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ru(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function au(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function ou(i,t=1){return t-Math.abs(Ro(i,t*2)-t)}function lu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uu(i,t){return i+Math.random()*(t-i)}function fu(i){return i*(.5-Math.random())}function du(i){i!==void 0&&(ll=i);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pu(i){return i*xs}function mu(i){return i*Es}function gu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _u(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ho={DEG2RAD:xs,RAD2DEG:Es,generateUUID:Gn,clamp:Xt,euclideanModulo:Ro,mapLinear:su,inverseLerp:ru,lerp:vs,damp:au,pingpong:ou,smoothstep:lu,smootherstep:cu,randInt:hu,randFloat:uu,randFloatSpread:fu,seededRandom:du,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:_u,floorPowerOfTwo:xu,setQuaternionFromProperEuler:vu,normalize:ae,denormalize:gn},Ho=class Ho{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ho.prototype.isVector2=!0;let Pt=Ho;class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],m=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==f||u!==m){let g=l*h+c*f+u*m+d*M;g<0&&(h=-h,f=-f,m=-m,M=-M,g=-g);let p=1-o;if(g<.9995){const v=Math.acos(g),A=Math.sin(v);p=Math.sin(p*v)/A,o=Math.sin(o*v)/A,l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+M*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+M*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*d+l*f-c*h,t[e+1]=l*m+u*h+c*d-o*f,t[e+2]=c*m+u*f+o*h-l*d,t[e+3]=u*m-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vo=class Vo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vo.prototype.isVector3=!0;let P=Vo;const Wr=new P,cl=new Si,Wo=class Wo{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],M=s[0],g=s[3],p=s[6],v=s[1],A=s[4],S=s[7],b=s[2],E=s[5],w=s[8];return r[0]=a*M+o*v+l*b,r[3]=a*g+o*A+l*E,r[6]=a*p+o*S+l*w,r[1]=c*M+u*v+d*b,r[4]=c*g+u*A+d*E,r[7]=c*p+u*S+d*w,r[2]=h*M+f*v+m*b,r[5]=h*g+f*A+m*E,r[8]=h*p+f*S+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=e*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return t[0]=d*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wo.prototype.isMatrix3=!0;let Nt=Wo;const Xr=new Nt,hl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){const i={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xr]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:re,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const $t=Mu();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class Su{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=Mr("canvas")),Ai.width=t.width,Ai.height=t.height;const s=Ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yu=0;class Co{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yr(s[a].image)):r.push(Yr(s[a]))}else r=Yr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let bu=0;const qr=new P;class Ve extends Mi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=An,s=An,r=He,a=pi,o=xn,l=sn,c=Ve.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Gn(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=wc;Ve.DEFAULT_ANISOTROPY=1;const Xo=class Xo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,S=(f+1)/2,b=(p+1)/2,E=(u+h)/4,w=(d+M)/4,x=(m+g)/4;return A>S&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=w/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=x/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-M)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xo.prototype.isVector4=!0;let ve=Xo;class Eu extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ve(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Co(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Eu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nc extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const wr=class wr{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,m,M,g)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,m,M,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,m=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,m=c*u,M=c*d;e[0]=h+M*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,m=c*u,M=c*d;e[0]=h-M*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,m=o*u,M=o*d;e[0]=l*u,e[4]=m*c-f,e[8]=h*c+M,e[1]=l*d,e[5]=M*c+h,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,m=o*l,M=o*c;e[0]=l*u,e[4]=M-h*d,e[8]=m*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+m,e[10]=h-M*d}else if(t.order==="XZY"){const h=a*l,f=a*c,m=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+M,e[5]=a*u,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Au)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Jn.crossVectors(n,je),Jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Jn.crossVectors(n,je)),Jn.normalize(),Ns.crossVectors(je,Jn),s[0]=Jn.x,s[4]=Ns.x,s[8]=je.x,s[1]=Jn.y,s[5]=Ns.y,s[9]=je.y,s[2]=Jn.z,s[6]=Ns.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],M=n[6],g=n[10],p=n[14],v=n[3],A=n[7],S=n[11],b=n[15],E=s[0],w=s[4],x=s[8],T=s[12],C=s[1],D=s[5],L=s[9],G=s[13],I=s[2],H=s[6],Z=s[10],K=s[14],st=s[3],J=s[7],tt=s[11],nt=s[15];return r[0]=a*E+o*C+l*I+c*st,r[4]=a*w+o*D+l*H+c*J,r[8]=a*x+o*L+l*Z+c*tt,r[12]=a*T+o*G+l*K+c*nt,r[1]=u*E+d*C+h*I+f*st,r[5]=u*w+d*D+h*H+f*J,r[9]=u*x+d*L+h*Z+f*tt,r[13]=u*T+d*G+h*K+f*nt,r[2]=m*E+M*C+g*I+p*st,r[6]=m*w+M*D+g*H+p*J,r[10]=m*x+M*L+g*Z+p*tt,r[14]=m*T+M*G+g*K+p*nt,r[3]=v*E+A*C+S*I+b*st,r[7]=v*w+A*D+S*H+b*J,r[11]=v*x+A*L+S*Z+b*tt,r[15]=v*T+A*G+S*K+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],m=t[3],M=t[7],g=t[11],p=t[15],v=l*f-c*h,A=o*f-c*d,S=o*h-l*d,b=a*f-c*u,E=a*h-l*u,w=a*d-o*u;return e*(M*v-g*A+p*S)-n*(m*v-g*b+p*E)+s*(m*A-M*b+p*w)-r*(m*S-M*E+g*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],M=t[13],g=t[14],p=t[15],v=e*o-n*a,A=e*l-s*a,S=e*c-r*a,b=n*l-s*o,E=n*c-r*o,w=s*c-r*l,x=u*M-d*m,T=u*g-h*m,C=u*p-f*m,D=d*g-h*M,L=d*p-f*M,G=h*p-f*g,I=v*G-A*L+S*D+b*C-E*T+w*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return t[0]=(o*G-l*L+c*D)*H,t[1]=(s*L-n*G-r*D)*H,t[2]=(M*w-g*E+p*b)*H,t[3]=(h*E-d*w-f*b)*H,t[4]=(l*C-a*G-c*T)*H,t[5]=(e*G-s*C+r*T)*H,t[6]=(g*S-m*w-p*A)*H,t[7]=(u*w-h*S+f*A)*H,t[8]=(a*L-o*C+c*x)*H,t[9]=(n*C-e*L-r*x)*H,t[10]=(m*E-M*S+p*v)*H,t[11]=(d*S-u*E-f*v)*H,t[12]=(o*T-a*D-l*x)*H,t[13]=(e*D-n*T+s*x)*H,t[14]=(M*A-m*b-g*v)*H,t[15]=(u*b-d*A+h*v)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,M=a*u,g=a*d,p=o*d,v=l*c,A=l*u,S=l*d,b=n.x,E=n.y,w=n.z;return s[0]=(1-(M+p))*b,s[1]=(f+S)*b,s[2]=(m-A)*b,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(h+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+A)*w,s[9]=(g-v)*w,s[10]=(1-(h+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);const c=1/a,u=1/o,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===bs)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===Rn)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===bs)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wr.prototype.isMatrix4=!0;let oe=wr;const Ri=new P,dn=new oe,wu=new P(0,0,0),Au=new P(1,1,1),Jn=new P,Ns=new P,je=new P,fl=new oe,dl=new Si;class ri{constructor(t=0,e=0,n=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ru=0;const pl=new P,Ci=new Si,In=new oe,Fs=new P,ns=new P,Cu=new P,Pu=new Si,ml=new P(1,0,0),gl=new P(0,1,0),_l=new P(0,0,1),xl={type:"added"},Lu={type:"removed"},Pi={type:"childadded",child:null},Kr={type:"childremoved",child:null};class Ce extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new P,e=new ri,n=new Si,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Nt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ns,Fs,this.up):In.lookAt(Fs,ns,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(In),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ce.DEFAULT_UP=new P(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Be extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Ro(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jr(a,r,t+1/3),this.g=Jr(a,r,t),this.b=Jr(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return $t.workingToColorSpace(Ge.copy(this),t),Math.round(Xt(Ge.r*255,0,255))*65536+Math.round(Xt(Ge.g*255,0,255))*256+Math.round(Xt(Ge.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=$e){$t.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Os);const n=vs($n.h,Os.h,e),s=vs($n.s,Os.s,e),r=vs($n.l,Os.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Bt;Bt.NAMES=Oc;class Po{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Du extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const pn=new P,Dn=new P,$r=new P,Un=new P,Li=new P,Ii=new P,vl=new P,Qr=new P,jr=new P,ta=new P,ea=new ve,na=new ve,ia=new ve;class cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Dn.subVectors(n,e),$r.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Dn),l=pn.dot($r),c=Dn.dot(Dn),u=Dn.dot($r),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ea,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Dn.subVectors(t,e),pn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),pn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Li.subVectors(s,n),Ii.subVectors(r,n),Qr.subVectors(t,n);const l=Li.dot(Qr),c=Ii.dot(Qr);if(l<=0&&c<=0)return e.copy(n);jr.subVectors(t,s);const u=Li.dot(jr),d=Ii.dot(jr);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Li,a);ta.subVectors(t,r);const f=Li.dot(ta),m=Ii.dot(ta);if(m>=0&&f<=m)return e.copy(r);const M=f*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ii,o);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return vl.subVectors(r,s),o=(d-u)/(d-u+(f-m)),e.copy(s).addScaledVector(vl,o);const p=1/(g+M+h);return a=M*p,o=h*p,e.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class yi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),zs.subVectors(this.max,is),Di.subVectors(t.a,is),Ui.subVectors(t.b,is),Ni.subVectors(t.c,is),Qn.subVectors(Ui,Di),jn.subVectors(Ni,Ui),li.subVectors(Di,Ni);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-li.z,li.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,li.z,0,-li.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-li.y,li.x,0];return!sa(e,Di,Ui,Ni,zs)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,Di,Ui,Ni,zs))?!1:(ks.crossVectors(Qn,jn),e=[ks.x,ks.y,ks.z],sa(e,Di,Ui,Ni,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,Bs=new yi,Di=new P,Ui=new P,Ni=new P,Qn=new P,jn=new P,li=new P,is=new P,zs=new P,ks=new P,ci=new P;function sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Re=new P,Gs=new Pt;let Uu=0;class un extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Bc extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zc extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Nu=new yi,ss=new P,ra=new P;class ji{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(ra)),this.expandByPoint(ss.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Fu=0;const on=new oe,aa=new Ce,Fi=new P,tn=new yi,rs=new yi,Ie=new P;class Te extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?zc:Bc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(tn.min,rs.min),tn.expandByPoint(Ie),Ie.addVectors(tn.max,rs.max),tn.expandByPoint(Ie)):(tn.expandByPoint(rs.min),tn.expandByPoint(rs.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ie.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(t,c),Ie.add(Fi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new Pt,f=new Pt,m=new Pt,M=new P,g=new P;function p(x,T,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(M.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(D),o[x].add(M),o[T].add(M),o[C].add(M),l[x].add(g),l[T].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,T=v.length;x<T;++x){const C=v[x],D=C.start,L=C.count;for(let G=D,I=D+L;G<I;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const A=new P,S=new P,b=new P,E=new P;function w(x){b.fromBufferAttribute(s,x),E.copy(b);const T=o[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),S.crossVectors(E,T);const D=S.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=v.length;x<T;++x){const C=v[x],D=C.start,L=C.count;for(let G=D,I=D+L;G<I;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){const m=t.getX(h+0),M=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new un(h,u,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ou{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Xe=new P;class yr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oa=new P,Bu=new P,zu=new Nt;class ni{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oa.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(oa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ku=0;class bi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=_s,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ws extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Oi;const as=new P,Bi=new P,zi=new P,ki=new Pt,os=new Pt,kc=new oe,Hs=new P,ls=new P,Vs=new P,Ml=new Pt,la=new Pt,Sl=new Pt;class Rr extends Ce{constructor(t=new ws){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ou(e,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new yr(n,3,0,!1)),Oi.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=Oi,this.material=t,this.center=new Pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ws(Hs.set(-.5,-.5,0),zi,a,Bi,s,r),Ws(ls.set(.5,-.5,0),zi,a,Bi,s,r),Ws(Vs.set(.5,.5,0),zi,a,Bi,s,r),Ml.set(0,0),la.set(1,0),Sl.set(1,1);let o=t.ray.intersectTriangle(Hs,ls,Vs,!1,as);if(o===null&&(Ws(ls.set(-.5,.5,0),zi,a,Bi,s,r),la.set(0,1),o=t.ray.intersectTriangle(Hs,Vs,ls,!1,as),o===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:cn.getInterpolation(as,Hs,ls,Vs,Ml,la,Sl,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ws(i,t,e,n,s,r){ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(os.x=r*ki.x-s*ki.y,os.y=s*ki.x+r*ki.y):os.copy(ki),i.copy(t),i.x+=os.x,i.y+=os.y,i.applyMatrix4(kc)}const Fn=new P,ca=new P,Xs=new P,Ys=new P;class Gc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ca.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Ys.copy(this.origin).sub(ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xs),o=Ys.dot(this.direction),l=-Ys.dot(Xs),c=Ys.lengthSq(),u=Math.abs(1-a*a);let d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){const M=1/u;d*=M,h*=M,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ca).addScaledVector(Xs,h),f}intersectSphere(t,e){if(t.radius<0)return null;Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,m=e.x-a.x,M=e.y-a.y,g=e.z-a.z,p=n.x-a.x,v=n.y-a.y,A=n.z-a.z,S=Math.abs(l),b=Math.abs(c),E=Math.abs(u);let w,x,T,C,D,L,G,I,H,Z,K,st;if(S>=b&&S>=E?(T=l,L=d,H=m,st=p,l>=0?(w=c,x=u,C=h,D=f,G=M,I=g,Z=v,K=A):(w=u,x=c,C=f,D=h,G=g,I=M,Z=A,K=v)):b>=E?(T=c,L=h,H=M,st=v,c>=0?(w=u,x=l,C=f,D=d,G=g,I=m,Z=A,K=p):(w=l,x=u,C=d,D=f,G=m,I=g,Z=p,K=A)):(T=u,L=f,H=g,st=A,u>=0?(w=l,x=c,C=d,D=h,G=m,I=M,Z=p,K=v):(w=c,x=l,C=h,D=d,G=M,I=m,Z=v,K=p)),T===0)return null;const J=w/T,tt=x/T,nt=1/T,Tt=C-J*L,Mt=D-tt*L,se=G-J*H,Yt=I-tt*H,Jt=Z-J*st,Q=K-tt*st,et=Jt*Yt-Q*se,xt=Tt*Q-Mt*Jt,Rt=se*Mt-Yt*Tt;if(s){if(et<0||xt<0||Rt<0)return null}else if((et<0||xt<0||Rt<0)&&(et>0||xt>0||Rt>0))return null;const mt=et+xt+Rt;if(mt===0)return null;const Ft=nt*(et*L+xt*H+Rt*st);return(mt>0?Ft<0:Ft>0)?null:this.at(Ft/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yl=new oe,hi=new Gc,qs=new ji,bl=new P,Ks=new P,Zs=new P,Js=new P,ha=new P,$s=new P,El=new P,Qs=new P;class Ut extends Ce{constructor(t=new Te,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(ha.fromBufferAttribute(d,t),a?$s.addScaledVector(ha,u):$s.addScaledVector(ha.sub(e),u))}e.add($s)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(qs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(qs,bl)===null||hi.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),hi.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){const g=h[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,b=A;S<b;S+=3){const E=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);s=js(this,p,t,n,c,u,d,E,w,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=m,p=M;g<p;g+=3){const v=o.getX(g),A=o.getX(g+1),S=o.getX(g+2);s=js(this,a,t,n,c,u,d,v,A,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){const g=h[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,b=A;S<b;S+=3){const E=S,w=S+1,x=S+2;s=js(this,p,t,n,c,u,d,E,w,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let g=m,p=M;g<p;g+=3){const v=g,A=g+1,S=g+2;s=js(this,a,t,n,c,u,d,v,A,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Gu(i,t,e,n,s,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===gi,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qs);return c<e.near||c>e.far?null:{distance:c,point:Qs.clone(),object:i}}function js(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Js);const u=Gu(i,t,e,n,Ks,Zs,Js,El);if(u){const d=new P;cn.getBarycoord(El,Ks,Zs,Js,d),s&&(u.uv=cn.getInterpolatedAttribute(s,o,l,c,d,new Pt)),r&&(u.uv1=cn.getInterpolatedAttribute(r,o,l,c,d,new Pt)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};cn.getNormal(Ks,Zs,Js,h.normal),u.face=h,u.barycoord=d}return u}class Hc extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Oe,u=Oe,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new oe,wl=new oe,tr=[],Al=new yi,Hu=new oe,cs=new Ut,hs=new ji;class On extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Al.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Al)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),hs.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),wl.multiplyMatrices(n,Gi),cs.matrixWorld=wl,cs.raycast(t,tr);for(let a=0,o=tr.length;a<o;a++){const l=tr[a];l.instanceId=r,l.object=this,e.push(l)}tr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hc(new Float32Array(s*this.count),s,this.count,yo,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ui=new ji,Vu=new Pt(.5,.5),er=new P;class Lo{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],M=r[9],g=r[10],p=r[11],v=r[12],A=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-a,f-u,p-m,b-v).normalize(),s[1].setComponents(c+a,f+u,p+m,b+v).normalize(),s[2].setComponents(c+o,f+d,p+M,b+A).normalize(),s[3].setComponents(c-o,f-d,p-M,b-A).normalize(),n)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,f-h,p-g,b-S).normalize();else if(s[4].setComponents(c-l,f-h,p-g,b-S).normalize(),e===Rn)s[5].setComponents(c+l,f+h,p+g,b+S).normalize();else if(e===bs)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=Vu.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(er.x=s.normal.x>0?t.max.x:t.min.x,er.y=s.normal.y>0?t.max.y:t.min.y,er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vc extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rl=new oe,uo=new Gc,nr=new ji,ir=new P;class Wu extends Ce{constructor(t=new Te,e=new Vc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Rl.copy(s).invert(),uo.copy(t.ray).applyMatrix4(Rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=h,M=f;m<M;m++){const g=c.getX(m);ir.fromBufferAttribute(d,g),Cl(ir,g,l,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,M=f;m<M;m++)ir.fromBufferAttribute(d,m),Cl(ir,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cl(i,t,e,n,s,r,a){const o=uo.distanceSqToPoint(i);if(o<e){const l=new P;uo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wc extends Ve{constructor(t=[],e=_i,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xu extends Ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends Ve{constructor(t,e,n=Pn,s,r,a,o=Oe,l=Oe,c,u=Vn,d=1){if(u!==Vn&&u!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Yu extends Ts{constructor(t,e=Pn,n=_i,s,r,a=Oe,o=Oe,l,c=Vn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xc extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ee extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function m(M,g,p,v,A,S,b,E,w,x,T){const C=S/w,D=b/x,L=S/2,G=b/2,I=E/2,H=w+1,Z=x+1;let K=0,st=0;const J=new P;for(let tt=0;tt<Z;tt++){const nt=tt*D-G;for(let Tt=0;Tt<H;Tt++){const Mt=Tt*C-L;J[M]=Mt*v,J[g]=nt*A,J[p]=I,c.push(J.x,J.y,J.z),J[M]=0,J[g]=0,J[p]=E>0?1:-1,u.push(J.x,J.y,J.z),d.push(Tt/w),d.push(1-tt/x),K+=1}}for(let tt=0;tt<x;tt++)for(let nt=0;nt<w;nt++){const Tt=h+nt+H*tt,Mt=h+nt+H*(tt+1),se=h+(nt+1)+H*(tt+1),Yt=h+(nt+1)+H*tt;l.push(Tt,Mt,Yt),l.push(Mt,se,Yt),st+=6}o.addGroup(f,st,T),f+=st,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class As extends Te{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,m=n*2+r,M=s+1,g=new P,p=new P;for(let v=0;v<=m;v++){let A=0,S=0,b=0,E=0;if(v<=n){const T=v/n,C=T*Math.PI/2;S=-u-t*Math.cos(C),b=t*Math.sin(C),E=-t*Math.cos(C),A=T*d}else if(v<=n+r){const T=(v-n)/r;S=-u+T*e,b=t,E=0,A=d+T*h}else{const T=(v-n-r)/n,C=T*Math.PI/2;S=u+t*Math.sin(C),b=t*Math.cos(C),E=t*Math.sin(C),A=d+h+T*d}const w=Math.max(0,Math.min(1,A/f));let x=0;v===0?x=.5/s:v===m&&(x=-.5/s);for(let T=0;T<=s;T++){const C=T/s,D=C*Math.PI*2,L=Math.sin(D),G=Math.cos(D);p.x=-b*G,p.y=S,p.z=b*L,o.push(p.x,p.y,p.z),g.set(-b*G,E,b*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+x,w)}if(v>0){const T=(v-1)*M;for(let C=0;C<s;C++){const D=T+C,L=T+C+1,G=v*M+C,I=v*M+C+1;a.push(D,L,G),a.push(L,I,G)}}}this.setIndex(a),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class br extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,u=new Pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ln extends Te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let m=0;const M=[],g=n/2;let p=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(f,2));function v(){const S=new P,b=new P;let E=0;const w=(e-t)/n;for(let x=0;x<=r;x++){const T=[],C=x/r,D=C*(e-t)+t;for(let L=0;L<=s;L++){const G=L/s,I=G*l+o,H=Math.sin(I),Z=Math.cos(I);b.x=D*H,b.y=-C*n+g,b.z=D*Z,d.push(b.x,b.y,b.z),S.set(H,w,Z).normalize(),h.push(S.x,S.y,S.z),f.push(G,1-C),T.push(m++)}M.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const C=M[T][x],D=M[T+1][x],L=M[T+1][x+1],G=M[T][x+1];(t>0||T!==0)&&(u.push(C,D,G),E+=3),(e>0||T!==r-1)&&(u.push(D,L,G),E+=3)}c.addGroup(p,E,0),p+=E}function A(S){const b=m,E=new Pt,w=new P;let x=0;const T=S===!0?t:e,C=S===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),m++;const D=m;for(let L=0;L<=s;L++){const I=L/s*l+o,H=Math.cos(I),Z=Math.sin(I);w.x=T*Z,w.y=g*C,w.z=T*H,d.push(w.x,w.y,w.z),h.push(0,C,0),E.x=H*.5+.5,E.y=Z*.5*C+.5,f.push(E.x,E.y),m++}for(let L=0;L<s;L++){const G=b+L,I=D+L;S===!0?u.push(I,I+1,G):u.push(I+1,I,G),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends ln{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const A=new P,S=new P,b=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],A),f(e[E+1],S),f(e[E+2],b),l(A,S,b,v)}function l(v,A,S,b){const E=b+1,w=[];for(let x=0;x<=E;x++){w[x]=[];const T=v.clone().lerp(S,x/E),C=A.clone().lerp(S,x/E),D=E-x;for(let L=0;L<=D;L++)L===0&&x===E?w[x][L]=T:w[x][L]=T.clone().lerp(C,L/D)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){const C=Math.floor(T/2);T%2===0?(h(w[x][C+1]),h(w[x+1][C]),h(w[x][C])):(h(w[x][C+1]),h(w[x+1][C+1]),h(w[x+1][C]))}}function c(v){const A=new P;for(let S=0;S<r.length;S+=3)A.x=r[S+0],A.y=r[S+1],A.z=r[S+2],A.normalize().multiplyScalar(v),r[S+0]=A.x,r[S+1]=A.y,r[S+2]=A.z}function u(){const v=new P;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];const S=g(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;a.push(S,1-b)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){const A=a[v+0],S=a[v+2],b=a[v+4],E=Math.max(A,S,b),w=Math.min(A,S,b);E>.9&&w<.1&&(A<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,A){const S=v*3;A.x=t[S+0],A.y=t[S+1],A.z=t[S+2]}function m(){const v=new P,A=new P,S=new P,b=new P,E=new Pt,w=new Pt,x=new Pt;for(let T=0,C=0;T<r.length;T+=9,C+=6){v.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),S.set(r[T+6],r[T+7],r[T+8]),E.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),b.copy(v).add(A).add(S).divideScalar(3);const D=g(b);M(E,C+0,v,D),M(w,C+2,A,D),M(x,C+4,S,D)}}function M(v,A,S,b){b<0&&v.x===1&&(a[A]=v.x-1),S.x===0&&S.z===0&&(a[A]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.vertices,t.indices,t.radius,t.detail)}}class qu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new oe;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Xt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Io(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Pl=new P,Ll=new P,ua=new Io,fa=new Io,da=new Io;class Ku extends qu{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ll.subVectors(s[0],s[1]).add(s[0]),c=Ll);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Pl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),ua.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,M,g),fa.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,M,g),da.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,M,g)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),fa.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),da.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ua.calc(l),fa.calc(l),da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Do extends Cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Do(t.radius,t.detail)}}class Uo extends Cr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Uo(t.radius,t.detail)}}class Qe extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],m=[],M=[],g=[];for(let p=0;p<u;p++){const v=p*h-a;for(let A=0;A<c;A++){const S=A*d-r;m.push(S,-v,0),M.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const A=v+c*p,S=v+c*(p+1),b=v+1+c*(p+1),E=v+1+c*p;f.push(A,S,E),f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(M,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Er extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,f=new P,m=new Pt;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}d+=h}for(let M=0;M<s;M++){const g=M*(n+1);for(let p=0;p<n;p++){const v=p+g,A=v,S=v+n+1,b=v+n+2,E=v+1;o.push(A,S,E),o.push(S,b,E)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ge extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],m=[],M=[],g=[];for(let p=0;p<=n;p++){const v=[],A=p/n,S=a+A*o,b=t*Math.cos(S),E=Math.sqrt(t*t-b*b);let w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){const T=x/e,C=s+T*r;d.x=-E*Math.cos(C),d.y=b,d.z=E*Math.sin(C),m.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),g.push(T+w,1-A),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const A=u[p][v+1],S=u[p][v],b=u[p+1][v],E=u[p+1][v+1];(p!==0||a>0)&&f.push(A,S,E),(p!==n-1||l<Math.PI)&&f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(M,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,m=new P;for(let M=0;M<=n;M++){const g=a+M/n*o;for(let p=0;p<=s;p++){const v=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){const p=(s+1)*M+g-1,v=(s+1)*(M-1)+g-1,A=(s+1)*(M-1)+g,S=(s+1)*M+g;l.push(p,v,S),l.push(v,A,S)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Il(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Il(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Il(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Ju={clone:Qi,merge:qe};var $u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ju extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rs extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tf extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ef extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class No extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class nf extends No{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const pa=new oe,Dl=new P,Ul=new P;class qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dl),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(pa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===bs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sr=new P,rr=new Si,bn=new P;class Kc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sr,rr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(sr,rr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new P,Nl=new Pt,Fl=new Pt;class en extends Kc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Nl,Fl),e.subVectors(Fl,Nl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class sf extends qc{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class rf extends No{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Fo extends Kc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class af extends qc{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new af}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Hi=-90,Vi=1;class of extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const r=new en(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new en(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new en(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const l=new en(Hi,Vi,t,e);l.layers=this.layers,this.add(l);const c=new en(Hi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class lf extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yo=class Yo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yo.prototype.isMatrix2=!0;let Bl=Yo;function zl(i,t,e,n){const s=cf(n);switch(e){case Lc:return i*t;case yo:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case xi:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:case ka:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case za:case gr:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case io:case so:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(i){switch(i){case sn:case Ac:return{byteLength:1,components:1};case Ss:case Rc:case Ln:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case Pn:case vo:case _n:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],M=d[f];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,d[h]=M)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const M=d[f];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,cd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,wp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ap=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cp=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Pp=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lp=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Np=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Fp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Op=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,kp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Wp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gt={alphahash_fragment:uf,alphahash_pars_fragment:ff,alphamap_fragment:df,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:vf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:yf,bsdfs:bf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Df,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:zf,emissivemap_pars_fragment:kf,colorspace_fragment:Gf,colorspace_pars_fragment:Hf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:id,envmap_vertex:qf,fog_vertex:Kf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:$f,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:jf,lights_lambert_fragment:td,lights_lambert_pars_fragment:ed,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:fd,lightprobes_pars_fragment:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:Md,map_particle_pars_fragment:Sd,metalnessmap_fragment:yd,metalnessmap_pars_fragment:bd,morphinstance_vertex:Ed,morphcolor_vertex:Td,morphnormal_vertex:wd,morphtarget_pars_vertex:Ad,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:Pd,normal_pars_fragment:Ld,normal_pars_vertex:Id,normal_vertex:Dd,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:zd,packing:kd,premultiplied_alpha_fragment:Gd,project_vertex:Hd,dithering_fragment:Vd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Kd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:$d,skinning_pars_vertex:Qd,skinning_vertex:jd,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:hp,background_vert:up,background_frag:fp,backgroundCube_vert:dp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distance_vert:vp,distance_frag:Mp,equirect_vert:Sp,equirect_frag:yp,linedashed_vert:bp,linedashed_frag:Ep,meshbasic_vert:Tp,meshbasic_frag:wp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Lp,meshnormal_frag:Ip,meshphong_vert:Dp,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:zp,points_frag:kp,shadow_vert:Gp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Wp},ht={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},wn={basic:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:qe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:qe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:qe([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:qe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:qe([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:qe([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:qe([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:qe([ht.lights,ht.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};wn.physical={uniforms:qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ar={r:0,b:0,g:0},Xp=new oe,Jc=new Nt;Jc.set(-1,0,0,0,1,0,0,0,1);function Yp(i,t,e,n,s,r){const a=new Bt(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){const S=v.backgroundBlurriness>0;A=t.get(A,S)}return A}function m(v){let A=!1;const S=f(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,A){const S=f(A);S&&(S.isCubeTexture||S.mapping===Ar)?(c===void 0&&(c=new Ut(new Ee(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Qi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jc),c.material.toneMapped=$t.getTransfer(S.colorSpace)!==re,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ut(new Qe(2,2),new Mn({name:"BackgroundMaterial",uniforms:Qi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=$t.getTransfer(S.colorSpace)!==re,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,A){v.getRGB(ar,Yc(i)),e.buffers.color.setClear(ar.r,ar.g,ar.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:M,dispose:p}}function qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,L,G,I,H){let Z=!1;const K=d(D,I,G,L);r!==K&&(r=K,c(r.object)),Z=f(D,I,G,H),Z&&m(D,I,G,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(D,L,G,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,L,G,I){const H=I.wireframe===!0;let Z=n[L.id];Z===void 0&&(Z={},n[L.id]=Z);const K=D.isInstancedMesh===!0?D.id:0;let st=Z[K];st===void 0&&(st={},Z[K]=st);let J=st[G.id];J===void 0&&(J={},st[G.id]=J);let tt=J[H];return tt===void 0&&(tt=h(l()),J[H]=tt),tt}function h(D){const L=[],G=[],I=[];for(let H=0;H<e;H++)L[H]=0,G[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,L,G,I){const H=r.attributes,Z=L.attributes;let K=0;const st=G.getAttributes();for(const J in st)if(st[J].location>=0){const nt=H[J];let Tt=Z[J];if(Tt===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor)),nt===void 0||nt.attribute!==Tt||Tt&&nt.data!==Tt.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function m(D,L,G,I){const H={},Z=L.attributes;let K=0;const st=G.getAttributes();for(const J in st)if(st[J].location>=0){let nt=Z[J];nt===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));const Tt={};Tt.attribute=nt,nt&&nt.data&&(Tt.data=nt.data),H[J]=Tt,K++}r.attributes=H,r.attributesNum=K,r.index=I}function M(){const D=r.newAttributes;for(let L=0,G=D.length;L<G;L++)D[L]=0}function g(D){p(D,0)}function p(D,L){const G=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;G[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),H[D]!==L&&(i.vertexAttribDivisor(D,L),H[D]=L)}function v(){const D=r.newAttributes,L=r.enabledAttributes;for(let G=0,I=L.length;G<I;G++)L[G]!==D[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function A(D,L,G,I,H,Z,K){K===!0?i.vertexAttribIPointer(D,L,G,H,Z):i.vertexAttribPointer(D,L,G,I,H,Z)}function S(D,L,G,I){M();const H=I.attributes,Z=G.getAttributes(),K=L.defaultAttributeValues;for(const st in Z){const J=Z[st];if(J.location>=0){let tt=H[st];if(tt===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){const nt=tt.normalized,Tt=tt.itemSize,Mt=t.get(tt);if(Mt===void 0)continue;const se=Mt.buffer,Yt=Mt.type,Jt=Mt.bytesPerElement,Q=Yt===i.INT||Yt===i.UNSIGNED_INT||tt.gpuType===vo;if(tt.isInterleavedBufferAttribute){const et=tt.data,xt=et.stride,Rt=tt.offset;if(et.isInstancedInterleavedBuffer){for(let mt=0;mt<J.locationSize;mt++)p(J.location+mt,et.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<J.locationSize;mt++)g(J.location+mt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let mt=0;mt<J.locationSize;mt++)A(J.location+mt,Tt/J.locationSize,Yt,nt,xt*Jt,(Rt+Tt/J.locationSize*mt)*Jt,Q)}else{if(tt.isInstancedBufferAttribute){for(let et=0;et<J.locationSize;et++)p(J.location+et,tt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<J.locationSize;et++)g(J.location+et);i.bindBuffer(i.ARRAY_BUFFER,se);for(let et=0;et<J.locationSize;et++)A(J.location+et,Tt/J.locationSize,Yt,nt,Tt*Jt,Tt/J.locationSize*et*Jt,Q)}}else if(K!==void 0){const nt=K[st];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(J.location,nt);break;case 3:i.vertexAttrib3fv(J.location,nt);break;case 4:i.vertexAttrib4fv(J.location,nt);break;default:i.vertexAttrib1fv(J.location,nt)}}}}v()}function b(){T();for(const D in n){const L=n[D];for(const G in L){const I=L[G];for(const H in I){const Z=I[H];for(const K in Z)u(Z[K].object),delete Z[K];delete I[H]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const G in L){const I=L[G];for(const H in I){const Z=I[H];for(const K in Z)u(Z[K].object),delete Z[K];delete I[H]}}delete n[D.id]}function w(D){for(const L in n){const G=n[L];for(const I in G){const H=G[I];if(H[D.id]===void 0)continue;const Z=H[D.id];for(const K in Z)u(Z[K].object),delete Z[K];delete H[D.id]}}}function x(D){for(const L in n){const G=n[L],I=D.isInstancedMesh===!0?D.id:0,H=G[I];if(H!==void 0){for(const Z in H){const K=H[Z];for(const st in K)u(K[st].object),delete K[st];delete H[Z]}delete G[I],Object.keys(G).length===0&&delete n[L]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:g,disableUnusedAttributes:v}}function Kp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==sn&&w!==_n&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ct("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:S,maxSamples:b,samples:E}}function Jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ni,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const v=r?0:n,A=v*4;let S=p.clippingState||null;l.value=S,S=u(m,h,A,f);for(let b=0;b!==A;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,m){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const p=f+M*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,S=f;A!==M;++A,S+=4)a.copy(d[A]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const qi=4,$p=6,Qp=20,jp=256,us=new Fo,kl=new Bt;let ma=null,ga=0,_a=0,xa=!1;const tm=new P,fi=new P;class Gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=tm}=r;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,t.scissorTest=!1,Wi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Ln,format:xn,colorSpace:xr,depthBuffer:!1},s=Hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(r)),this._blurMaterial=im(r,t,e),this._ggxMaterial=nm(r,t,e)}return s}_compileMaterial(t){const e=new Ut(new Te,t);this._renderer.compile(e,us)}_sceneToCubeUV(t,e,n,s,r){const l=new en(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(kl),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Ee,new Ue({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(kl),p=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):S===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const b=this._cubeSize;Wi(s,S*b,A>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_i||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Wi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,us)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:m}=this,M=this._sizeLods[n],g=3*M*(n>m-qi?n-m+qi:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Wi(r,g,p,3*M,2*M),s.setRenderTarget(r),s.render(o,us),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Wi(t,g,p,3*M,2*M),s.setRenderTarget(t),s.render(o,us)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-qi?s-this._lodMax+qi:0),h=4*(this._cubeSize-u);Wi(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,us)}}function em(i){const t=[],e=[];let n=i;const s=i-qi+1+$p;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=new Float32Array(f*h*d),M=new Float32Array(f*h*d);for(let p=0;p<d;p++){const v=p%3*2/3-1,A=p>2?0:-1,S=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];m.set(S,f*h*p);for(let b=0;b<h;b++){const E=u[b*2]*2-1,w=u[b*2+1]*2-1;p===0?fi.set(1,w,E):p===1?fi.set(-E,1,-w):p===2?fi.set(-E,w,1):p===3?fi.set(-1,w,-E):p===4?fi.set(-E,-1,w):fi.set(E,w,-1),fi.toArray(M,(p*h+b)*f)}}const g=new Te;g.setAttribute("position",new un(m,f)),g.setAttribute("outputDirection",new un(M,f)),e.push(new Ut(g,null)),n>qi&&n--}return{lodMeshes:e,sizeLods:t}}function Hl(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nm(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function im(i,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Qp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Vl(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Pr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $c extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:kn});r.uniforms.tEquirect.value=e;const a=new Ut(s,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=He),new of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function sm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===kr||f===Gr)if(t.has(h)){const m=t.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const M=new $c(m.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,m=f===kr||f===Gr,M=f===_i||f===Ji;if(m||M){let g=e.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Gl(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return m&&v&&v.height>0||M&&v&&l(v)?(n===null&&(n=new Gl(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===kr?h.mapping=_i:f===Gr&&(h.mapping=Ji),h}function l(h){let f=0;const m=6;for(let M=0;M<m;M++)h[M]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function rm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ki("WebGLRenderer: "+n+" extension not supported."),s}}}function am(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let M=0;if(m===void 0)return;if(f!==null){const v=f.array;M=f.version;for(let A=0,S=v.length;A<S;A+=3){const b=v[A+0],E=v[A+1],w=v[A+2];h.push(b,E,E,w,w,b)}}else{const v=m.array;M=m.version;for(let A=0,S=v.length/3-1;A<S;A+=3){const b=A+0,E=A+1,w=A+2;h.push(b,E,E,w,w,b)}}const g=new(m.count>=65535?zc:Bc)(h,1);g.version=M;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function om(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let M=0;for(let g=0;g<f;g++)M+=h[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cm(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let A=0;f===!0&&(A=1),m===!0&&(A=2),M===!0&&(A=3);let S=o.attributes.position.count*A,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*b*4*d),w=new Nc(E,S,b,d);w.type=_n,w.needsUpdate=!0;const x=A*4;for(let C=0;C<d;C++){const D=g[C],L=p[C],G=v[C],I=S*b*4*C;for(let H=0;H<D.count;H++){const Z=H*x;f===!0&&(s.fromBufferAttribute(D,H),E[I+Z+0]=s.x,E[I+Z+1]=s.y,E[I+Z+2]=s.z,E[I+Z+3]=0),m===!0&&(s.fromBufferAttribute(L,H),E[I+Z+4]=s.x,E[I+Z+5]=s.y,E[I+Z+6]=s.z,E[I+Z+7]=0),M===!0&&(s.fromBufferAttribute(G,H),E[I+Z+8]=s.x,E[I+Z+9]=s.y,E[I+Z+10]=s.z,E[I+Z+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new Pt(S,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function hm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const um={[vc]:"LINEAR_TONE_MAPPING",[Mc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function fm(i,t,e,n,s,r){const a=new vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Te;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));const u=new ju({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ut(c,u),h=new Fo(-1,1,1,-1,0,1);let f=null,m=null,M=!1,g,p=null,v=[],A=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),l!==null&&l.setSize(S,b);for(let E=0;E<v.length;E++){const w=v[E];w.setSize&&w.setSize(S,b)}},this.setEffects=function(S){v=S,A=v.length>0&&v[0].isRenderPass===!0;const b=a.width,E=a.height;v.length>0&&o===null&&(o=new vn(b,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new vn(b,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const x=v[w];x.setSize&&x.setSize(b,E)}},this.begin=function(S,b){if(M||S.toneMapping===Cn&&v.length===0)return!1;if(p=b,b!==null){const E=b.width,w=b.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return A===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Cn,!0},this.hasRenderPass=function(){return A},this.end=function(S,b){S.toneMapping=g,M=!0;let E=a,w=o;for(let x=0;x<v.length;x++){const T=v[x];T.enabled!==!1&&(T.render(S,w,E,b),T.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(f!==S.outputColorSpace||m!==S.toneMapping){f=S.outputColorSpace,m=S.toneMapping,u.defines={},$t.getTransfer(f)===re&&(u.defines.SRGB_TRANSFER="");const x=um[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(d,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Qc=new Ve,fo=new Ts(1,1),jc=new Nc,th=new Tu,eh=new Wc,Xl=[],Yl=[],ql=new Float32Array(16),Kl=new Float32Array(9),Zl=new Float32Array(4);function ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lr(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Le(e,n)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),Le(e,n)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),Le(e,n)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fo.compareFunction=e.isReversedDepthBuffer()?Ao:wo,r=fo):r=Qc,e.setTexture2D(t||r,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||th,s)}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eh,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jc,s)}function Im(i){switch(i){case 5126:return dm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return ym;case 35669:case 35673:return bm;case 5125:return Em;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Dm(i,t){i.uniform1fv(this.addr,t)}function Um(i,t){const e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Nm(i,t){const e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Fm(i,t){const e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Om(i,t){const e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bm(i,t){const e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zm(i,t){const e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Gm(i,t){i.uniform2iv(this.addr,t)}function Hm(i,t){i.uniform3iv(this.addr,t)}function Vm(i,t){i.uniform4iv(this.addr,t)}function Wm(i,t){i.uniform1uiv(this.addr,t)}function Xm(i,t){i.uniform2uiv(this.addr,t)}function Ym(i,t){i.uniform3uiv(this.addr,t)}function qm(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fo:a=Qc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Zm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||th,r[a])}function Jm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||eh,r[a])}function $m(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jc,r[a])}function Qm(i){switch(i){case 5126:return Dm;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Gm;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return Ym;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return $m}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Im(e.type)}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Jl(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),a=va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jl(e,c===void 0?new jm(o,i,t):new t0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new e0(o),Jl(e,d)),e=d}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);n0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $l(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i0=37297;let s0=0;function r0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ql=new Nt;function a0(i){$t._getMatrix(Ql,$t.workingColorSpace,i);const t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+r0(i.getShaderSource(t),o)}else return r}function o0(i,t){const e=a0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const l0={[vc]:"Linear",[Mc]:"Reinhard",[Sc]:"Cineon",[yc]:"ACESFilmic",[Ec]:"AgX",[Tc]:"Neutral",[bc]:"Custom"};function c0(i,t){const e=l0[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const or=new P;function h0(){$t.getLuminanceCoefficients(or);const i=or.x.toFixed(4),t=or.y.toFixed(4),e=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function f0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(i){return i.replace(p0,g0)}const m0=new Map;function g0(i,t){let e=Gt[t];if(e===void 0){const n=m0.get(t);if(n!==void 0)e=Gt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return po(e)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(_0,x0)}function x0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const v0={[cr]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function M0(i){return v0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S0={[_i]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function y0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":S0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const b0={[Ji]:"ENVMAP_MODE_REFRACTION"};function E0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const T0={[xo]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[Vh]:"ENVMAP_BLENDING_ADD"};function w0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":T0[i.combine]||"ENVMAP_BLENDING_NONE"}function A0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function R0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=M0(e),c=y0(e),u=E0(e),d=w0(e),h=A0(e),f=u0(e),m=f0(r),M=s.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ps).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(g=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),h0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=po(a),a=tc(a,e),a=ec(a,e),o=po(o),o=tc(o,e),o=ec(o,e),a=nc(a),o=nc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=v+g+a,S=v+p+o,b=$l(s,s.VERTEX_SHADER,A),E=$l(s,s.FRAGMENT_SHADER,S);s.attachShader(M,b),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(D){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(E)||"",H=L.trim(),Z=G.trim(),K=I.trim();let st=!0,J=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,E);else{const tt=jl(s,b,"vertex"),nt=jl(s,E,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+tt+`
`+nt)}else H!==""?Ct("WebGLProgram: Program Info Log:",H):(Z===""||K==="")&&(J=!1);J&&(D.diagnostics={runnable:st,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(b),s.deleteShader(E),x=new pr(s,M),T=d0(s,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,i0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=E,this}let C0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new L0(t),e.set(t,n)),n}}class L0{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}}function I0(i){return i===xi||i===gr||i===_r}function D0(i,t,e,n,s,r){const a=new Fc,o=new P0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,C,D,L,G){const I=D.fog,H=L.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||Z,K),J=st&&st.mapping===Ar?st.image.height:null,tt=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Tt=nt!==void 0?nt.length:0;let Mt=0;H.morphAttributes.position!==void 0&&(Mt=1),H.morphAttributes.normal!==void 0&&(Mt=2),H.morphAttributes.color!==void 0&&(Mt=3);let se,Yt,Jt,Q;if(tt){const de=wn[tt];se=de.vertexShader,Yt=de.fragmentShader}else{se=x.vertexShader,Yt=x.fragmentShader;const de=o.getVertexShaderStage(x),ne=o.getFragmentShaderStage(x);o.update(x,de,ne),Jt=de.id,Q=ne.id}const et=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Rt=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,Ft=!!x.map,ue=!!x.matcap,Ot=!!st,Zt=!!x.aoMap,te=!!x.lightMap,Dt=!!x.bumpMap&&x.wireframe===!1,le=!!x.normalMap,we=!!x.displacementMap,Me=!!x.emissiveMap,ce=!!x.metalnessMap,_e=!!x.roughnessMap,O=x.anisotropy>0,xe=x.clearcoat>0,zt=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,$=O&&!!x.anisotropyMap,U=xe&&!!x.clearcoatMap,z=xe&&!!x.clearcoatNormalMap,B=xe&&!!x.clearcoatRoughnessMap,Y=_&&!!x.iridescenceMap,it=_&&!!x.iridescenceThicknessMap,gt=k&&!!x.sheenColorMap,lt=k&&!!x.sheenRoughnessMap,ot=!!x.specularMap,dt=!!x.specularColorMap,At=!!x.specularIntensityMap,Lt=X&&!!x.transmissionMap,N=X&&!!x.thicknessMap,at=!!x.gradientMap,j=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,rt=!!x.extensions;let wt=Cn;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(wt=i.toneMapping);const bt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:Yt,defines:x.defines,customVertexShaderID:Jt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&L.instanceColor!==null,instancingMorph:Rt&&L.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ft,matcap:ue,envMap:Ot,envMapMode:Ot&&st.mapping,envMapCubeUVHeight:J,aoMap:Zt,lightMap:te,bumpMap:Dt,normalMap:le,displacementMap:we,emissiveMap:Me,normalMapObjectSpace:le&&x.normalMapType===Yh,normalMapTangentSpace:le&&x.normalMapType===co,packedNormalMap:le&&x.normalMapType===co&&I0(x.normalMap.format),metalnessMap:ce,roughnessMap:_e,anisotropy:O,anisotropyMap:$,clearcoat:xe,clearcoatMap:U,clearcoatNormalMap:z,clearcoatRoughnessMap:B,dispersion:zt,retroreflection:R,iridescence:_,iridescenceMap:Y,iridescenceThicknessMap:it,sheen:k,sheenColorMap:gt,sheenRoughnessMap:lt,specularMap:ot,specularColorMap:dt,specularIntensityMap:At,transmission:X,transmissionMap:Lt,thicknessMap:N,gradientMap:at,opaque:x.transparent===!1&&x.blending===_s&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Ft&&m(x.map.channel),aoMapUv:Zt&&m(x.aoMap.channel),lightMapUv:te&&m(x.lightMap.channel),bumpMapUv:Dt&&m(x.bumpMap.channel),normalMapUv:le&&m(x.normalMap.channel),displacementMapUv:we&&m(x.displacementMap.channel),emissiveMapUv:Me&&m(x.emissiveMap.channel),metalnessMapUv:ce&&m(x.metalnessMap.channel),roughnessMapUv:_e&&m(x.roughnessMap.channel),anisotropyMapUv:$&&m(x.anisotropyMap.channel),clearcoatMapUv:U&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:z&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:lt&&m(x.sheenRoughnessMap.channel),specularMapUv:ot&&m(x.specularMap.channel),specularColorMapUv:dt&&m(x.specularColorMap.channel),specularIntensityMapUv:At&&m(x.specularIntensityMap.channel),transmissionMapUv:Lt&&m(x.transmissionMap.channel),thicknessMapUv:N&&m(x.thicknessMap.channel),alphaMapUv:j&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(le||O),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Ft||j),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ft&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),v(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=f[x.type];let C;if(T){const D=wn[T];C=Ju.clone(D.uniforms)}else C=x.uniforms;return C}function S(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new R0(i,T,x,s),c.push(C),u.set(T,C)),C}function b(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:A,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:w}}function U0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function N0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,M,g,p){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:p},i[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=m,v.materialVariant=a(h),v.groupOrder=M,v.renderOrder=h.renderOrder,v.z=g,v.group=p),t++,v}function l(h,f,m,M,g,p,v){v.reversedDepth===!0&&(g=-g);const A=o(h,f,m,M,g,p);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(h,f,m,M,g,p){const v=o(h,f,m,M,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||N0),n.length>1&&n.sort(f||sc),s.length>1&&s.sort(f||sc)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function F0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rc,i.set(n,[a])):s>=r.length?(a=new rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function O0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function B0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let z0=0;function k0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G0(i){const t=new O0,e=B0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new oe,a=new oe;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,M=0,g=0,p=0,v=0,A=0,S=0,b=0,E=0,w=0,x=0,T=0,C=0;c.sort(k0);for(let L=0,G=c.length;L<G;L++){const I=c[L],H=I.color,Z=I.intensity,K=I.distance;let st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===xi?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=H.r*Z,d+=H.g*Z,h+=H.b*Z;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],Z);C++}else if(I.isSunLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const tt=I.shadow,nt=e.get(I);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[m]=nt,n.sunShadowMap[m]=st;const Tt=tt.getViewportCount();for(let Mt=0;Mt<Tt;Mt++)n.sunShadowMatrix[M+Mt]=tt.getMatrix(Mt),n.sunShadowCascade[M+Mt]=tt._cascadeData[Mt];M+=Tt,m++}n.sun[f]=J,f++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const tt=I.shadow,nt=e.get(I);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=I.shadow.matrix,b++}n.directional[g]=J,g++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(H).multiplyScalar(Z),J.distance=K,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[v]=J;const tt=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,tt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=tt.matrix,I.castShadow){const nt=e.get(I);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.spotShadow[v]=nt,n.spotShadowMap[v]=st,w++}v++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(H).multiplyScalar(Z),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=J,A++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const tt=I.shadow,nt=e.get(I);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=J,p++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(Z),J.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[S]=J,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==A||D.hemiLength!==S||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==w||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=A,n.point.length=p,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=g,D.pointLength=p,D.spotLength=v,D.rectAreaLength=A,D.hemiLength=S,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=w,D.numSpotMaps=x,D.numLightProbes=C,n.version=z0++)}function l(c,u){let d=0,h=0,f=0,m=0,M=0,g=0;const p=u.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){const S=c[v];if(S.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(S.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const b=n.rectArea[M];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ac(i){const t=new G0(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function H0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ac(i),t.set(s,[o])):r>=a.length?(o=new ac(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,X0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Y0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],oc=new oe,fs=new P,Ma=new P;function q0(i,t,e){let n=new Lo;const s=new Pt,r=new Pt,a=new ve,o=new tf,l=new ef,c={},u=e.maxTextureSize,d={[gi]:Je,[Je]:gi,[nn]:nn},h=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:V0,fragmentShader:W0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Te;m.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ut(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(E,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===bh&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(kn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=p!==this.type;G&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=E.length;I<H;I++){const Z=E[I],K=Z.shadow;if(K===void 0){Ct("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const st=K.getFrameExtents();s.multiply(st),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,K.mapSize.y=r.y));const J=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=J,K.map===null||G===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ds){if(Z.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new vn(s.x,s.y,{format:xi,type:Ln,minFilter:He,magFilter:He,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Ts(s.x,s.y,_n),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=Vn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Oe,K.map.depthTexture.magFilter=Oe}else Z.isPointLight?(K.map=new $c(s.x),K.map.depthTexture=new Yu(s.x,Pn)):(K.map=new vn(s.x,s.y),K.map.depthTexture=new Ts(s.x,s.y,Pn)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=Vn,this.type===cr?(K.map.depthTexture.compareFunction=J?Ao:wo,K.map.depthTexture.minFilter=He,K.map.depthTexture.magFilter=He):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Oe,K.map.depthTexture.magFilter=Oe);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const tt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,x);for(let nt=0;nt<tt;nt++){const Tt=K.getCamera(nt);if(Z.isPointLight){const Mt=K.camera,se=K.matrix,Yt=Z.distance||Mt.far;Yt!==Mt.far&&(Mt.far=Yt,Mt.updateProjectionMatrix()),fs.setFromMatrixPosition(Z.matrixWorld),Mt.position.copy(fs),Ma.copy(Mt.position),Ma.add(X0[nt]),Mt.up.copy(Y0[nt]),Mt.lookAt(Ma),Mt.updateMatrixWorld(),se.makeTranslation(-fs.x,-fs.y,-fs.z),oc.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(oc,Mt.coordinateSystem,Mt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(K.map),i.clear());const Mt=K.getViewport(nt);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),L.viewport(a)}n=K.getFrustum(nt),S(w,x,Tt,Z,this.type)}K.isPointLightShadow!==!0&&this.type===ds&&v(K,x),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,D)};function v(E,w){const x=t.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new vn(s.x,s.y,{format:xi,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,x,f,M,null)}function A(E,w,x,T){let C=null;const D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=C.uuid,G=w.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let H=I[G];H===void 0&&(H=C.clone(),I[G]=H,w.addEventListener("dispose",b)),C=H}if(C.visible=w.visible,C.wireframe=w.wireframe,T===ds?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=i.properties.get(C);L.light=x}return C}function S(E,w,x,T,C){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ds)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const G=t.update(E),I=E.material;if(Array.isArray(I)){const H=G.groups;for(let Z=0,K=H.length;Z<K;Z++){const st=H[Z],J=I[st.materialIndex];if(J&&J.visible){const tt=A(E,J,T,C);E.onBeforeShadow(i,E,w,x,G,tt,st),i.renderBufferDirect(x,null,G,tt,E,st),E.onAfterShadow(i,E,w,x,G,tt,st)}}}else if(I.visible){const H=A(E,I,T,C);E.onBeforeShadow(i,E,w,x,G,H,null),i.renderBufferDirect(x,null,G,H,E,null),E.onAfterShadow(i,E,w,x,G,H,null)}}const L=E.children;for(let G=0,I=L.length;G<I;G++)S(L[G],w,x,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(const x in c){const T=c[x],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function K0(i,t){function e(){let N=!1;const at=new ve;let j=null;const ct=new ve(0,0,0,0);return{setMask:function(pt){j!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){N=pt},setClear:function(pt,rt,wt,bt,de){de===!0&&(pt*=bt,rt*=bt,wt*=bt),at.set(pt,rt,wt,bt),ct.equals(at)===!1&&(i.clearColor(pt,rt,wt,bt),ct.copy(at))},reset:function(){N=!1,j=null,ct.set(-1,0,0,0)}}}function n(){let N=!1,at=!1,j=null,ct=null,pt=null;return{setReversed:function(rt){if(at!==rt){const wt=t.get("EXT_clip_control");rt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),at=rt;const bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return at},setTest:function(rt){rt?et(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(rt){j!==rt&&!N&&(i.depthMask(rt),j=rt)},setFunc:function(rt){if(at&&(rt=iu[rt]),ct!==rt){switch(rt){case Ta:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=rt}},setLocked:function(rt){N=rt},setClear:function(rt){pt!==rt&&(pt=rt,at&&(rt=1-rt),i.clearDepth(rt))},reset:function(){N=!1,j=null,ct=null,pt=null,at=!1}}}function s(){let N=!1,at=null,j=null,ct=null,pt=null,rt=null,wt=null,bt=null,de=null;return{setTest:function(ne){N||(ne?et(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ne){at!==ne&&!N&&(i.stencilMask(ne),at=ne)},setFunc:function(ne,fn,Sn){(j!==ne||ct!==fn||pt!==Sn)&&(i.stencilFunc(ne,fn,Sn),j=ne,ct=fn,pt=Sn)},setOp:function(ne,fn,Sn){(rt!==ne||wt!==fn||bt!==Sn)&&(i.stencilOp(ne,fn,Sn),rt=ne,wt=fn,bt=Sn)},setLocked:function(ne){N=ne},setClear:function(ne){de!==ne&&(i.clearStencil(ne),de=ne)},reset:function(){N=!1,at=null,j=null,ct=null,pt=null,rt=null,wt=null,bt=null,de=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,m=[],M=null,g=!1,p=null,v=null,A=null,S=null,b=null,E=null,w=null,x=new Bt(0,0,0),T=0,C=!1,D=null,L=null,G=null,I=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,st=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=st>=1):J.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=st>=2);let tt=null,nt={};const Tt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),se=new ve().fromArray(Tt),Yt=new ve().fromArray(Mt);function Jt(N,at,j,ct){const pt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(N,rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<j;wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(at+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return rt}const Q={};Q[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ms),Dt(!1),le(il),et(i.CULL_FACE),Zt(kn);function et(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function xt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Rt(N,at){return h[N]!==at?(i.bindFramebuffer(N,at),h[N]=at,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function mt(N,at){let j=m,ct=!1;if(N){j=f.get(at),j===void 0&&(j=[],f.set(at,j));const pt=N.textures;if(j.length!==pt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,wt=pt.length;rt<wt;rt++)j[rt]=i.COLOR_ATTACHMENT0+rt;j.length=pt.length,ct=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ct=!0);ct&&i.drawBuffers(j)}function Ft(N){return M!==N?(i.useProgram(N),M=N,!0):!1}const ue={[Yi]:i.FUNC_ADD,[Th]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};ue[Ah]=i.MIN,ue[Rh]=i.MAX;const Ot={[Ch]:i.ZERO,[Ph]:i.ONE,[Lh]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Ih]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(N,at,j,ct,pt,rt,wt,bt,de,ne){if(N===kn){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),N!==Eh){if(N!==p||ne!==C){if((v!==Yi||b!==Yi)&&(i.blendEquation(i.FUNC_ADD),v=Yi,b=Yi),ne)switch(N){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",N);break}else switch(N){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",N);break}A=null,S=null,E=null,w=null,x.set(0,0,0),T=0,p=N,C=ne}return}pt=pt||at,rt=rt||j,wt=wt||ct,(at!==v||pt!==b)&&(i.blendEquationSeparate(ue[at],ue[pt]),v=at,b=pt),(j!==A||ct!==S||rt!==E||wt!==w)&&(i.blendFuncSeparate(Ot[j],Ot[ct],Ot[rt],Ot[wt]),A=j,S=ct,E=rt,w=wt),(bt.equals(x)===!1||de!==T)&&(i.blendColor(bt.r,bt.g,bt.b,de),x.copy(bt),T=de),p=N,C=!1}function te(N,at){N.side===nn?xt(i.CULL_FACE):et(i.CULL_FACE);let j=N.side===Je;at&&(j=!j),Dt(j),N.blending===_s&&N.transparent===!1?Zt(kn):Zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ct=N.stencilWrite;o.setTest(ct),ct&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Me(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function le(N){N!==Sh?(et(i.CULL_FACE),N!==L&&(N===il?i.cullFace(i.BACK):N===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=N}function we(N){N!==G&&(K&&i.lineWidth(N),G=N)}function Me(N,at,j){N?(et(i.POLYGON_OFFSET_FILL),(I!==at||H!==j)&&(I=at,H=j,a.getReversed()&&(at=-at),i.polygonOffset(at,j))):xt(i.POLYGON_OFFSET_FILL)}function ce(N){N?et(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function _e(N){N===void 0&&(N=i.TEXTURE0+Z-1),tt!==N&&(i.activeTexture(N),tt=N)}function O(N,at,j){j===void 0&&(tt===null?j=i.TEXTURE0+Z-1:j=tt);let ct=nt[j];ct===void 0&&(ct={type:void 0,texture:void 0},nt[j]=ct),(ct.type!==N||ct.texture!==at)&&(tt!==j&&(i.activeTexture(j),tt=j),i.bindTexture(N,at||Q[N]),ct.type=N,ct.texture=at)}function xe(){const N=nt[tt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function zt(){try{i.compressedTexImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function U(){try{i.texStorage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function z(){try{i.texStorage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function B(){try{i.texImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function Y(){try{i.texImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function it(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function gt(N,at){d[N]!==at&&(i.pixelStorei(N,at),d[N]=at)}function lt(N){se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function ot(N){Yt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Yt.copy(N))}function dt(N,at){let j=c.get(at);j===void 0&&(j=new WeakMap,c.set(at,j));let ct=j.get(N);ct===void 0&&(ct=i.getUniformBlockIndex(at,N.name),j.set(N,ct))}function At(N,at){const ct=c.get(at).get(N);l.get(at)!==ct&&(i.uniformBlockBinding(at,ct,N.__bindingPointIndex),l.set(at,ct))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,nt={},h={},f=new WeakMap,m=[],M=null,g=!1,p=null,v=null,A=null,S=null,b=null,E=null,w=null,x=new Bt(0,0,0),T=0,C=!1,D=null,L=null,G=null,I=null,H=null,se.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:xt,bindFramebuffer:Rt,drawBuffers:mt,useProgram:Ft,setBlending:Zt,setMaterial:te,setFlipSided:Dt,setCullFace:le,setLineWidth:we,setPolygonOffset:Me,setScissorTest:ce,activeTexture:_e,bindTexture:O,unbindTexture:xe,compressedTexImage2D:zt,compressedTexImage3D:R,texImage2D:B,texImage3D:Y,pixelStorei:gt,getParameter:it,updateUBOMapping:dt,uniformBlockBinding:At,texStorage2D:U,texStorage3D:z,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:lt,viewport:ot,reset:Lt}}function Z0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,_){return m?new OffscreenCanvas(R,_):Mr("canvas")}function g(R,_,k){let X=1;const $=zt(R);if(($.width>k||$.height>k)&&(X=k/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const U=Math.floor(X*$.width),z=Math.floor(X*$.height);h===void 0&&(h=M(U,z));const B=_?M(U,z):h;return B.width=U,B.height=z,B.getContext("2d").drawImage(R,0,0,U,z),Ct("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+U+"x"+z+")."),B}else return"data"in R&&Ct("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,_,k,X,$,U=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let z;X&&(z=t.get("EXT_texture_norm16"),z||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=_;if(_===i.RED&&(k===i.FLOAT&&(B=i.R32F),k===i.HALF_FLOAT&&(B=i.R16F),k===i.UNSIGNED_BYTE&&(B=i.R8),k===i.UNSIGNED_SHORT&&z&&(B=z.R16_EXT),k===i.SHORT&&z&&(B=z.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(B=i.R8UI),k===i.UNSIGNED_SHORT&&(B=i.R16UI),k===i.UNSIGNED_INT&&(B=i.R32UI),k===i.BYTE&&(B=i.R8I),k===i.SHORT&&(B=i.R16I),k===i.INT&&(B=i.R32I)),_===i.RG&&(k===i.FLOAT&&(B=i.RG32F),k===i.HALF_FLOAT&&(B=i.RG16F),k===i.UNSIGNED_BYTE&&(B=i.RG8),k===i.UNSIGNED_SHORT&&z&&(B=z.RG16_EXT),k===i.SHORT&&z&&(B=z.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(B=i.RG8UI),k===i.UNSIGNED_SHORT&&(B=i.RG16UI),k===i.UNSIGNED_INT&&(B=i.RG32UI),k===i.BYTE&&(B=i.RG8I),k===i.SHORT&&(B=i.RG16I),k===i.INT&&(B=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(B=i.RGB8UI),k===i.UNSIGNED_SHORT&&(B=i.RGB16UI),k===i.UNSIGNED_INT&&(B=i.RGB32UI),k===i.BYTE&&(B=i.RGB8I),k===i.SHORT&&(B=i.RGB16I),k===i.INT&&(B=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),k===i.UNSIGNED_INT&&(B=i.RGBA32UI),k===i.BYTE&&(B=i.RGBA8I),k===i.SHORT&&(B=i.RGBA16I),k===i.INT&&(B=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&z&&(B=z.RGB16_EXT),k===i.SHORT&&z&&(B=z.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),_===i.RGBA){const Y=U?vr:$t.getTransfer($);k===i.FLOAT&&(B=i.RGBA32F),k===i.HALF_FLOAT&&(B=i.RGBA16F),k===i.UNSIGNED_BYTE&&(B=Y===re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&z&&(B=z.RGBA16_EXT),k===i.SHORT&&z&&(B=z.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function b(R,_){let k;return R?_===null||_===Pn||_===ys?k=i.DEPTH24_STENCIL8:_===_n?k=i.DEPTH32F_STENCIL8:_===Ss&&(k=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pn||_===ys?k=i.DEPTH_COMPONENT24:_===_n?k=i.DEPTH_COMPONENT32F:_===Ss&&(k=i.DEPTH_COMPONENT16),k}function E(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==He?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function w(R){const _=R.target;_.removeEventListener("dispose",w),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(R){const _=R.target;_.removeEventListener("dispose",x),D(_)}function T(R){const _=n.get(R);if(_.__webglInit===void 0)return;const k=R.source,X=f.get(k);if(X){const $=X[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(R),Object.keys(X).length===0&&f.delete(k)}n.remove(R)}function C(R){const _=n.get(R);i.deleteTexture(_.__webglTexture);const k=R.source,X=f.get(k);delete X[_.__cacheKey],a.memory.textures--}function D(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let $=0;$<_.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[X][$]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=R.textures;for(let X=0,$=k.length;X<$;X++){const U=n.get(k[X]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(R)}let L=0;function G(){L=0}function I(){return L}function H(R){L=R}function Z(){const R=L;return R>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function K(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function st(R,_){const k=n.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const X=R.image;if(X===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function J(R,_){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xt(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function tt(R,_){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xt(k,R,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function nt(R,_){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Rt(k,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const Tt={[mr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},Mt={[Oe]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},se={[Kh]:i.NEVER,[jh]:i.ALWAYS,[Zh]:i.LESS,[wo]:i.LEQUAL,[Jh]:i.EQUAL,[Ao]:i.GEQUAL,[$h]:i.GREATER,[Qh]:i.NOTEQUAL};function Yt(R,_){if(_.type===_n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===He||_.magFilter===Hr||_.magFilter===Us||_.magFilter===pi||_.minFilter===He||_.minFilter===Hr||_.minFilter===Us||_.minFilter===pi)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Tt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Tt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Tt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Mt[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,se[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Oe||_.minFilter!==Us&&_.minFilter!==pi||_.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",w));const X=_.source;let $=f.get(X);$===void 0&&($={},f.set(X,$));const U=K(_);if(U!==R.__cacheKey){$[U]===void 0&&($[U]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[U].usedTimes++;const z=$[R.__cacheKey];z!==void 0&&($[R.__cacheKey].usedTimes--,z.usedTimes===0&&C(_)),R.__cacheKey=U,R.__webglTexture=$[U].texture}return k}function Q(R,_,k){return Math.floor(Math.floor(R/k)/_)}function et(R,_,k,X){const U=R.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{U.sort((gt,lt)=>gt.start-lt.start);let z=0;for(let gt=1;gt<U.length;gt++){const lt=U[z],ot=U[gt],dt=lt.start+lt.count,At=Q(ot.start,_.width,4),Lt=Q(lt.start,_.width,4);ot.start<=dt+1&&At===Lt&&Q(ot.start+ot.count-1,_.width,4)===At?lt.count=Math.max(lt.count,ot.start+ot.count-lt.start):(++z,U[z]=ot)}U.length=z+1;const B=e.getParameter(i.UNPACK_ROW_LENGTH),Y=e.getParameter(i.UNPACK_SKIP_PIXELS),it=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let gt=0,lt=U.length;gt<lt;gt++){const ot=U[gt],dt=Math.floor(ot.start/4),At=Math.ceil(ot.count/4),Lt=dt%_.width,N=Math.floor(dt/_.width),at=At,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Lt,N,at,j,k,X,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,B),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(i.UNPACK_SKIP_ROWS,it)}}function xt(R,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const $=Jt(R,_),U=_.source;e.bindTexture(X,R.__webglTexture,i.TEXTURE0+k);const z=n.get(U);if(U.version!==z.__version||$===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=$t.getPrimaries($t.workingColorSpace),ct=_.colorSpace===ii?null:$t.getPrimaries(_.colorSpace),pt=_.colorSpace===ii||j===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=g(_.image,!1,s.maxTextureSize);Y=xe(_,Y);const it=r.convert(_.format,_.colorSpace),gt=r.convert(_.type);let lt=S(_.internalFormat,it,gt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(X,_);let ot;const dt=_.mipmaps,At=_.isVideoTexture!==!0,Lt=z.__version===void 0||$===!0,N=U.dataReady,at=E(_,Y);if(_.isDepthTexture)lt=b(_.format===mi,_.type),Lt&&(At?e.texStorage2D(i.TEXTURE_2D,1,lt,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,lt,Y.width,Y.height,0,it,gt,null));else if(_.isDataTexture)if(dt.length>0){At&&Lt&&e.texStorage2D(i.TEXTURE_2D,at,lt,dt[0].width,dt[0].height);for(let j=0,ct=dt.length;j<ct;j++)ot=dt[j],At?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,it,gt,ot.data):e.texImage2D(i.TEXTURE_2D,j,lt,ot.width,ot.height,0,it,gt,ot.data);_.generateMipmaps=!1}else At?(Lt&&e.texStorage2D(i.TEXTURE_2D,at,lt,Y.width,Y.height),N&&et(_,Y,it,gt)):e.texImage2D(i.TEXTURE_2D,0,lt,Y.width,Y.height,0,it,gt,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){At&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,lt,dt[0].width,dt[0].height,Y.depth);for(let j=0,ct=dt.length;j<ct;j++)if(ot=dt[j],_.format!==xn)if(it!==null)if(At){if(N)if(_.layerUpdates.size>0){const pt=zl(ot.width,ot.height,_.format,_.type);for(const rt of _.layerUpdates){const wt=ot.data.subarray(rt*pt/ot.data.BYTES_PER_ELEMENT,(rt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,rt,ot.width,ot.height,1,it,wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,Y.depth,it,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,lt,ot.width,ot.height,Y.depth,0,ot.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,Y.depth,it,gt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,lt,ot.width,ot.height,Y.depth,0,it,gt,ot.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{At&&Lt&&e.texStorage2D(i.TEXTURE_2D,at,lt,dt[0].width,dt[0].height);for(let j=0,ct=dt.length;j<ct;j++)ot=dt[j],_.format!==xn?it!==null?At?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,it,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,j,lt,ot.width,ot.height,0,ot.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,it,gt,ot.data):e.texImage2D(i.TEXTURE_2D,j,lt,ot.width,ot.height,0,it,gt,ot.data)}else if(_.isDataArrayTexture)if(At){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,lt,Y.width,Y.height,Y.depth),N)if(_.layerUpdates.size>0){const j=zl(Y.width,Y.height,_.format,_.type);for(const ct of _.layerUpdates){const pt=Y.data.subarray(ct*j/Y.data.BYTES_PER_ELEMENT,(ct+1)*j/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,Y.width,Y.height,1,it,gt,pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,it,gt,Y.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Y.width,Y.height,Y.depth,0,it,gt,Y.data);else if(_.isData3DTexture)At?(Lt&&e.texStorage3D(i.TEXTURE_3D,at,lt,Y.width,Y.height,Y.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,it,gt,Y.data)):e.texImage3D(i.TEXTURE_3D,0,lt,Y.width,Y.height,Y.depth,0,it,gt,Y.data);else if(_.isFramebufferTexture){if(Lt)if(At)e.texStorage2D(i.TEXTURE_2D,at,lt,Y.width,Y.height);else{let j=Y.width,ct=Y.height;for(let pt=0;pt<at;pt++)e.texImage2D(i.TEXTURE_2D,pt,lt,j,ct,0,it,gt,null),j>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Y.parentNode!==j){j.appendChild(Y),d.add(_),j.onpaint=ct=>{const pt=ct.changedElements;for(const rt of d)pt.includes(rt.image)&&(rt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{const pt=i.RGBA,rt=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,rt,wt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(At&&Lt){const j=zt(dt[0]);e.texStorage2D(i.TEXTURE_2D,at,lt,j.width,j.height)}for(let j=0,ct=dt.length;j<ct;j++)ot=dt[j],At?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,it,gt,ot):e.texImage2D(i.TEXTURE_2D,j,lt,it,gt,ot);_.generateMipmaps=!1}else if(At){if(Lt){const j=zt(Y);e.texStorage2D(i.TEXTURE_2D,at,lt,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it,gt,Y)}else e.texImage2D(i.TEXTURE_2D,0,lt,it,gt,Y);p(_)&&v(X),z.__version=U.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Rt(R,_,k){if(_.image.length!==6)return;const X=Jt(R,_),$=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const U=n.get($);if($.version!==U.__version||X===!0){e.activeTexture(i.TEXTURE0+k);const z=$t.getPrimaries($t.workingColorSpace),B=_.colorSpace===ii?null:$t.getPrimaries(_.colorSpace),Y=_.colorSpace===ii||z===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const it=_.isCompressedTexture||_.image[0].isCompressedTexture,gt=_.image[0]&&_.image[0].isDataTexture,lt=[];for(let rt=0;rt<6;rt++)!it&&!gt?lt[rt]=g(_.image[rt],!0,s.maxCubemapSize):lt[rt]=gt?_.image[rt].image:_.image[rt],lt[rt]=xe(_,lt[rt]);const ot=lt[0],dt=r.convert(_.format,_.colorSpace),At=r.convert(_.type),Lt=S(_.internalFormat,dt,At,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,at=U.__version===void 0||X===!0,j=$.dataReady;let ct=E(_,ot);Yt(i.TEXTURE_CUBE_MAP,_);let pt;if(it){N&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Lt,ot.width,ot.height);for(let rt=0;rt<6;rt++){pt=lt[rt].mipmaps;for(let wt=0;wt<pt.length;wt++){const bt=pt[wt];_.format!==xn?dt!==null?N?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,bt.width,bt.height,dt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Lt,bt.width,bt.height,0,bt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,bt.width,bt.height,dt,At,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Lt,bt.width,bt.height,0,dt,At,bt.data)}}}else{if(pt=_.mipmaps,N&&at){pt.length>0&&ct++;const rt=zt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Lt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(gt){N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,lt[rt].width,lt[rt].height,dt,At,lt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Lt,lt[rt].width,lt[rt].height,0,dt,At,lt[rt].data);for(let wt=0;wt<pt.length;wt++){const de=pt[wt].image[rt].image;N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,de.width,de.height,dt,At,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Lt,de.width,de.height,0,dt,At,de.data)}}else{N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,dt,At,lt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Lt,dt,At,lt[rt]);for(let wt=0;wt<pt.length;wt++){const bt=pt[wt];N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,dt,At,bt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Lt,dt,At,bt.image[rt])}}}p(_)&&v(i.TEXTURE_CUBE_MAP),U.__version=$.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function mt(R,_,k,X,$,U){const z=r.convert(k.format,k.colorSpace),B=r.convert(k.type),Y=S(k.internalFormat,z,B,k.normalized,k.colorSpace),it=n.get(_),gt=n.get(k);if(gt.__renderTarget=_,!it.__hasExternalTextures){const lt=Math.max(1,_.width>>U),ot=Math.max(1,_.height>>U);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,U,Y,lt,ot,_.depth,0,z,B,null):e.texImage2D($,U,Y,lt,ot,0,z,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,gt.__webglTexture,0,ce(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,gt.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){const X=_.depthTexture,$=X&&X.isDepthTexture?X.type:null,U=b(_.stencilBuffer,$),z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(_),U,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(_),U,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,U,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,R)}else{const X=_.textures;for(let $=0;$<X.length;$++){const U=X[$],z=r.convert(U.format,U.colorSpace),B=r.convert(U.type),Y=S(U.internalFormat,z,B,U.normalized,U.colorSpace);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(_),Y,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(R,_,k){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);const it=r.convert(_.depthTexture.format),gt=r.convert(_.depthTexture.type);let lt;_.depthTexture.format===Vn?lt=i.DEPTH_COMPONENT24:_.depthTexture.format===mi&&(lt=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,lt,_.width,_.height,0,it,gt,null)}}else st(_.depthTexture,0);const U=$.__webglTexture,z=ce(_),B=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Y=_.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,B,U,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,Y,B,U,0);else if(_.depthTexture.format===mi)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,B,U,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,Y,B,U,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(R){const _=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=X}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ue(_.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?ue(_.__webglFramebuffer[0],R,0):ue(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Ft(_.__webglDepthbuffer[X],R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,U)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ft(_.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(R,_,k){const X=n.get(R);_!==void 0&&mt(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ot(R)}function te(R){const _=R.texture,k=n.get(R),X=n.get(_);R.addEventListener("dispose",x);const $=R.textures,U=R.isWebGLCubeRenderTarget===!0,z=$.length>1;if(z||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),U){k.__webglFramebuffer=[];for(let B=0;B<6;B++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[B]=[];for(let Y=0;Y<_.mipmaps.length;Y++)k.__webglFramebuffer[B][Y]=i.createFramebuffer()}else k.__webglFramebuffer[B]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let B=0;B<_.mipmaps.length;B++)k.__webglFramebuffer[B]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(z)for(let B=0,Y=$.length;B<Y;B++){const it=n.get($[B]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let B=0;B<$.length;B++){const Y=$[B];k.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[B]);const it=r.convert(Y.format,Y.colorSpace),gt=r.convert(Y.type),lt=S(Y.internalFormat,it,gt,Y.normalized,Y.colorSpace,R.isXRRenderTarget===!0),ot=ce(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,k.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let B=0;B<6;B++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)mt(k.__webglFramebuffer[B][Y],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Y);else mt(k.__webglFramebuffer[B],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);p(_)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(z){for(let B=0,Y=$.length;B<Y;B++){const it=$[B],gt=n.get(it);let lt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,gt.__webglTexture),Yt(lt,it),mt(k.__webglFramebuffer,R,it,i.COLOR_ATTACHMENT0+B,lt,0),p(it)&&v(lt)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(B=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,X.__webglTexture),Yt(B,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)mt(k.__webglFramebuffer[Y],R,_,i.COLOR_ATTACHMENT0,B,Y);else mt(k.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,B,0);p(_)&&v(B),e.unbindTexture()}R.depthBuffer&&Ot(R)}function Dt(R){const _=R.textures;for(let k=0,X=_.length;k<X;k++){const $=_[k];if(p($)){const U=A(R),z=n.get($).__webglTexture;e.bindTexture(U,z),v(U),e.unbindTexture()}}}const le=[],we=[];function Me(R){if(R.samples>0){if(_e(R)===!1){const _=R.textures,k=R.width,X=R.height;let $=i.COLOR_BUFFER_BIT;const U=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=n.get(R),B=_.length>1;if(B)for(let it=0;it<_.length;it++)e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer);const Y=R.texture.mipmaps;Y&&Y.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let it=0;it<_.length;it++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,z.__webglColorRenderbuffer[it]);const gt=n.get(_[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,$,i.NEAREST),l===!0&&(le.length=0,we.length=0,le.push(i.COLOR_ATTACHMENT0+it),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(le.push(U),we.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let it=0;it<_.length;it++){e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,z.__webglColorRenderbuffer[it]);const gt=n.get(_[it]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ce(R){return Math.min(s.maxSamples,R.samples)}function _e(R){const _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(R){const _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function xe(R,_){const k=R.colorSpace,X=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==xr&&k!==ii&&($t.getTransfer(k)===re?(X!==xn||$!==sn)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",k)),_}function zt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=G,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=st,this.setTexture2DArray=J,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=Zt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function J0(i,t){function e(n,s=ii){let r;const a=$t.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===xn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===yo)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===hr||n===ur||n===fr||n===dr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Ga||n===gr||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===Ka||n===Za||n===Ja||n===$a||n===Qa||n===ja||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===_r||n===lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:$0,fragmentShader:Q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tg extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const M=typeof XRWebGLBinding<"u",g=new j0,p={},v=e.getContextAttributes();let A=null,S=null;const b=[],E=[],w=new Pt;let x=null,T=null;const C=new en;C.viewport=new ve;const D=new en;D.viewport=new ve;const L=[C,D],G=new lf;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let et=b[Q];return et===void 0&&(et=new Zr,b[Q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Q){let et=b[Q];return et===void 0&&(et=new Zr,b[Q]=et),et.getGripSpace()},this.getHand=function(Q){let et=b[Q];return et===void 0&&(et=new Zr,b[Q]=et),et.getHandSpace()};function Z(Q){const et=E.indexOf(Q.inputSource);if(et===-1)return;const xt=b[et];xt!==void 0&&(xt.update(Q.inputSource,Q.frame,c||a),xt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",st);for(let Q=0;Q<b.length;Q++){const et=E[Q];et!==null&&(E[Q]=null,b[Q].disconnect(et))}I=null,H=null,g.reset();for(const Q in p)delete p[Q];if(t.setRenderTarget(A),f=null,h=null,d=null,s=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),T!==null){const Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Rt=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=v.stencil?mi:Vn,Rt=v.stencil?ys:Pn);const Ft={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new vn(h.textureWidth,h.textureHeight,{format:xn,type:sn,depthTexture:new Ts(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new vn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(Q){for(let et=0;et<Q.removed.length;et++){const xt=Q.removed[et],Rt=E.indexOf(xt);Rt>=0&&(E[Rt]=null,b[Rt].disconnect(xt))}for(let et=0;et<Q.added.length;et++){const xt=Q.added[et];let Rt=E.indexOf(xt);if(Rt===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=E.length){E.push(xt),Rt=Ft;break}else if(E[Ft]===null){E[Ft]=xt,Rt=Ft;break}if(Rt===-1)break}const mt=b[Rt];mt&&mt.connect(xt)}}const J=new P,tt=new P;function nt(Q,et,xt){J.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(xt.matrixWorld);const Rt=J.distanceTo(tt),mt=et.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,ue=mt[14]/(mt[10]-1),Ot=mt[14]/(mt[10]+1),Zt=(mt[9]+1)/mt[5],te=(mt[9]-1)/mt[5],Dt=(mt[8]-1)/mt[0],le=(Ft[8]+1)/Ft[0],we=ue*Dt,Me=ue*le,ce=Rt/(-Dt+le),_e=ce*-Dt;if(et.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(ce),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),mt[10]===-1)Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const O=ue+ce,xe=Ot+ce,zt=we-_e,R=Me+(Rt-_e),_=Zt*Ot/xe*O,k=te*Ot/xe*O;Q.projectionMatrix.makePerspective(zt,R,_,k,O,xe),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Tt(Q,et){et===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(et.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let et=Q.near,xt=Q.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),G.near=D.near=C.near=et,G.far=D.far=C.far=xt,(I!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,H=G.far),G.layers.mask=Q.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const Rt=Q.parent,mt=G.cameras;Tt(G,Rt);for(let Ft=0;Ft<mt.length;Ft++)Tt(mt[Ft],Rt);mt.length===2?nt(G,C,D):G.projectionMatrix.copy(C.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),Mt(Q,G,Rt)};function Mt(Q,et,xt){xt===null?Q.matrix.copy(et.matrixWorld):(Q.matrix.copy(xt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(et.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Es*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Q){return p[Q]};let se=null;function Yt(Q,et){if(u=et.getViewerPose(c||a),m=et,u!==null){const xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Rt=!1;xt.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let Ot=0;Ot<xt.length;Ot++){const Zt=xt[Ot];let te=null;if(f!==null)te=f.getViewport(Zt);else{const le=d.getViewSubImage(h,Zt);te=le.viewport,Ot===0&&(t.setRenderTargetTextures(S,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(S))}let Dt=L[Ot];Dt===void 0&&(Dt=new en,Dt.layers.enable(Ot),Dt.viewport=new ve,L[Ot]=Dt),Dt.matrix.fromArray(Zt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Zt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(G.matrix.copy(Dt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push(Dt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const Ot=d.getDepthInformation(xt[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,s.renderState)}if(mt&&mt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Ot=0;Ot<xt.length;Ot++){const Zt=xt[Ot].camera;if(Zt){let te=p[Zt];te||(te=new Xc,p[Zt]=te);const Dt=d.getCameraImage(Zt);te.sourceTexture=Dt}}}}for(let xt=0;xt<b.length;xt++){const Rt=E[xt],mt=b[xt];Rt!==null&&mt!==void 0&&mt.update(Rt,et,c||a)}se&&se(Q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const Jt=new Zc;Jt.setAnimationLoop(Yt),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}}const eg=new oe,nh=new Nt;nh.set(-1,0,0,0,1,0,0,0,1);function ng(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,A,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),A=v.envMap,S=v.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ig(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const E=b.program;n.uniformBlockBinding(S,E)}function c(S,b){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",v));const w=b.program;n.updateUBOMapping(S,w);const x=t.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){const b=d();S.__bindingPointIndex=b;const E=i.createBuffer(),w=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=s[S.id],E=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=E.length;x<T;x++){const C=E[x];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)f(C[D],x,D,w);else f(C,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,E,w){if(M(S,b,E,w)===!0){const x=S.__offset,T=S.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){const L=T[D],G=p(L);m(L,S.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function m(S,b,E){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,E)}function M(S,b,E,w){const x=S.value,T=b+"_"+E;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{const C=w[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(S){const b=S.uniforms;let E=0;const w=16;for(let T=0,C=b.length;T<C;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,G=D.length;L<G;L++){const I=D[L],H=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,K=H.length;Z<K;Z++){const st=H[Z],J=p(st),tt=E%w,nt=tt%J.boundary,Tt=tt+nt;E+=nt,Tt!==0&&w-Tt<J.storage&&(E+=w-Tt),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=J.storage}}}const x=E%w;return x>0&&(E+=w-x),S.__size=E,S.__cache={},this}function p(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",S),b}function v(S){const b=S.target;b.removeEventListener("dispose",v);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const sg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function rg(){return En===null&&(En=new Hc(sg,16,16,xi,Ln),En.name="DFG_LUT",En.minFilter=He,En.magFilter=He,En.wrapS=An,En.wrapT=An,En.generateMipmaps=!1,En.needsUpdate=!0),En}class ag{constructor(t={}){const{canvas:e=eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=sn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=f,g=new Set([To,Eo,bo]),p=new Set([sn,Pn,Ss,ys,Mo,So]),v=new Uint32Array(4),A=new Int32Array(4),S=new P;let b=null,E=null;const w=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,L=null,G=null,I=null,H=null;this._outputColorSpace=$e;let Z=0,K=0,st=null,J=-1,tt=null;const nt=new ve,Tt=new ve;let Mt=null;const se=new Bt(0);let Yt=0,Jt=e.width,Q=e.height,et=1,xt=null,Rt=null;const mt=new ve(0,0,Jt,Q),Ft=new ve(0,0,Jt,Q);let ue=!1;const Ot=new Lo;let Zt=!1,te=!1;const Dt=new oe,le=new P,we=new ve,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function _e(){return st===null?et:1}let O=n;function xe(y,F){return e.getContext(y,F)}let zt,R,_,k,X,$,U,z,B,Y,it,gt,lt,ot,dt,At,Lt,N,at,j,ct,pt,rt;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",fn,!1),O===null){const F="webgl2";if(O=xe(F,y),O===null)throw xe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(y){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",fn,!1),jt("WebGLRenderer: "+y.message),y}function wt(){zt=new rm(O),zt.init(),ct=new J0(O,zt),R=new Zp(O,zt,t,ct),_=new K0(O,zt),R.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),G=O.createFramebuffer(),I=O.createFramebuffer(),H=O.createFramebuffer(),k=new lm(O),X=new U0,$=new Z0(O,zt,_,X,R,ct,k),U=new sm(C),z=new hf(O),pt=new qp(O,z),B=new am(O,z,k,pt),Y=new hm(O,B,z,pt,k),N=new cm(O,R,$),dt=new Jp(X),it=new D0(C,U,zt,R,pt,dt),gt=new ng(C,X),lt=new F0,ot=new H0(zt),Lt=new Yp(C,U,_,Y,m,l),At=new q0(C,Y,R),rt=new ig(O,k,R,_),at=new Kp(O,zt,k),j=new om(O,zt,k),k.programs=it.programs,C.capabilities=R,C.extensions=zt,C.properties=X,C.renderLists=lt,C.shadowMap=At,C.state=_,C.info=k}M!==sn&&(T=new fm(M,e.width,e.height,o,s,r));const bt=new tg(C,O);this.xr=bt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(Jt,Q,!1))},this.getSize=function(y){return y.set(Jt,Q)},this.setSize=function(y,F,q=!0){if(bt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=y,Q=F,e.width=Math.floor(y*et),e.height=Math.floor(F*et),q===!0&&(e.style.width=y+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Jt*et,Q*et).floor()},this.setDrawingBufferSize=function(y,F,q){Jt=y,Q=F,et=q,e.width=Math.floor(y*q),e.height=Math.floor(F*q),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(M===sn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(nt)},this.getViewport=function(y){return y.copy(mt)},this.setViewport=function(y,F,q,V){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,F,q,V),_.viewport(nt.copy(mt).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(Ft)},this.setScissor=function(y,F,q,V){y.isVector4?Ft.set(y.x,y.y,y.z,y.w):Ft.set(y,F,q,V),_.scissor(Tt.copy(Ft).multiplyScalar(et).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){_.setScissorTest(ue=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){Rt=y},this.getClearColor=function(y){return y.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,q=!0){let V=0;if(y){let W=!1;if(st!==null){const ft=st.texture.format;W=g.has(ft)}if(W){const ft=st.texture.type,vt=p.has(ft),ut=Lt.getClearColor(),St=Lt.getClearAlpha(),Et=ut.r,kt=ut.g,qt=ut.b;vt?(v[0]=Et,v[1]=kt,v[2]=qt,v[3]=St,O.clearBufferuiv(O.COLOR,0,v)):(A[0]=Et,A[1]=kt,A[2]=qt,A[3]=St,O.clearBufferiv(O.COLOR,0,A))}else V|=O.COLOR_BUFFER_BIT}F&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),L=y},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",fn,!1),Lt.dispose(),lt.dispose(),ot.dispose(),X.dispose(),U.dispose(),Y.dispose(),pt.dispose(),rt.dispose(),it.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ko),bt.removeEventListener("sessionend",Zo),oi.stop()};function de(y){y.preventDefault(),Sr("WebGLRenderer: Context Lost."),D=!0}function ne(){Sr("WebGLRenderer: Context Restored."),D=!1;const y=k.autoReset,F=At.enabled,q=At.autoUpdate,V=At.needsUpdate,W=At.type;wt(),k.autoReset=y,At.enabled=F,At.autoUpdate=q,At.needsUpdate=V,At.type=W}function fn(y){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Sn(y){const F=y.target;F.removeEventListener("dispose",Sn),ph(F)}function ph(y){mh(y),X.remove(y)}function mh(y){const F=X.get(y).programs;F!==void 0&&(F.forEach(function(q){it.releaseProgram(q)}),y.isShaderMaterial&&it.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,q,V,W,ft){F===null&&(F=Me);const vt=W.isMesh&&W.matrixWorld.determinantAffine()<0,ut=xh(y,F,q,V,W);_.setMaterial(V,vt);let St=q.index,Et=1;if(V.wireframe===!0){if(St=B.getWireframeAttribute(q),St===void 0)return;Et=2}const kt=q.drawRange,qt=q.attributes.position;let yt=kt.start*Et,ie=(kt.start+kt.count)*Et;ft!==null&&(yt=Math.max(yt,ft.start*Et),ie=Math.min(ie,(ft.start+ft.count)*Et)),St!==null?(yt=Math.max(yt,0),ie=Math.min(ie,St.count)):qt!=null&&(yt=Math.max(yt,0),ie=Math.min(ie,qt.count));const Ae=ie-yt;if(Ae<0||Ae===1/0)return;pt.setup(W,V,ut,q,St);let me,fe=at;if(St!==null&&(me=z.get(St),fe=j,fe.setIndex(me)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*_e()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(W.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),_.setLineWidth(ze*_e()),W.isLineSegments?fe.setMode(O.LINES):W.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else W.isPoints?fe.setMode(O.POINTS):W.isSprite&&fe.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ze=W._multiDrawStarts,_t=W._multiDrawCounts,We=W._multiDrawCount,Qt=St?z.get(St).bytesPerElement:1,an=X.get(V).currentProgram.getUniforms();for(let yn=0;yn<We;yn++)an.setValue(O,"_gl_DrawID",yn),fe.render(ze[yn]/Qt,_t[yn])}else if(W.isInstancedMesh)fe.renderInstances(yt,Ae,W.count);else if(q.isInstancedBufferGeometry){const ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_t=Math.min(q.instanceCount,ze);fe.renderInstances(yt,Ae,_t)}else fe.render(yt,Ae)};function qo(y,F,q,V){L!==null&&y.isNodeMaterial&&L.setObject(V,y),Zt===!0&&dt.setState(y,q,!1),y.transparent===!0&&y.side===nn&&y.forceSinglePass===!1?(y.side=Je,y.needsUpdate=!0,Ds(y,F,V),y.side=gi,y.needsUpdate=!0,Ds(y,F,V),y.side=nn):Ds(y,F,V)}this.compile=function(y,F,q=null){q===null&&(q=y),L!==null&&L.renderStart(y,F,q),E=ot.get(q),E.init(F),x.push(E),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),y!==q&&y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),te=this.localClippingEnabled,Zt=dt.init(this.clippingPlanes,te),Zt===!0&&dt.setGlobalState(this.clippingPlanes,F),L!==null&&At.render(E.state.shadowsArray,q,F);const V=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ft=W.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){const ut=ft[vt];qo(ut,q,F,W),V.add(ut)}else qo(ft,q,F,W),V.add(ft)}),E=x.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(y,F,q=null){const V=this.compile(y,F,q);return new Promise(W=>{function ft(){if(V.forEach(function(vt){const St=X.get(vt).currentProgram;(St===void 0||St.isReady())&&V.delete(vt)}),V.size===0){W(y);return}setTimeout(ft,10)}zt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Br=null;function gh(y){Br&&Br(y)}function Ko(){oi.stop()}function Zo(){oi.start()}const oi=new Zc;oi.setAnimationLoop(gh),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(y){Br=y,bt.setAnimationLoop(y),y===null?oi.stop():oi.start()},bt.addEventListener("sessionstart",Ko),bt.addEventListener("sessionend",Zo),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(y,F);const q=bt.enabled===!0&&bt.isPresenting===!0,V=T!==null&&(st===null||q)&&T.begin(C,st);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(F),F=bt.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,F,st),E=ot.get(y,x.length),E.init(F),E.state.textureUnits=$.getTextureUnits(),x.push(E),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ot.setFromProjectionMatrix(Dt,Rn,F.reversedDepth),te=this.localClippingEnabled,Zt=dt.init(this.clippingPlanes,te),b=lt.get(y,w.length),b.init(),w.push(b),bt.enabled===!0&&bt.isPresenting===!0){const vt=C.xr.getDepthSensingMesh();vt!==null&&zr(vt,F,-1/0,C.sortObjects)}zr(y,F,0,C.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(xt,Rt),ce=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ce&&Lt.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&dt.beginShadows();const W=E.state.shadowsArray;if(At.render(W,y,F),Zt===!0&&dt.endShadows(),(V&&T.hasRenderPass())===!1){const vt=b.opaque,ut=b.transmissive;if(E.setupLights(),F.isArrayCamera){const St=F.cameras;if(ut.length>0)for(let Et=0,kt=St.length;Et<kt;Et++){const qt=St[Et];$o(vt,ut,y,qt)}ce&&Lt.render(y);for(let Et=0,kt=St.length;Et<kt;Et++){const qt=St[Et];Jo(b,y,qt,qt.viewport)}}else ut.length>0&&$o(vt,ut,y,F),ce&&Lt.render(y),Jo(b,y,F)}st!==null&&K===0&&($.updateMultisampleRenderTarget(st),$.updateRenderTargetMipmap(st)),V&&T.end(C),y.isScene===!0&&y.onAfterRender(C,y,F),pt.resetDefaultState(),J=-1,tt=null,x.pop(),x.length>0?(E=x[x.length-1],$.setTextureUnits(E.state.textureUnits),Zt===!0&&dt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,L!==null&&L.renderEnd()};function zr(y,F,q,V){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ot)){V&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Dt);const vt=Y.update(y),ut=y.material;ut.visible&&b.push(y,vt,ut,q,we.z,null,F)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ot))){const vt=Y.update(y),ut=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),we.copy(vt.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(Dt)),Array.isArray(ut)){const St=vt.groups;for(let Et=0,kt=St.length;Et<kt;Et++){const qt=St[Et],yt=ut[qt.materialIndex];yt&&yt.visible&&b.push(y,vt,yt,q,we.z,qt,F)}}else ut.visible&&b.push(y,vt,ut,q,we.z,null,F)}}const ft=y.children;for(let vt=0,ut=ft.length;vt<ut;vt++)zr(ft[vt],F,q,V)}function Jo(y,F,q,V){const{opaque:W,transmissive:ft,transparent:vt}=y;E.setupLightsView(q),Zt===!0&&dt.setGlobalState(C.clippingPlanes,q),V&&_.viewport(nt.copy(V)),W.length>0&&Is(W,F,q),ft.length>0&&Is(ft,F,q),vt.length>0&&Is(vt,F,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function $o(y,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const yt=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new vn(1,1,{generateMipmaps:!0,type:yt?Ln:sn,minFilter:pi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const ft=E.state.transmissionRenderTarget[V.id],vt=V.viewport||nt;ft.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);const ut=C.getRenderTarget(),St=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(se),Yt=C.getClearAlpha(),Yt<1&&C.setClearColor(16777215,.5),C.clear(),ce&&Lt.render(q);const kt=C.toneMapping;C.toneMapping=Cn;const qt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Zt===!0&&dt.setGlobalState(C.clippingPlanes,V),Is(y,q,V),$.updateMultisampleRenderTarget(ft),$.updateRenderTargetMipmap(ft),zt.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ie=0,Ae=F.length;ie<Ae;ie++){const me=F[ie],{object:fe,geometry:ze,material:_t,group:We}=me;if(_t.side===nn&&fe.layers.test(V.layers)){const Qt=_t.side;_t.side=Je,_t.needsUpdate=!0,Qo(fe,q,V,ze,_t,We),_t.side=Qt,_t.needsUpdate=!0,yt=!0}}yt===!0&&($.updateMultisampleRenderTarget(ft),$.updateRenderTargetMipmap(ft))}C.setRenderTarget(ut,St,Et),C.setClearColor(se,Yt),qt!==void 0&&(V.viewport=qt),C.toneMapping=kt}function Is(y,F,q){const V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ft=y.length;W<ft;W++){const vt=y[W],{object:ut,geometry:St,group:Et}=vt;let kt=vt.material;kt.allowOverride===!0&&V!==null&&(kt=V),ut.layers.test(q.layers)&&Qo(ut,F,q,St,kt,Et)}}function Qo(y,F,q,V,W,ft){L!==null&&W.isNodeMaterial&&L.setObject(y,W),y.onBeforeRender(C,F,q,V,W,ft),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(C,F,q,V,y,ft),W.transparent===!0&&W.side===nn&&W.forceSinglePass===!1?(W.side=Je,W.needsUpdate=!0,C.renderBufferDirect(q,F,V,W,y,ft),W.side=gi,W.needsUpdate=!0,C.renderBufferDirect(q,F,V,W,y,ft),W.side=nn):C.renderBufferDirect(q,F,V,W,y,ft),y.onAfterRender(C,F,q,V,W,ft)}function Ds(y,F,q){F.isScene!==!0&&(F=Me);const V=X.get(y),W=E.state.lights,ft=E.state.shadowsArray,vt=W.state.version,ut=it.getParameters(y,W.state,ft,F,q,E.state.lightProbeGridArray),St=it.getProgramCacheKey(ut);let Et=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const kt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=U.get(y.envMap||V.environment,kt),V.envMapRotation=V.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Et===void 0&&(y.addEventListener("dispose",Sn),Et=new Map,V.programs=Et);let qt=Et.get(St);if(qt!==void 0){if(V.currentProgram===qt&&V.lightsStateVersion===vt)return tl(y,ut),qt}else ut.uniforms=it.getUniforms(y),L!==null&&y.isNodeMaterial&&L.build(y,q,ut),y.onBeforeCompile(ut,C),qt=it.acquireProgram(ut,St),Et.set(St,qt),V.uniforms=ut.uniforms;const yt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=dt.uniform),tl(y,ut),V.needsLights=Mh(y),V.lightsStateVersion=vt,V.needsLights&&(yt.ambientLightColor.value=W.state.ambient,yt.lightProbe.value=W.state.probe,yt.sunLights.value=W.state.sun,yt.sunLightShadows.value=W.state.sunShadow,yt.directionalLights.value=W.state.directional,yt.directionalLightShadows.value=W.state.directionalShadow,yt.spotLights.value=W.state.spot,yt.spotLightShadows.value=W.state.spotShadow,yt.rectAreaLights.value=W.state.rectArea,yt.ltc_1.value=W.state.rectAreaLTC1,yt.ltc_2.value=W.state.rectAreaLTC2,yt.pointLights.value=W.state.point,yt.pointLightShadows.value=W.state.pointShadow,yt.hemisphereLights.value=W.state.hemi,yt.sunShadowMatrix.value=W.state.sunShadowMatrix,yt.sunShadowCascade.value=W.state.sunShadowCascade,yt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,yt.spotLightMatrix.value=W.state.spotLightMatrix,yt.spotLightMap.value=W.state.spotLightMap,yt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=qt,V.uniformsList=null,qt}function jo(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=pr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function tl(y,F){const q=X.get(y);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function _h(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let q=0,V=y.length;q<V;q++){const W=y[q];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function xh(y,F,q,V,W){F.isScene!==!0&&(F=Me),$.resetTextureUnits();const ft=F.fog,vt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,ut=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$t.workingColorSpace,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Et=U.get(V.envMap||vt,St),kt=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!q.morphAttributes.position,ie=!!q.morphAttributes.normal,Ae=!!q.morphAttributes.color;let me=Cn;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(me=C.toneMapping);const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ze=fe!==void 0?fe.length:0,_t=X.get(V),We=E.state.lights;if(Zt===!0&&(te===!0||y!==tt)){const pe=y===tt&&V.id===J;dt.setState(V,y,pe)}let Qt=!1;V.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==We.state.version||_t.outputColorSpace!==ut||W.isBatchedMesh&&_t.batching===!1||!W.isBatchedMesh&&_t.batching===!0||W.isBatchedMesh&&_t.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_t.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_t.instancing===!1||!W.isInstancedMesh&&_t.instancing===!0||W.isSkinnedMesh&&_t.skinning===!1||!W.isSkinnedMesh&&_t.skinning===!0||W.isInstancedMesh&&_t.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_t.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_t.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_t.instancingMorph===!1&&W.morphTexture!==null||_t.envMap!==Et||V.fog===!0&&_t.fog!==ft||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==dt.numPlanes||_t.numIntersection!==dt.numIntersection)||_t.vertexAlphas!==kt||_t.vertexTangents!==qt||_t.morphTargets!==yt||_t.morphNormals!==ie||_t.morphColors!==Ae||_t.toneMapping!==me||_t.morphTargetsCount!==ze||!!_t.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,_t.__version=V.version);let an=_t.currentProgram;Qt===!0&&(an=Ds(V,F,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,an,_t));let yn=!1,qn=!1,Ti=!1;const he=an.getUniforms(),ye=_t.uniforms;if(_.useProgram(an.program)&&(yn=!0,qn=!0,Ti=!0),V.id!==J&&(J=V.id,qn=!0),_t.needsLights){const pe=_h(E.state.lightProbeGridArray,W);_t.lightProbeGrid!==pe&&(_t.lightProbeGrid=pe,qn=!0)}if(yn||tt!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(O,"projectionMatrix",y.projectionMatrix),he.setValue(O,"viewMatrix",y.matrixWorldInverse);const Zn=he.map.cameraPosition;Zn!==void 0&&Zn.setValue(O,le.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&he.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),tt!==y&&(tt=y,qn=!0,Ti=!0)}if(_t.needsLights&&(We.state.sunShadowMap.length>0&&he.setValue(O,"sunShadowMap",We.state.sunShadowMap,$),We.state.directionalShadowMap.length>0&&he.setValue(O,"directionalShadowMap",We.state.directionalShadowMap,$),We.state.spotShadowMap.length>0&&he.setValue(O,"spotShadowMap",We.state.spotShadowMap,$),We.state.pointShadowMap.length>0&&he.setValue(O,"pointShadowMap",We.state.pointShadowMap,$)),W.isSkinnedMesh){he.setOptional(O,W,"bindMatrix"),he.setOptional(O,W,"bindMatrixInverse");const pe=W.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),he.setValue(O,"boneTexture",pe.boneTexture,$))}W.isBatchedMesh&&(he.setOptional(O,W,"batchingTexture"),he.setValue(O,"batchingTexture",W._matricesTexture,$),he.setOptional(O,W,"batchingIdTexture"),he.setValue(O,"batchingIdTexture",W._indirectTexture,$),he.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&he.setValue(O,"batchingColorTexture",W._colorsTexture,$));const Kn=q.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&N.update(W,q,an),(qn||_t.receiveShadow!==W.receiveShadow)&&(_t.receiveShadow=W.receiveShadow,he.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(ye.envMapIntensity.value=F.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=rg()),qn){if(he.setValue(O,"toneMappingExposure",C.toneMappingExposure),_t.needsLights&&vh(ye,Ti),ft&&V.fog===!0&&gt.refreshFogUniforms(ye,ft),gt.refreshMaterialUniforms(ye,V,et,Q,E.state.transmissionRenderTarget[y.id]),_t.needsLights&&_t.lightProbeGrid){const pe=_t.lightProbeGrid;ye.probesSH.value=pe.texture,ye.probesMin.value.copy(pe.boundingBox.min),ye.probesMax.value.copy(pe.boundingBox.max),ye.probesResolution.value.copy(pe.resolution)}pr.upload(O,jo(_t),ye,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pr.upload(O,jo(_t),ye,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(O,"center",W.center),he.setValue(O,"modelViewMatrix",W.modelViewMatrix),he.setValue(O,"normalMatrix",W.normalMatrix),he.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const pe=V.uniformsGroups;for(let Zn=0,wi=pe.length;Zn<wi;Zn++){const nl=pe[Zn];rt.update(nl,an),rt.bind(nl,an)}}return an}function vh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Mh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(y,F,q){const V=X.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=F,X.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const q=X.get(y);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,q=0){st=y,Z=F,K=q;let V=null,W=!1,ft=!1;if(y){const ut=X.get(y);if(ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),nt.copy(y.viewport),Tt.copy(y.scissor),Mt=y.scissorTest,_.viewport(nt),_.scissor(Tt),_.setScissorTest(Mt),J=-1;return}else if(ut.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(ut.__hasExternalTextures)$.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const kt=y.depthTexture;if(ut.__boundDepthTexture!==kt){if(kt!==null&&X.has(kt)&&(y.width!==kt.image.width||y.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const St=y.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ft=!0);const Et=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Et[F])?V=Et[F][q]:V=Et[F],W=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?V=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Et)?V=Et[q]:V=Et,nt.copy(y.viewport),Tt.copy(y.scissor),Mt=y.scissorTest}else nt.copy(mt).multiplyScalar(et).floor(),Tt.copy(Ft).multiplyScalar(et).floor(),Mt=ue;if(q!==0&&(V=G),_.bindFramebuffer(O.FRAMEBUFFER,V)&&_.drawBuffers(y,V),_.viewport(nt),_.scissor(Tt),_.setScissorTest(Mt),W){const ut=X.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ut.__webglTexture,q)}else if(ft){const ut=F;for(let St=0;St<y.textures.length;St++){const Et=X.get(y.textures[St]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+St,Et.__webglTexture,q,ut)}}else if(y!==null&&q!==0){const ut=X.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,q)}J=-1};function el(y){const F=X.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=R.textureFormatReadable(y.format),F.__typeReadable=R.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,q,V,W,ft,vt,ut=0){if(!(y&&y.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){_.bindFramebuffer(O.FRAMEBUFFER,St);try{const Et=y.textures[ut],kt=Et.format,qt=Et.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);const yt=el(Et);if(yt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-V&&q>=0&&q<=y.height-W&&O.readPixels(F,q,V,W,ct.convert(kt),ct.convert(qt),ft)}finally{const Et=st!==null?X.get(st).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(y,F,q,V,W,ft,vt,ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(F>=0&&F<=y.width-V&&q>=0&&q<=y.height-W){_.bindFramebuffer(O.FRAMEBUFFER,St);const Et=y.textures[ut],kt=Et.format,qt=Et.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);const yt=el(Et);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(F,q,V,W,ct.convert(kt),ct.convert(qt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ae=st!==null?X.get(st).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Ae);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await nu(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ie),O.deleteSync(me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,q=0){const V=Math.pow(2,-q),W=Math.floor(y.image.width*V),ft=Math.floor(y.image.height*V),vt=F!==null?F.x:0,ut=F!==null?F.y:0;$.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,vt,ut,W,ft),_.unbindTexture()},this.copyTextureToTexture=function(y,F,q=null,V=null,W=0,ft=0){let vt,ut,St,Et,kt,qt,yt,ie,Ae;const me=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(q!==null)vt=q.max.x-q.min.x,ut=q.max.y-q.min.y,St=q.isBox3?q.max.z-q.min.z:1,Et=q.min.x,kt=q.min.y,qt=q.isBox3?q.min.z:0;else{const ye=Math.pow(2,-W);vt=Math.floor(me.width*ye),ut=Math.floor(me.height*ye),y.isDataArrayTexture?St=me.depth:y.isData3DTexture?St=Math.floor(me.depth*ye):St=1,Et=0,kt=0,qt=0}V!==null?(yt=V.x,ie=V.y,Ae=V.z):(yt=0,ie=0,Ae=0);const fe=ct.convert(F.format),ze=ct.convert(F.type);let _t;F.isData3DTexture?($.setTexture3D(F,0),_t=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),_t=O.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),_t=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const We=_.getParameter(O.UNPACK_ROW_LENGTH),Qt=_.getParameter(O.UNPACK_IMAGE_HEIGHT),an=_.getParameter(O.UNPACK_SKIP_PIXELS),yn=_.getParameter(O.UNPACK_SKIP_ROWS),qn=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Et),_.pixelStorei(O.UNPACK_SKIP_ROWS,kt),_.pixelStorei(O.UNPACK_SKIP_IMAGES,qt);const Ti=y.isDataArrayTexture||y.isData3DTexture,he=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const ye=X.get(y),Kn=X.get(F),pe=X.get(ye.__renderTarget),Zn=X.get(Kn.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,pe.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let wi=0;wi<St;wi++)Ti&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(y).__webglTexture,W,qt+wi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(F).__webglTexture,ft,Ae+wi)),O.blitFramebuffer(Et,kt,vt,ut,yt,ie,vt,ut,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||X.has(y)){const ye=X.get(y),Kn=X.get(F);_.bindFramebuffer(O.READ_FRAMEBUFFER,I),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let pe=0;pe<St;pe++)Ti?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.__webglTexture,W,qt+pe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,W),he?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kn.__webglTexture,ft,Ae+pe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kn.__webglTexture,ft),W!==0?O.blitFramebuffer(Et,kt,vt,ut,yt,ie,vt,ut,O.COLOR_BUFFER_BIT,O.NEAREST):he?O.copyTexSubImage3D(_t,ft,yt,ie,Ae+pe,Et,kt,vt,ut):O.copyTexSubImage2D(_t,ft,yt,ie,Et,kt,vt,ut);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else he?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(_t,ft,yt,ie,Ae,vt,ut,St,fe,ze,me.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(_t,ft,yt,ie,Ae,vt,ut,St,fe,me.data):O.texSubImage3D(_t,ft,yt,ie,Ae,vt,ut,St,fe,ze,me):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,yt,ie,vt,ut,fe,ze,me.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,yt,ie,me.width,me.height,fe,me.data):O.texSubImage2D(O.TEXTURE_2D,ft,yt,ie,vt,ut,fe,ze,me);_.pixelStorei(O.UNPACK_ROW_LENGTH,We),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt),_.pixelStorei(O.UNPACK_SKIP_PIXELS,an),_.pixelStorei(O.UNPACK_SKIP_ROWS,yn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,qn),ft===0&&F.generateMipmaps&&O.generateMipmap(_t),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){Z=0,K=0,st=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class og{constructor(){this.boxes=[],this.bounds={minX:-100,maxX:100,minZ:-170,maxZ:100},this.grid=new Map,this.cell=20}add(t,e,n,s,r,a=0,o=null){const l={minX:t,maxX:e,minZ:n,maxZ:s,top:r,bottom:a,tag:o};this.boxes.push(l);const c=this.cell;for(let u=Math.floor(t/c);u<=Math.floor(e/c);u++)for(let d=Math.floor(n/c);d<=Math.floor(s/c);d++){const h=u*1e3+d;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(l)}return l}near(t,e,n){const s=this.cell,r=new Set;for(let a=Math.floor((t-n)/s);a<=Math.floor((t+n)/s);a++)for(let o=Math.floor((e-n)/s);o<=Math.floor((e+n)/s);o++){const l=this.grid.get(a*1e3+o);if(l)for(const c of l)r.add(c)}return r}groundAt(t,e,n,s,r=.55){let a=0;for(const o of this.near(t,e,n))t+n*.6<o.minX||t-n*.6>o.maxX||e+n*.6<o.minZ||e-n*.6>o.maxZ||o.top<=s+r&&o.top>a&&(a=o.top);return a}resolve(t,e,n,s=.55){let r=!1;for(const o of this.near(t.x,t.z,e)){if(t.y>=o.top-s||t.y+n<=o.bottom)continue;const l=Math.max(o.minX,Math.min(t.x,o.maxX)),c=Math.max(o.minZ,Math.min(t.z,o.maxZ));let u=t.x-l,d=t.z-c;const h=u*u+d*d;if(!(h>=e*e))if(r=!0,h>1e-8){const f=Math.sqrt(h),m=(e-f)/f;t.x+=u*m,t.z+=d*m}else{const f=t.x-o.minX,m=o.maxX-t.x,M=t.z-o.minZ,g=o.maxZ-t.z,p=Math.min(f,m,M,g);p===f?t.x=o.minX-e:p===m?t.x=o.maxX+e:p===M?t.z=o.minZ-e:t.z=o.maxZ+e}}const a=this.bounds;return t.x<a.minX+e&&(t.x=a.minX+e,r=!0),t.x>a.maxX-e&&(t.x=a.maxX-e,r=!0),t.z<a.minZ+e&&(t.z=a.minZ+e,r=!0),t.z>a.maxZ-e&&(t.z=a.maxZ-e,r=!0),r}raycast(t,e,n,s,r,a,o=0){let l=1;const c=s-t,u=r-e,d=a-n,h=(t+s)/2,f=(n+a)/2,m=Math.hypot(c,d)/2+1;for(const M of this.near(h,f,m)){if(M.top<o)continue;let g=0,p=l;const v=[[t,c,M.minX,M.maxX],[e,u,M.bottom,M.top],[n,d,M.minZ,M.maxZ]];let A=!0;for(const[S,b,E,w]of v){if(Math.abs(b)<1e-9){if(S<E||S>w){A=!1;break}continue}let x=(E-S)/b,T=(w-S)/b;if(x>T&&([x,T]=[T,x]),g=Math.max(g,x),p=Math.min(p,T),g>p){A=!1;break}}A&&g<l&&(l=g)}return l}}const Sa=new Map;function Ei(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Xn(i,t=!0){const e=new Xu(i);return t&&(e.colorSpace=$e),e.anisotropy=2,e}function Yn(i,t){return Sa.has(i)||Sa.set(i,t()),Sa.get(i)}const Ir=()=>Yn("glow",()=>{const[i,t]=Ei(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Xn(i)}),Oo=()=>Yn("ring",()=>{const[i,t]=Ei(128,128),e=t.createRadialGradient(64,64,30,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.15)"),e.addColorStop(.9,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Xn(i)}),ih=()=>Yn("blob",()=>{const[i,t]=Ei(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Xn(i)});function lc(i,t,e,n,s,r){const a=[[0,1],[.42,.86],[-.42,.86],[.9,.62],[-.9,.62],[1.35,.34],[-1.35,.34]];i.save(),i.translate(t,e);for(const[o,l]of a){i.save(),i.rotate(o);const c=n*l,u=n*.15*(.6+l*.4);i.beginPath(),i.moveTo(0,0);const d=9;for(let h=1;h<=d;h++){const f=h/d,m=Math.sin(f*Math.PI)*u*(1-f*.25);i.lineTo(m+(h%2?u*.12:0),-c*f)}for(let h=d-1;h>=1;h--){const f=h/d,m=Math.sin(f*Math.PI)*u*(1-f*.25);i.lineTo(-m-(h%2?u*.12:0),-c*f)}i.closePath(),i.fillStyle=s,i.fill(),r&&(i.strokeStyle=r,i.lineWidth=n*.02,i.stroke()),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-c*.95),i.strokeStyle="rgba(20,90,30,.85)",i.lineWidth=n*.018,i.stroke(),i.restore()}i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(n*.04,n*.3,-n*.04,n*.5),i.strokeStyle=s,i.lineWidth=n*.05,i.stroke(),i.restore()}const lg=()=>Yn("emblem",()=>{const[i,t]=Ei(256,256),e=t.createRadialGradient(128,120,10,128,120,128);return e.addColorStop(0,"rgba(140,255,120,.28)"),e.addColorStop(1,"rgba(60,255,90,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),t.shadowColor="#8bff6a",t.shadowBlur=16,lc(t,128,150,112,"#5fe85a","#c8ffb0"),t.shadowBlur=0,lc(t,128,150,112,"rgba(80,215,80,.95)","#e2ffd0"),Xn(i)});function Bo(i,t){const[e,n]=Ei(512,256);n.fillStyle=i,n.fillRect(0,0,512,256);const s=128,r=n.createRadialGradient(s,140,20,s,140,130);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,512,256),[e,n,s]}const cg=()=>Yn("cbface",()=>{const[i,t,e]=Bo("#d9a27c","rgba(120,60,40,.35)");t.fillStyle="rgba(150,80,55,.35)",t.beginPath(),t.ellipse(e,146,7,14,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(230,120,110,.18)";for(const n of[-1,1])t.beginPath(),t.ellipse(e+n*30,152,13,8,0,0,6.3),t.fill();t.beginPath(),t.moveTo(e,108),t.bezierCurveTo(e+20,96,e+44,94,e+70,102),t.lineTo(e+80,110),t.bezierCurveTo(e+70,134,e+48,148,e+24,142),t.bezierCurveTo(e+12,138,e+6,132,e,134),t.bezierCurveTo(e-6,132,e-12,138,e-24,142),t.bezierCurveTo(e-48,148,e-70,134,e-80,110),t.lineTo(e-70,102),t.bezierCurveTo(e-44,94,e-20,96,e,108),t.closePath(),t.fillStyle="#2f8a3a",t.fill(),t.lineWidth=3,t.strokeStyle="#123d18",t.stroke(),t.fillStyle="rgba(160,255,140,.25)",t.beginPath(),t.ellipse(e-30,112,18,3,0,0,6.3),t.ellipse(e+30,112,18,3,0,0,6.3),t.fill(),t.strokeStyle="#4a2c18",t.lineWidth=4;for(const n of[-1,1])t.beginPath(),t.moveTo(e+n*14,96),t.quadraticCurveTo(e+n*34,88,e+n*56,94),t.stroke();return t.fillStyle="#5a1f1a",t.beginPath(),t.moveTo(e-30,164),t.quadraticCurveTo(e,186,e+30,164),t.quadraticCurveTo(e,170,e-30,164),t.fill(),t.fillStyle="#fbfaf3",t.beginPath(),t.moveTo(e-26,165),t.quadraticCurveTo(e,178,e+26,165),t.quadraticCurveTo(e,169,e-26,165),t.fill(),t.strokeStyle="rgba(120,50,40,.6)",t.lineWidth=2,t.beginPath(),t.moveTo(e-33,162),t.quadraticCurveTo(e,188,e+33,162),t.stroke(),t.fillStyle="#4a2a16",t.beginPath(),t.moveTo(e-7,182),t.lineTo(e+7,182),t.lineTo(e+5,190),t.lineTo(e-5,190),t.fill(),t.beginPath(),t.moveTo(e-26,190),t.quadraticCurveTo(e,186,e+26,190),t.quadraticCurveTo(e+20,214,e,228),t.quadraticCurveTo(e-20,214,e-26,190),t.fill(),Xn(i)}),hg=()=>Yn("ampface",()=>{const[i,t,e]=Bo("#8a5636","rgba(40,15,10,.45)");t.fillStyle="rgba(60,25,15,.4)",t.beginPath(),t.ellipse(e,146,7,14,0,0,6.3),t.fill();for(const n of[-1,1]){const s=t.createRadialGradient(e+n*28,122,2,e+n*28,122,22);s.addColorStop(0,"rgba(255,90,230,.95)"),s.addColorStop(1,"rgba(255,40,200,0)"),t.fillStyle=s,t.fillRect(e+n*28-24,100,48,44),t.strokeStyle="#1a0a10",t.lineWidth=5,t.beginPath(),t.moveTo(e+n*10,112),t.lineTo(e+n*46,104),t.stroke()}return t.fillStyle="#3a0d12",t.beginPath(),t.moveTo(e-28,162),t.quadraticCurveTo(e+4,186,e+34,156),t.quadraticCurveTo(e+4,170,e-28,162),t.fill(),t.fillStyle="#f6f2ea",t.beginPath(),t.moveTo(e-24,163),t.quadraticCurveTo(e+4,177,e+30,158),t.quadraticCurveTo(e+4,168,e-24,163),t.fill(),t.fillStyle="rgba(30,12,8,.35)",t.fillRect(e-40,196,80,30),Xn(i)});function zo(i,t="stressed"){return Yn("npc"+i+t,()=>{const[e,n,s]=Bo(i,"rgba(40,20,20,.35)");n.fillStyle="#1b1010";for(const r of[-1,1])n.beginPath(),n.ellipse(s+r*24,124,5,6,0,0,6.3),n.fill();n.strokeStyle="#2a1510",n.lineWidth=3;for(const r of[-1,1])n.beginPath(),n.moveTo(s+r*12,106),n.lineTo(s+r*34,112),n.stroke();return n.beginPath(),n.ellipse(s,168,10,7,0,0,6.3),n.fillStyle="#3a1010",n.fill(),Xn(e)})}function ug(i,t,e="rgba(0,0,0,0)",n=256,s=64){return Yn("sign"+i+t+n+s,()=>{const[r,a]=Ei(n,s);return a.fillStyle=e,a.fillRect(0,0,n,s),a.font=`900 ${Math.floor(s*.62)}px "Trebuchet MS", sans-serif`,a.textAlign="center",a.textBaseline="middle",a.shadowColor=t,a.shadowBlur=s*.25,a.strokeStyle=t,a.lineWidth=s*.06,a.strokeRect(s*.08,s*.08,n-s*.16,s-s*.16),a.fillStyle="#fff",a.fillText(i,n/2,s/2+2),a.shadowBlur=s*.12,a.fillStyle=t,a.globalAlpha=.55,a.fillText(i,n/2,s/2+2),Xn(r)})}const fg=()=>Yn("ground",()=>{const[i,t]=Ei(256,256);t.fillStyle="#17141f",t.fillRect(0,0,256,256);for(let n=0;n<1400;n++){const s=18+Math.random()*18;t.fillStyle=`rgb(${s},${s-2},${s+8})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}const e=Xn(i);return e.wrapS=e.wrapT=mr,e});function dg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Te;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=cc(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let M=0;M<a[u].length;++M)f.push(a[u][M][h]);const m=cc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function cc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new un(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let m=0;m<e;m++){const M=u.getComponent(h,m);o.setComponent(h+d,m,M)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const hc=["hips","spine","chest","neck","head","armL","armR","foreL","foreR","handL","handR","legL","legR","shinL","shinR","footL","footR"];function Vt(i,t={}){const{selfLit:e,...n}=t,s=new Rs({color:i,...n});return e&&s.emissive.set(i).multiplyScalar(e),s}function Ke(i){return new Ue({color:i,toneMapped:!1})}function Fe(i,t,e=.8){const n=new Rr(new ws({map:Ir(),color:i,transparent:!0,opacity:e,blending:hn,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(t),n}function zn(i,t={}){const{selfLit:e,...n}=t,s=new Rs({color:16777215,...n});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjP = position;`);const a=i+(i.includes("suitGlow")?"":`
vec3 suitGlow(vec3 p){ return vec3(0.0); }
`)+`
vec3 selfLit(vec3 p){ return suitColor(p) * ${(t.selfLit??0).toFixed(3)}; }
`;r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObjP;
`+a).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( diffuse * suitColor(vObjP), opacity );").replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive + suitGlow(vObjP) + selfLit(vObjP);")},s.customProgramCacheKey=()=>i+(t.selfLit??0),s}const lr=(i,t,e=16)=>new As(i,t,6,e);function di(i,t,e,n=1){const s=new As(i,e,6,16),r=s.attributes.position,a=e/2+i;for(let o=0;o<r.count;o++){const l=r.getY(o),c=(a-l)/(2*a),u=ho.lerp(1,t/i,c)*(1+(n-1)*Math.sin(Math.PI*Math.min(1,c*1.4)));r.setX(o,r.getX(o)*u),r.setZ(o,r.getZ(o)*u)}return s.computeVertexNormals(),s}function It(i,t,e=0,n=0,s=0,r){const a=new Ut(i,t);return a.position.set(e,n,s),r&&r.add(a),a}function Cs(i){const t=i.scale||1,e=i.bulk||1,n=new Be,s=new Be;s.scale.setScalar(t),n.add(s);const r={},a=(b,E,w,x,T)=>{const C=new Ce;return C.name=b,C.position.set(w,x,T),E.add(C),r[b]=C,C},o=i.colors;a("hips",s,0,.98,0),a("spine",r.hips,0,.08,0),a("chest",r.spine,0,.2,0),a("neck",r.chest,0,.3,0),a("head",r.neck,0,.1,0);const c=(i.shoulderW||.25)*e;a("armL",r.chest,c,.22,0),a("armR",r.chest,-c,.22,0),a("foreL",r.armL,0,-.3,0),a("foreR",r.armR,0,-.3,0),a("handL",r.foreL,0,-.27,0),a("handR",r.foreR,0,-.27,0),a("legL",r.hips,.1*e,-.04,0),a("legR",r.hips,-.1*e,-.04,0),a("shinL",r.legL,0,-.45,0),a("shinR",r.legR,0,-.45,0),a("footL",r.shinL,0,-.44,0),a("footR",r.shinR,0,-.44,0);const u=It(di(.15*e,.13*e,.08,.95),o.pelvis,0,.02,0,r.hips);u.scale.set(1.1,1,.8);const d=It(di(.14*e,.13*e,.12,1),o.torso,0,.09,0,r.spine);d.scale.set(1.04,1,.76);const h=lr(.19*e,.2,20);{const b=h.attributes.position,E=i.taper||1;for(let w=0;w<b.count;w++){const x=b.getX(w),T=b.getY(w),C=b.getZ(w),D=ho.lerp(E,1,ho.smoothstep(T,-.29,.14)),L=C>0?1+(i.pecs||0)*Math.exp(-((T-.07)**2)/.006)*Math.exp(-((Math.abs(x)-.08)**2)/.01):1;b.setXYZ(w,x*D,T,C*(.86+.14*D)*L)}h.computeVertexNormals()}const f=It(h,o.torso,0,.12,0,r.chest);f.scale.set(1.2,1,.74);const m=i.deltoid||.095,M=It(lr(m*.8*e,c*2-.08,14),o.shoulder||o.torso,0,.2,-.01,r.chest);M.rotation.z=Math.PI/2,It(di(.056*e,.06*e,.08,1),o.neck||o.skin,0,.05,0,r.neck);for(const b of["L","R"]){It(new ge(m*e,16,12),o.shoulder||o.upperArm,0,-.03,0,r["arm"+b]).scale.set(1,1.05,.95),It(di(.07*e,.056*e,.2,1.08),o.upperArm,0,-.15,0,r["arm"+b]),It(di(.058*e,.044*e,.18,1.08),o.glove,0,-.13,0,r["fore"+b]);const w=It(new ge(.05*e,12,10),o.glove,0,-.06,.005,r["hand"+b]);w.scale.set(.95,1.35,.6),w.name="hand";const x=It(lr(.017,.04,8),o.glove,(b==="L"?-1:1)*-.04,-.035,.02,r["hand"+b]);x.rotation.z=(b==="L"?-1:1)*.5,It(di(.095*e,.066*e,.29,1.06),o.thigh,0,-.21,0,r["leg"+b]),It(di(.066*e,.05*e,.3,1.12),o.shin,0,-.21,0,r["shin"+b]);const T=It(lr(.05*e,.13,12),o.boot,0,-.03,.05,r["foot"+b]);T.rotation.x=Math.PI/2,T.scale.set(1.05,1,.75),T.name="foot"}const g=.135,p=new Rs({map:i.head.tex});i.selfLit&&(p.emissive.set(16777215).multiplyScalar(i.selfLit*.9),p.emissiveMap=i.head.tex);const v=It(new ge(g,32,24),p,0,.1,.005,r.head);v.scale.set(.95,i.head.scaleY||1.14,1),v.rotation.y=0,v.name="headMesh";const A=It(new vi(.018,.045,6),o.skinMat,0,-.01,.132,v);A.rotation.x=Math.PI/2-.5,A.scale.set(1.1,1,.8);for(const b of[-1,1])It(new ge(.03,6,6),o.skinMat,b*.13,0,0,v).scale.set(.5,1,.8);const S={root:n,body:s,j:r,head:v,headR:g,parts:{torso:f,pelvis:u,abdomen:d},S:t};return i.extras?.(S),S.root.traverse(b=>{b.isMesh&&(b.frustumCulled=!0)}),S}function mo(i,t,e){const n=Math.PI/2+e;return new P(-Math.cos(n)*Math.sin(t)*i,Math.cos(t)*i,Math.sin(n)*Math.sin(t)*i)}function pg(i){const t=i.map(({from:e,dir:n,len:s,wave:r,r:a,phase:o})=>{const l=[],u=new P(n.z,0,-n.x).normalize();for(let d=0;d<=10;d++){const h=d/10,f=e.clone().addScaledVector(n,s*h).addScaledVector(u,Math.sin(h*7+o)*r*h);l.push(f)}return mg(new Ku(l),20,a,6)});return dg(t)}function mg(i,t,e,n){const s=i.computeFrenetFrames(t,!1),r=[],a=[];for(let l=0;l<=t;l++){const c=l/t,u=i.getPointAt(c),d=e*(.75+.45*Math.sin(Math.PI*Math.min(1,c*1.6+.2)))*(1-.7*c*c);for(let h=0;h<n;h++){const f=h/n*Math.PI*2,m=s.normals[l].clone().multiplyScalar(Math.cos(f)).addScaledVector(s.binormals[l],Math.sin(f)*.55);r.push(u.x+m.x*d,u.y+m.y*d,u.z+m.z*d)}}for(let l=0;l<t;l++)for(let c=0;c<n;c++){const u=l*n+c,d=l*n+(c+1)%n,h=u+n,f=d+n;a.push(u,h,d,d,h,f)}const o=new Te;return o.setAttribute("position",new ee(r,3)),o.setIndex(a),o.computeVertexNormals(),o}class Ps{constructor(t){this.rig=t,this.cur={};for(const e of hc)this.cur[e]=[0,0,0];this.hipY=0,this.lift=0,this.t=0}apply(t,e,n=14){const s=1-Math.exp(-n*e);for(const r of hc){const a=t[r]||gg,o=this.cur[r];o[0]+=(a[0]-o[0])*s,o[1]+=(a[1]-o[1])*s,o[2]+=(a[2]-o[2])*s,this.rig.j[r].rotation.set(o[0],o[1],o[2])}this.hipY+=((t.hipY||0)-this.hipY)*s,this.lift+=((t.lift||0)-this.lift)*s,this.rig.j.hips.position.y=.98+this.hipY,this.rig.body.position.y=this.lift}}const gg=[0,0,0],Ye=Math.sin,ya=Math.cos,Ht={idle(i){const t=Ye(i*2.2)*.03;return{spine:[t,0,0],chest:[t,0,0],neck:[-t,0,0],armL:[.05,0,.14],armR:[.05,0,-.14],foreL:[-.18,0,0],foreR:[-.18,0,0],legL:[0,0,.03],legR:[0,0,-.03],hipY:-.01+t*.1}},run(i,t){const e=i*(8+t*3),n=.35+t*.6,s=Ye(e),r=ya(e);return{spine:[.12*t,Ye(e)*.1,0],chest:[.06*t,-s*.18*t,0],neck:[-.12*t,s*.1,0],head:[0,0,0],legL:[-s*n,0,.02],legR:[s*n,0,-.02],shinL:[Math.max(0,-r)*(.5+n)+.1,0,0],shinR:[Math.max(0,r)*(.5+n)+.1,0,0],footL:[.1,0,0],footR:[.1,0,0],armL:[s*n*.9,0,.12],armR:[-s*n*.9,0,-.12],foreL:[-.6-t*.6,0,0],foreR:[-.6-t*.6,0,0],hipY:-Math.abs(r)*.05*t}},jump(i,t){const e=t>0;return{spine:[.1,0,0],legL:[e?-.9:-.4,0,.05],legR:[e?-.2:-.6,0,-.05],shinL:[e?1.3:.6,0,0],shinR:[e?.5:.9,0,0],armL:[e?-.6:.2,0,.9],armR:[e?-.6:.2,0,-.9],foreL:[-.4,0,0],foreR:[-.4,0,0]}},strike1(i,t){const e=t<.3?t/.3:1-(t-.3)/.7*.6;return{spine:[.1,.2*e,0],chest:[0,.45*e,0],armR:[-1.5*e,0,-.2],foreR:[-.15,0,0],handR:[.6*e,0,0],armL:[-.4,0,.35],foreL:[-1.6,0,0],legL:[-.5,0,.05],shinL:[.4,0,0],legR:[.3,0,-.05],shinR:[.2,0,0],hipY:-.06}},strike2(i,t){const e=t<.3?t/.3:1-(t-.3)/.7*.6;return{spine:[.1,-.2*e,0],chest:[0,-.45*e,0],armL:[-1.5*e,0,.2],foreL:[-.15,0,0],handL:[.6*e,0,0],armR:[-.4,0,-.35],foreR:[-1.6,0,0],legR:[-.5,0,-.05],shinR:[.4,0,0],legL:[.3,0,.05],shinL:[.2,0,0],hipY:-.06}},strike3(i,t){const e=t<.4?t/.4:1,n=t<.4?1-e:0;return{spine:[.15-n*.3,0,0],armL:[-1.45*e+n*.6,0,.15],armR:[-1.45*e+n*.6,0,-.15],foreL:[-.1-n,0,0],foreR:[-.1-n,0,0],handL:[.9*e,0,0],handR:[.9*e,0,0],legL:[-.7,0,.1],shinL:[.5,0,0],legR:[.5,0,-.1],shinR:[.3,0,0],hipY:-.12,lift:Ye(t*Math.PI)*.25}},blast(i,t){const e=Math.min(1,t/.25);return{chest:[0,.35,0],armR:[-1.55*e,0,-.05],foreR:[0,0,0],handR:[.8,0,0],armL:[.2,0,.5],foreL:[-1,0,0],legL:[-.35,0,.05],shinL:[.3,0,0],legR:[.25,0,0],hipY:-.04}},field(i){const t=Ye(i*4)*.05;return{spine:[-.08,0,0],neck:[-.15,0,0],armL:[-.3,0,1.35+t],armR:[-.3,0,-1.35-t],foreL:[-.2,0,.2],foreR:[-.2,0,-.2],handL:[0,0,.6],handR:[0,0,-.6],legL:[-.1,0,.12],legR:[-.1,0,-.12],shinL:[.25,0,0],shinR:[.25,0,0],footL:[.4,0,0],footR:[.4,0,0],lift:.25+t}},five(i){const t=Ye(i*2)*.05;return{spine:[0,0,0],neck:[.1,0,0],legL:[-1.45,.6,.55],legR:[-1.45,-.6,-.55],shinL:[2.3,0,0],shinR:[2.3,0,0],footL:[0,0,0],footR:[0,0,0],armL:[-.35,0,.4],armR:[-.35,0,-.4],foreL:[-.9,0,0],foreR:[-.9,0,0],handL:[0,-1.2,0],handR:[0,1.2,0],hipY:-.5,lift:.35+t}},hit(i,t){const e=1-t;return{spine:[-.35*e,0,0],neck:[-.3*e,0,0],armL:[-.5*e,0,.6],armR:[-.5*e,0,-.6],foreL:[-.8,0,0],foreR:[-.8,0,0],legL:[-.2,0,0],shinL:[.3,0,0]}},stressed(i,t,e=0){const n=Ye(i*13+e)*.08;return{spine:[.15,n,0],neck:[.2,Ye(i*9+e)*.35,0],armL:[-2.6,0,.5],armR:[-2.6,0,-.5],foreL:[-2,0,0],foreR:[-2,0,0],legL:[0,0,.05],legR:[0,0,-.05],hipY:Math.abs(n)*-.1}},sit(i){const t=Ye(i*1.5)*.02;return{spine:[-.15+t,0,0],chest:[t,0,0],neck:[.1,0,0],legL:[-1.5,0,.12],legR:[-1.5,0,-.12],shinL:[.2,0,0],shinR:[.2,0,0],armL:[.2,0,.25],armR:[.2,0,-.25],foreL:[-.6,0,0],foreR:[-.6,0,0],hipY:-.78}},windup(i,t){return{spine:[-.15,.3,0],chest:[0,.3,0],armR:[-.4,0,-1.6],foreR:[-1.6,0,0],armL:[-.6,0,.4],foreL:[-1.2,0,0],legL:[-.4,0,0],shinL:[.3,0,0],legR:[.3,0,0],hipY:-.06}},punch(i,t){return{spine:[.2,-.35,0],chest:[0,-.4,0],armR:[-1.55,0,-.1],foreR:[-.1,0,0],armL:[-.3,0,.4],foreL:[-1.4,0,0],legL:[-.6,0,0],shinL:[.4,0,0],legR:[.4,0,0],hipY:-.08}},charge(i,t){const e=i*16;return{spine:[.55,0,0],neck:[-.4,0,0],armL:[.9,0,.3],armR:[.9,0,-.3],foreL:[-.5,0,0],foreR:[-.5,0,0],legL:[-Ye(e)*1,0,0],legR:[Ye(e)*1,0,0],shinL:[Math.max(0,-ya(e))*1.4,0,0],shinR:[Math.max(0,ya(e))*1.4,0,0]}},slam(i,t){const e=t<.55;return{spine:[e?-.3:.6,0,0],armL:[e?-3:-1.2,0,.2],armR:[e?-3:-1.2,0,-.2],foreL:[-.3,0,0],foreR:[-.3,0,0],legL:[-.5,0,.2],legR:[-.5,0,-.2],shinL:[.6,0,0],shinR:[.6,0,0],hipY:e?0:-.2}},dazed(i){return{spine:[.3,Ye(i*3)*.2,0],neck:[.5,Ye(i*4)*.4,0],armL:[.2,0,.3],armR:[.2,0,-.3],legL:[-.3,0,.1],legR:[-.3,0,-.1],shinL:[.6,0,0],shinR:[.6,0,0],hipY:-.15}},hype(i,t){const e=Math.min(1,t/.3);return{chest:[-.1,-.4*e,0],armR:[-1.6*e,.3,-.1],foreR:[-.1,0,0],handR:[.4,0,0],armL:[-.2,0,.6],foreL:[-1.8,0,0],neck:[-.1,.2,0],legL:[-.3,0,0],legR:[.3,0,0]}},taunt(i){const t=Ye(i*3);return{chest:[-.1,t*.15,0],neck:[-.2,t*.2,0],armL:[-.5,0,1.1+t*.2],armR:[-.5,0,-1.1-t*.2],foreL:[-1.2,0,0],foreR:[-1.2,0,0],lift:.05}},overdrive(i){const t=Ye(i*30)*.05;return{spine:[-.25,0,0],neck:[-.4,0,0],armL:[-2.9,0,.6+t],armR:[-2.9,0,-.6-t],foreL:[-.2,0,0],foreR:[-.2,0,0],legL:[-.2,0,.3],legR:[-.2,0,-.3],lift:.4}}},Kt={spawn:new P(0,0,88),blocksX:[-75,-25,25,75],blocksZ:[75,25,-25,-75],half:18,park:{x:25,z:-25},roofBlock:{x:-75,z:-25},towerPlaza:new P(0,0,-132),tower:new P(0,0,-156),hotspots:[{id:"h1",name:"Noodle Row",pos:new P(-50,0,50),kind:"street"},{id:"h2",name:"Bass Alley",pos:new P(50,0,0),kind:"street"},{id:"h3",name:"Rooftop Relay",pos:new P(-75,9,-25),kind:"roof"}]};function _g(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function uc(){const i=new Rs({color:16777215});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vec4 wp4 = modelMatrix * instanceMatrix * vec4(transformed,1.0); vWP = wp4.xyz; vWN = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }`).replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive;
      if (abs(vWN.y) < 0.5) {
        float u = abs(vWN.x) > 0.5 ? vWP.z : vWP.x;
        vec2 cell = floor(vec2(u/2.4, vWP.y/3.2)); vec2 f = fract(vec2(u/2.4, vWP.y/3.2));
        float win = step(0.3,f.x)*step(f.x,0.7)*step(0.35,f.y)*step(f.y,0.72)*step(3.0, vWP.y);
        float hs = h21(cell + floor(vWN.xz*3.0) + floor(vWP.xz/40.0)*7.0);
        vec3 wc = hs > 0.9 ? vec3(1.0,0.25,0.85) : (hs > 0.78 ? vec3(0.2,0.9,1.0) : vec3(1.0,0.75,0.45));
        totalEmissiveRadiance += win * step(0.45, hs) * wc * 0.6;
        float store = step(vWP.y,2.6)*step(0.6,vWP.y)*step(0.1,f.x)*step(f.x,0.9);
        totalEmissiveRadiance += store * (h21(cell*1.3)>0.5 ? vec3(0.1,0.5,0.6) : vec3(0.5,0.15,0.45)) * 0.16;
      }`)},i}function xg(i,t,e){const n=_g(7),s={animated:[],signs:[],mapRects:[],tower:null,core:null,sprout:null},r=e==="low"?0:e==="medium"?1:2,a=new Ut(new ge(400,24,12),new Mn({side:Je,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 c = mix(vec3(0.16,0.04,0.22), vec3(0.01,0.0,0.04), smoothstep(-0.05,0.5,h)); c += vec3(0.0,0.12,0.18)*pow(1.0-abs(h),8.0); gl_FragColor = vec4(c,1.0); }"}));a.renderOrder=-1,i.add(a),s.sky=a;const o=new Te,l=[];for(let U=0;U<400;U++){const z=n()*Math.PI*2,B=.15+n()*1.2;l.push(Math.cos(z)*Math.cos(B)*380,Math.sin(B)*380,Math.sin(z)*Math.cos(B)*380)}o.setAttribute("position",new ee(l,3)),i.add(new Wu(o,new Vc({color:12577023,size:1.6,sizeAttenuation:!1,fog:!1})));const c=Fe(14221296,60,.9);c.position.set(-150,160,-260),c.material.fog=!1,i.add(c);const u=fg();u.repeat.set(60,70);const d=new Ut(new Qe(260,300),new Rs({map:u,color:10130096}));d.rotation.x=-Math.PI/2,d.position.set(0,0,-35),i.add(d);const h=new Qe(.25,2.6);h.rotateX(-Math.PI/2);const f=[];for(const U of[-100,-50,0,50,100])for(let z=-100;z<=100;z+=6)f.push([U,z,0]);for(const U of[-100,-50,0,50,100])for(let z=-100;z<=100;z+=6)f.push([z,U,Math.PI/2]);const m=new On(h,new Ue({color:9075264}),f.length),M=new oe,g=new Si,p=new P,v=new P(1,1,1);f.forEach(([U,z,B],Y)=>{g.setFromAxisAngle(new P(0,1,0),B),M.compose(p.set(U,.02,z),g,v),m.setMatrixAt(Y,M)}),i.add(m);const A=[],S=[],b=(U,z,B,Y,it,gt)=>{A.push({cx:U,cz:z,w:B,d:Y,h:it,color:gt}),t.add(U-B/2,U+B/2,z-Y/2,z+Y/2,it),s.mapRects.push([U-B/2,z-Y/2,B,Y,it])},E=[2761792,3156552,2367283,3813199,2042428,2826806];for(const U of Kt.blocksX)for(const z of Kt.blocksZ){const B=Kt.half;if(S.push([U,z,B*2+3,B*2+3]),!(U===Kt.park.x&&z===Kt.park.z)){if(U===Kt.roofBlock.x&&z===Kt.roofBlock.z){b(U-4,z,24,26,9,2959940),b(U+12.5,z+6,9,12,4.6,3485773),b(U+12.5,z-8,9,10,14,2498872);continue}for(const[Y,it]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const gt=15+n()*2,lt=15+n()*2,dt=n()<.18?5+n()*1.5:10+n()*(Math.abs(z)>60?18:26);b(U+Y*8.6,z+it*8.6,gt,lt,dt,E[Math.floor(n()*E.length)])}}}for(const U of[-1,1])for(let z=-112;z>-170;z-=18)b(U*(52+n()*6),z,22,16,18+n()*30,E[Math.floor(n()*E.length)]);const w=new Ee(1,1,1);w.translate(0,.5,0);const x=new On(w,uc(),A.length),T=new Bt;A.forEach((U,z)=>{M.compose(p.set(U.cx,0,U.cz),g.identity(),v.set(U.w,U.h,U.d)),x.setMatrixAt(z,M),x.setColorAt(z,T.set(U.color))}),i.add(x),s.buildings=x,s.lots=A;const C=[];A.forEach((U,z)=>{n()<.65&&C.push(U)});const D=new On(new Ee(1,1,1),new Ue({color:16777215,toneMapped:!1}),C.length*4);let L=0;v.set(1,1,1);for(const U of C){const z=n()<.5?2287359:16722902;for(const[B,Y,it,gt]of[[U.cx,U.cz-U.d/2,U.w,.2],[U.cx,U.cz+U.d/2,U.w,.2],[U.cx-U.w/2,U.cz,.2,U.d],[U.cx+U.w/2,U.cz,.2,U.d]])M.compose(p.set(B,U.h+.1,Y),g.identity(),v.set(it,.2,gt)),D.setMatrixAt(L,M),D.setColorAt(L++,T.set(z))}i.add(D);const G=new On(new Ee(1,1,1),Vt(3880272),S.length);S.forEach(([U,z,B,Y],it)=>{M.compose(p.set(U,.09,z),g.identity(),v.set(B,.18,Y)),G.setMatrixAt(it,M),t.add(U-B/2,U+B/2,z-Y/2,z+Y/2,.18)}),i.add(G);const I=[],H=(U,z,B,Y,it,gt=4147802)=>{I.push({x:U,z,w:B,d:Y,h:it,c:gt}),t.add(U-B/2,U+B/2,z-Y/2,z+Y/2,it),s.mapRects.push([U-B/2,z-Y/2,B,Y,it])};H(-75+12.5,-25+13.3,4,2.4,1.7,3107402),H(-75+12.5,-25+16.2,2,2,.9,5917234),H(-75+11.5,-25+2.5,2.4,2.4,6.8,4868698);for(let U=0;U<14;U++){const z=Kt.blocksX[U%4],B=Kt.blocksZ[U*3%4];z===Kt.park.x&&B===Kt.park.z||H(z+(n()-.5)*30,B+19.6,1.4,1.4,1.1,5917234)}const Z=new On(new Ee(1,1,1),Vt(16777215),I.length);I.forEach((U,z)=>{M.compose(p.set(U.x,U.h/2,U.z),g.identity(),v.set(U.w,U.h,U.d)),Z.setMatrixAt(z,M),Z.setColorAt(z,T.set(U.c))}),i.add(Z);const K=new Be;K.position.copy(Kt.hotspots[2].pos).setY(9),i.add(K);const st=new Ut(new ln(.15,.3,6,6),Vt(2761270));st.position.y=3,K.add(st);const J=new Ut(new $i(.9,.08,6,18),Ke(16722902));J.position.y=5.2,K.add(J),t.add(K.position.x-.35,K.position.x+.35,K.position.z-.35,K.position.z+.35,15),s.relay={group:K,dish:J},s.animated.push(U=>{J.rotation.y=U*2,J.rotation.x=Math.sin(U)*.4});const tt=Kt.park,nt=new Ut(new br(17,40),Vt(2767412));nt.rotation.x=-Math.PI/2,nt.position.set(tt.x,.2,tt.z),i.add(nt);const Tt=new Ut(new Er(16.6,17,48),Ke(2287359));Tt.rotation.x=-Math.PI/2,Tt.position.set(tt.x,.22,tt.z),i.add(Tt);for(let U=0;U<6;U++){const z=U/6*Math.PI*2,B=tt.x+Math.cos(z)*12,Y=tt.z+Math.sin(z)*12,it=new Ut(new Ee(2.4,.5,.8),Vt(4864554));it.position.set(B,.45,Y),it.rotation.y=-z,i.add(it)}const Mt=[];for(const U of[-50,0,50])for(let z=-90;z<=90;z+=30)Mt.push([U+6.5,z],[U-6.5,z+15]);const se=new ln(.08,.12,6,5);se.translate(0,3,0);const Yt=new On(se,Vt(2236458),Mt.length),Jt=new On(new ge(.3,8,6),new Ue({color:16777215,toneMapped:!1}),Mt.length),Q=new On(new Qe(9,9).rotateX(-Math.PI/2),new Ue({map:Ir(),color:16777215,transparent:!0,opacity:.22,blending:hn,depthWrite:!1}),Mt.length);Mt.forEach(([U,z],B)=>{M.compose(p.set(U,0,z),g.identity(),v.set(1,1,1)),Yt.setMatrixAt(B,M),M.compose(p.set(U,6,z),g.identity(),v.set(1,1,1)),Jt.setMatrixAt(B,M),M.compose(p.set(U,.21+B*5e-4,z),g.identity(),v.set(1,1,1)),Q.setMatrixAt(B,M);const Y=B%3===0?16734944:5958399;Jt.setColorAt(B,T.set(Y)),Q.setColorAt(B,T.set(Y))}),i.add(Yt,Jt,Q);const et=[["CHILL",3800954],["NOODLES",2287359],["ARCADE",16722902],["24/7",2287359],["ZEN TEA",3800954],["LOFI",16722902],["RAMEN",16722902],["JAZZ",2287359],["VIBES",3800954],["KARAOKE",16722902],["OVERDRIVE",16722902],["HYPE!",16722902]],xt=r===0?22:40;for(let U=0;U<xt;U++){const z=A[Math.floor(n()*A.length)];if(z.h<6)continue;const[B,Y]=et[U%et.length],it=n()<.35,gt=ug(B,"#"+Y.toString(16).padStart(6,"0"),"rgba(6,2,14,.85)",it?64:256,it?256:64),lt=it?1.4:5.6,ot=it?5.6:1.4,dt=new Ut(new Qe(lt,ot),new Ue({map:gt,transparent:!0,toneMapped:!1})),At=Math.floor(n()*4),Lt=4+n()*Math.min(10,z.h-6),N=(n()-.5)*.6;if(At===0?dt.position.set(z.cx+N*z.w,Lt,z.cz+z.d/2+.06):At===1?(dt.position.set(z.cx+N*z.w,Lt,z.cz-z.d/2-.06),dt.rotation.y=Math.PI):At===2?(dt.position.set(z.cx+z.w/2+.06,Lt,z.cz+N*z.d),dt.rotation.y=Math.PI/2):(dt.position.set(z.cx-z.w/2-.06,Lt,z.cz+N*z.d),dt.rotation.y=-Math.PI/2),i.add(dt),s.signs.push(dt),r>0){const at=Fe(Y,Math.max(lt,ot)*1.3,.22);at.position.copy(dt.position),i.add(at)}if(n()<.3){const at=n()*10;s.animated.push(j=>{dt.material.opacity=Math.sin(j*7+at)>-.85?1:.35})}}const Rt=new Be;Rt.position.set(0,0,96),i.add(Rt);const mt=new Ut(new ln(1.2,1.4,.8,10),Vt(2761270));mt.position.y=.4,Rt.add(mt),t.add(-1.3,1.3,94.7,97.3,.8);for(let U=0;U<7;U++){const z=-1.3+U*.43,B=new Ut(new vi(.18,1.6,4),Ke(3800954));B.position.set(Math.sin(z)*.5,1.5+Math.cos(z)*.4,0),B.rotation.z=-z,Rt.add(B)}const Ft=Fe(3800954,6,.5);Ft.position.y=1.6,Rt.add(Ft),s.sprout=Rt,s.animated.push(U=>{Ft.material.opacity=.4+Math.sin(U*2)*.12});const ue=Kt.tower,Ot=Kt.towerPlaza,Zt=new Ut(new br(26,48),Vt(2365998));Zt.rotation.x=-Math.PI/2,Zt.position.set(Ot.x,.03,Ot.z),i.add(Zt);const te=new Ut(new Er(25.4,26,64),Ke(16722902));te.rotation.x=-Math.PI/2,te.position.set(Ot.x,.05,Ot.z),i.add(te),s.plazaRing=te;const Dt=new Be;Dt.position.copy(ue),i.add(Dt);const le=Vt(1708580),we=[[9,7,10],[7,5.5,14],[5.5,4,16],[4,2.5,18],[2.5,1.2,14]];let Me=0;const ce=[];for(const[U,z,B]of we){const Y=new Ut(new ln(z,U,B,8),le);Y.position.y=Me+B/2,Dt.add(Y);const it=new Ut(new $i(z+.4,.18,6,32),Ke(16722902));it.rotation.x=Math.PI/2,it.position.y=Me+B,Dt.add(it),ce.push(it),Me+=B}const _e=new Ut(new ln(.1,.4,12,6),le);_e.position.y=Me+6,Dt.add(_e);const O=new Ut(new ge(1.8,16,12),Ke(16722902));O.position.y=Me+12,Dt.add(O);const xe=Fe(16722902,22,.6);xe.position.y=Me+12,xe.material.fog=!1,Dt.add(xe),t.add(ue.x-9,ue.x+9,ue.z-9,ue.z+9,10);const zt=new Be;zt.position.set(ue.x,0,ue.z+11),i.add(zt);const R=new Ut(new ln(1.4,1.8,1.2,10),le);R.position.y=.6,zt.add(R),t.add(zt.position.x-1.6,zt.position.x+1.6,zt.position.z-1.6,zt.position.z+1.6,1.2);const _=new Ut(new Do(1.1,1),Ke(16722902));_.position.y=2.6,zt.add(_);const k=Fe(16722902,6,.6);k.position.y=2.6,zt.add(k),s.core={group:zt,orb:_,glow:k},s.tower={group:Dt,rings:ce,beacon:O,bglow:xe,top:Me+12},s.setTowerCalm=U=>{const z=new Bt(16722902).lerp(new Bt(3800954),U);for(const B of ce)B.material.color.copy(z);O.material.color.copy(z),xe.material.color.copy(z),te.material.color.copy(z),_.material.color.copy(z),k.material.color.copy(z)},s.animated.push(U=>{ce.forEach((z,B)=>{z.rotation.z=U*(.5+B*.2),z.position.y+=0}),xe.scale.setScalar(20+Math.sin(U*3)*3),_.rotation.y=U,_.rotation.x=U*.7});const X=[];for(let U=0;U<70;U++){const z=U/70*Math.PI*2,B=180+n()*60;X.push([Math.cos(z)*B,Math.sin(z)*B-30,14+n()*20,20+n()*70])}const $=new On(w,uc(),X.length);return X.forEach(([U,z,B,Y],it)=>{M.compose(p.set(U,0,z),g.identity(),v.set(B,Y,B)),$.setMatrixAt(it,M),$.setColorAt(it,T.set(1709608))}),i.add($),s.update=U=>{for(const z of s.animated)z(U)},s}function vg(i,t){const e=document.createElement("canvas"),n=2,s=t.bounds;e.width=(s.maxX-s.minX)*n,e.height=(s.maxZ-s.minZ)*n;const r=e.getContext("2d");r.fillStyle="#120c22",r.fillRect(0,0,e.width,e.height);for(const[a,o,l,c,u]of i.mapRects)r.fillStyle=u>8?"#3a3260":"#4e4580",r.fillRect((a-s.minX)*n,(o-s.minZ)*n,l*n,c*n);return r.strokeStyle="#ff2bd6",r.lineWidth=3,r.beginPath(),r.arc((Kt.towerPlaza.x-s.minX)*n,(Kt.towerPlaza.z-s.minZ)*n,26*n,0,Math.PI*2),r.stroke(),r.strokeStyle="#22e6ff",r.beginPath(),r.arc((Kt.park.x-s.minX)*n,(Kt.park.z-s.minZ)*n,17*n,0,Math.PI*2),r.stroke(),{canvas:e,scale:n}}class Mg{constructor(t,e){this.scene=t,this.parts=[],this.max=e==="low"?60:140,this.pool=[];for(let n=0;n<this.max;n++){const s=new Rr(new ws({map:Ir(),transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1}));s.visible=!1,t.add(s),this.pool.push({s,life:0,v:new P,max:1,size:1})}this.rings=[]}burst(t,e,n=12,s=4,r=.5,a=.6,o=2){for(let l=0;l<n;l++){const c=this.pool.find(u=>u.life<=0);if(!c)return;c.s.visible=!0,c.s.position.copy(t),c.s.material.color.set(e),c.life=c.max=a*(.6+Math.random()*.6),c.size=r*(.6+Math.random()*.8),c.v.set((Math.random()-.5)*2,Math.random()*o/Math.max(s,.01)+.2,(Math.random()-.5)*2).normalize().multiplyScalar(s*(.5+Math.random()))}}ring(t,e,n,s,r,a=.15){const o=new Ut(new Qe(1,1).rotateX(-Math.PI/2),new Ue({map:Oo(),color:e,transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1}));o.position.copy(t),o.position.y=t.y+a,this.scene.add(o),this.rings.push({m:o,r0:n,r1:s,t:0,dur:r})}update(t){for(const e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.s.visible=!1;continue}e.s.position.addScaledVector(e.v,t),e.v.multiplyScalar(1-2*t),e.v.y+=1.5*t;const n=e.life/e.max;e.s.material.opacity=n,e.s.scale.setScalar(e.size*(.5+n*.5))}for(let e=this.rings.length-1;e>=0;e--){const n=this.rings[e];n.t+=t;const s=n.t/n.dur,r=(n.r0+(n.r1-n.r0)*s)*2;n.m.scale.set(r,1,r),n.m.material.opacity=1-s,s>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.rings.splice(e,1))}}}class Sg{constructor(t){this.scene=t,this.list=[],this.geo=new ge(1,10,8)}spawn(t){const e=new Ut(this.geo,Ke(t.color));e.scale.setScalar(t.size||.3);const n=new Rr(new ws({map:Ir(),color:t.color,transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1}));n.scale.setScalar((t.size||.3)*6),e.add(n),n.scale.divideScalar(t.size||.3),e.position.copy(t.pos),this.scene.add(e);const s={...t,mesh:e,vel:t.dir.clone().multiplyScalar(t.speed),age:0,dead:!1};return this.list.push(s),s}kill(t){t.dead=!0,this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.children[0].material.dispose()}clear(){for(const t of this.list)t.dead||this.kill(t);this.list=[]}}function yg(i){const t=new Be,e=new Ut(new ge(1,20,10,0,Math.PI*2,0,Math.PI/2),new Ue({color:i,transparent:!0,opacity:.16,blending:hn,depthWrite:!1,side:nn,toneMapped:!1})),n=new Ut(new Qe(2,2).rotateX(-Math.PI/2),new Ue({map:Oo(),color:i,transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1}));return n.position.y=.12,t.add(e,n),t.visible=!1,t.userData={dome:e,ring:n},t}const Bn=new P,bg={meleeCombo(i,t,e){const n={idx:-1,t:0,active:!1,queued:!1,sinceEnd:9,hitDone:!1};return n.press=()=>{if(!(t.busy()&&!n.active)){if(n.active){n.queued=!0;return}n.start(n.sinceEnd<i.comboWindow?(n.idx+1)%i.hits.length:0)}},n.start=s=>{n.idx=s,e.stats.comboSeq=(e.stats.comboSeq||"").slice(-8)+(s+1),n.t=0,n.active=!0,n.queued=!1,n.hitDone=!1,t.faceTarget();const r=i.hits[s];t.action={pose:r.pose,k:0},e.sfx.play("whoosh")},n.update=s=>{if(n.sinceEnd+=s,!n.active)return;const r=i.hits[n.idx];if(n.t+=s,t.action.k=n.t/r.dur,n.t<r.at){const a=t.aimTarget(4.5);if(a){Bn.subVectors(a.pos,t.pos).setY(0);const o=Bn.length()-a.radius-t.radius-.6;o>0&&t.pushVel(Bn.normalize(),Math.min(r.lunge,o/s))}}if(!n.hitDone&&n.t>=r.at){n.hitDone=!0;let a=!1;for(const o of e.targets()){Bn.subVectors(o.pos,t.pos);const l=Math.abs(o.pos.y+(o.centerY||1)-(t.pos.y+1));Bn.y=0;const c=Bn.length();c>r.range+o.radius||l>(o.reachY||1.8)||Math.abs(si(Math.atan2(Bn.x,Bn.z),t.facing))>r.arc/2&&c>o.radius+.6||(o.calmHit(r.stress,{knock:r.knock||1.5,stagger:r.stagger||.18,dir:Bn.normalize(),kind:"melee"}),a=!0,e.fx.burst(o.pos.clone().setY(o.pos.y+(o.centerY||1)),8257418,8,5,.5))}a&&(t.addChill(i.chillGain),e.panic=Math.max(0,e.panic-(i.panicRelief||0)),e.sfx.play(r.sfx),e.hitstop(.04),r.whoosh&&e.popup("WHOOSH!",t.pos,!0))}n.t>=r.dur&&(n.active=!1,n.sinceEnd=0,t.action=null,n.queued&&n.start((n.idx+1)%i.hits.length))},n.cancel=()=>{n.active=!1,n.queued=!1,t.action&&i.hits.some(s=>s.pose===t.action.pose)&&(t.action=null)},n.busy=()=>n.active,n},projectile(i,t,e){const n={cd:0,t:0,active:!1};return n.press=()=>{if(n.cd>0||t.busy())return;if(t.chill<i.cost){e.flashButton("blast");return}t.chill-=i.cost,n.cd=i.cooldown,n.active=!0,n.t=0,t.faceTarget(),t.action={pose:i.pose,k:0};const s=new P(Math.sin(t.facing),0,Math.cos(t.facing)),r=t.aimTarget(40),a=t.pos.clone().add(new P(0,1.4,0)).addScaledVector(s,.8);r?s.subVectors(r.pos.clone().setY(r.pos.y+(r.centerY||1)),a).normalize():(s.y=Math.sin(-e.cam.pitch*.5)*.3,s.normalize()),e.proj.spawn({pos:a,dir:s,speed:i.speed,color:i.color,size:.32,owner:"player",stress:i.stress,splash:i.splash,life:i.life,homing:i.homing,target:r,stagger:i.stagger}),e.sfx.play("blast")},n.update=s=>{n.cd=Math.max(0,n.cd-s),n.active&&(n.t+=s,t.action.k=n.t/.3,n.t>.3&&(n.active=!1,t.action=null))},n.cancel=()=>{n.active=!1},n.busy=()=>n.active,n.cdFrac=()=>n.cd/i.cooldown,n},aura(i,t,e){const n={on:!1,t:0,mesh:yg(i.color)};return e.scene.add(n.mesh),n.press=()=>{if(t.kit.strike.cancel(),t.kit.blast.cancel(),t.kit.five.cancel?.(),!(t.hitT>0&&!n.on)){if(t.chill<i.minCost){e.flashButton("field");return}n.on=!0,n.t=0,e.sfx.play("field"),e.popup("WHOOSH!",t.pos),e.fx.ring(t.pos,i.color,.5,i.radius,.4)}},n.release=()=>{n.on&&(n.on=!1,n.mesh.visible=!1,t.action=null)},n.update=(s,r)=>{if(!n.on)return;if(!r){n.release();return}if(n.t+=s,t.chill-=i.drain*s,e.panic=Math.max(0,e.panic-(i.panicPerSec||0)*s),t.chill<=0){t.chill=0,n.release();return}t.action={pose:i.pose,k:0};const a=i.radius*Math.min(1,n.t*5);n.mesh.visible=!0,n.mesh.position.copy(t.pos),n.mesh.userData.dome.scale.set(a,a*.6,a),n.mesh.userData.ring.scale.setScalar(a),n.mesh.userData.dome.material.opacity=.12+Math.sin(n.t*10)*.04;for(const o of e.targets())o.pos.distanceTo(t.pos)<a+o.radius&&o.fieldTick(i.stressPerSec*s,s)},n.cancel=n.release,n.busy=()=>n.on,n.blocks=()=>n.on&&i.blocksPulses,n},channelRestore(i,t,e){const n={on:!1,t:0};return n.press=()=>{t.busy()||!t.grounded||(n.on=!0,n.t=0,e.sfx.play("five"))},n.release=s=>{if(n.on&&(n.on=!1,t.action=null,!s&&n.t>=i.pulseAfter)){e.fx.ring(t.pos,10354554,.5,i.pulseRadius,.6),e.popup("WHOOSH!",t.pos,!0),e.sfx.play("calm");for(const r of e.targets())r.pos.distanceTo(t.pos)<i.pulseRadius+r.radius&&r.calmHit(i.pulseStress,{knock:3,stagger:.5,dir:r.pos.clone().sub(t.pos).setY(0).normalize(),kind:"pulse"})}},n.update=(s,r)=>{if(!(!n.on&&(r&&t.grounded&&!t.busy()&&n.press(),!n.on))){if(!r){n.release(!1);return}n.t+=s,t.action={pose:i.pose,k:0},t.addChill(i.chillPerSec*s),e.panic=Math.max(0,e.panic-i.panicPerSec*s),Math.random()<s*14&&e.fx.burst(t.pos.clone().setY(t.pos.y+1.2),7208810,1,1.2,.4,1,3)}},n.cancel=()=>n.release(!0),n.busy=()=>n.on,n},multiJump(i,t,e){return{press:()=>t.tryJump(),update(){},cancel(){},busy:()=>!1}},lockOn(i,t,e){return{press:()=>e.cycleLock(i.range),update(){},cancel(){},busy:()=>!1}}};function si(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Eg(i,t,e){const n={};for(const[s,r]of Object.entries(i)){const a=bg[r.type];if(!a)throw new Error("Unknown ability type "+r.type);n[s]=a(r,t,e),n[s].cfg=r}return n}class Tg{constructor(t,e){this.hero=t,this.game=e,this.st=t.stats,this.rig=t.model(),this.anim=new Ps(this.rig),e.scene.add(this.rig.root),this.pos=new P,this.vel=new P,this.facing=Math.PI,this.radius=this.st.radius,this.height=this.st.height,this.grounded=!0,this.airJumps=this.st.airJumps,this.chill=this.st.startChill,this.action=null,this.hitT=0,this.invuln=0,this.t=0,this.lungeV=null,this.speedK=0,this.jumpCount=0,this.kit=Eg(t.kit,this,e);const n=new Ut(new Qe(1.4,1.4).rotateX(-Math.PI/2),new Ue({map:ih(),transparent:!0,depthWrite:!1}));e.scene.add(n),this.shadow=n}get maxChill(){return this.st.maxChill}addChill(t){this.chill=Math.min(this.maxChill,this.chill+t)}busy(){const t=this.kit;return t.strike.busy()||t.blast.busy()||t.field.busy()||t.five.busy()||this.hitT>0}pushVel(t,e){this.lungeV=t.clone().multiplyScalar(e)}aimTarget(t){const e=this.game;if(e.lock&&!e.lock.calmed&&e.lock.pos.distanceTo(this.pos)<t)return e.lock;let n=null,s=1e9;for(const r of e.targets()){const a=r.pos.distanceTo(this.pos);if(a>t)continue;const o=Math.abs(si(Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z),this.facing)),l=a+o*4;o<1.2&&l<s&&(s=l,n=r)}return n}faceTarget(){const t=this.aimTarget(wg());t&&(this.facing=Math.atan2(t.pos.x-this.pos.x,t.pos.z-this.pos.z))}tryJump(){this.hitT>0||(this.kit.five.busy()&&this.kit.five.release(!1),this.grounded?(this.vel.y=this.st.jumpV,this.grounded=!1,this.airJumps=this.st.airJumps,this.game.sfx.play("jump"),this.jumpCount++):this.airJumps>0&&(this.airJumps--,this.vel.y=this.st.airJumpV,this.game.sfx.play("jump"),this.game.fx.ring(this.pos,3800954,.2,1.6,.35,0),this.game.popup("WHOOSH!",this.pos),this.jumpCount++))}hurt(t,e,n=6){return this.invuln>0?!1:(this.game.addPanic(t),this.invuln=.7,this.hitT=.3,this.kit.five.cancel(),this.kit.strike.cancel(),e&&(this.vel.x=e.x*n,this.vel.z=e.z*n),this.vel.y=Math.max(this.vel.y,3),this.grounded=!1,this.game.sfx.play("hit"),this.game.fx.burst(this.pos.clone().setY(this.pos.y+1.2),16722902,10,5,.5),this.game.shake(.3),!0)}update(t,e,n){const s=this.st,r=this.game,a=this.kit;this.t+=t,this.hitT=Math.max(0,this.hitT-t),this.invuln=Math.max(0,this.invuln-t);for(const v of["field","five"])e.released.has(v)&&a[v].release?.(!1);for(const v of["jump","strike","blast","field","five","lock"])e.pressed.has(v)&&a[v].press();for(const v of Object.keys(a))a[v].update(t,e.held[v]);const o=new P(-Math.sin(n),0,-Math.cos(n)),l=new P(Math.cos(n),0,-Math.sin(n)),c=o.multiplyScalar(e.move.y).addScaledVector(l,e.move.x),u=Math.min(1,c.length());let d=s.speed*u;a.five.busy()?d=0:a.field.busy()?d*=.45:(a.strike.busy()||a.blast.busy())&&(d*=.25),this.hitT>0&&(d=0);const h=u>.01?c.normalize().multiplyScalar(d):new P,f=(this.grounded?s.accel:s.accel*.45)*t;if(this.hitT<=0){const v=h.x-this.vel.x,A=h.z-this.vel.z,S=Math.hypot(v,A);S>f?(this.vel.x+=v/S*f,this.vel.z+=A/S*f):(this.vel.x=h.x,this.vel.z=h.z)}else this.vel.x*=1-4*t,this.vel.z*=1-4*t;this.lungeV&&(this.vel.x=this.lungeV.x,this.vel.z=this.lungeV.z,this.lungeV=null),u>.1&&!this.busy()&&(this.facing=Ag(this.facing,Math.atan2(c.x,c.z),1-Math.exp(-14*t))),r.lock&&(a.field.busy()||a.blast.busy())&&(this.facing=Math.atan2(r.lock.pos.x-this.pos.x,r.lock.pos.z-this.pos.z));const m=a.five.busy()||a.field.busy();this.vel.y-=s.gravity*t*(m&&this.vel.y<0?.25:1),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vel.y*t,r.col.resolve(this.pos,this.radius,this.height);const M=r.col.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.pos.y<=M?(this.pos.y=M,this.vel.y<0&&(this.vel.y=0),this.grounded||(this.grounded=!0,this.airJumps=s.airJumps)):this.pos.y>M+.05&&(this.grounded=!1),this.pos.y<-5&&(this.pos.copy(r.checkpointPos()),this.vel.set(0,0,0)),this.speedK=Math.hypot(this.vel.x,this.vel.z)/s.speed;let g;this.hitT>0?g=Ht.hit(this.t,1-this.hitT/.3):this.action?g=Ht[this.action.pose](this.t,Math.min(1,this.action.k)):this.grounded?this.speedK>.08?g=Ht.run(this.t,Math.min(1,this.speedK)):g=Ht.idle(this.t):g=Ht.jump(this.t,this.vel.y),this.anim.apply(g,t,this.action?22:14),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.facing,this.shadow.position.set(this.pos.x,M+.03,this.pos.z),this.shadow.material.opacity=Math.max(.15,1-(this.pos.y-M)*.2);const p=a.field.busy()||a.five.busy()?.55:0;this.rig.aura.material.opacity+=(p-this.rig.aura.material.opacity)*Math.min(1,t*6),this.rig.emblemGlow.material.opacity=.12+this.chill/this.maxChill*.2+Math.sin(this.t*3)*.04,this.rig.root.visible=!(this.invuln>0&&Math.floor(this.t*20)%2===0&&this.hitT<=0)}}function wg(){return 5}function Ag(i,t,e){return i+si(t,i)*e}const De={selfLit:.22},sh=["#e0b08c","#c68a62","#9a6643","#6e472e","#f1c9a5"],Rg=[3894952,11031867,9079354,5979018,3115651,10104650,7039856],Cg=[2237754,3812898,1973794,2898474],Pg=[2759184,1118481,6965792,10123840,3811882],ms=(i,t)=>i[Math.floor(t*i.length)%i.length];let Tr=1;const ei=()=>(Tr=Tr*16807%2147483647)/2147483647;function Lg(i){Tr=1e3+i*77;const t=ms(sh,ei()),e=Vt(t,De),n=Vt(ms(Rg,ei())),s=Vt(ms(Cg,ei())),r=Vt(ms(Pg,ei()));return Cs({selfLit:De.selfLit,scale:.92+ei()*.12,bulk:.95+ei()*.15,colors:{torso:n,pelvis:s,shoulder:n,upperArm:n,glove:e,thigh:s,shin:s,boot:Vt(1381658,De),skin:e,skinMat:e},head:{tex:zo(t),scaleY:1.1},extras(o){It(new ge(o.headR*1.06,12,8,0,Math.PI*2,0,.45*Math.PI),r,0,.01,-.01,o.head),ei()>.5&&It(new Ee(.3,.24,.1),Vt(3355460,De),0,.1,-.17,o.j.chest)}})}function Ig(i){Tr=5e3+i*31;const t=ms(sh,ei()),e=Vt(t,De),n=Vt(1446428,De),s=Vt(1776420,De),r=Ke(16722902);return Cs({selfLit:De.selfLit,scale:1.02,bulk:1.15,colors:{torso:n,pelvis:s,shoulder:n,upperArm:n,glove:Vt(2236962,De),thigh:s,shin:s,boot:Vt(789518,De),skin:e,skinMat:e},head:{tex:zo(t),scaleY:1.1},extras(o){It(new ge(o.headR*1.18,12,10,Math.PI-1.2,Math.PI+2.4,0,.7*Math.PI),n,0,0,-.01,o.head);const l=It(new Ee(.2,.035,.05),r,0,.012,.125,o.head);for(const c of[-1,1])It(new Ee(.02,.3,.02),r,c*.12,.12,.15,o.j.chest);It(new Ee(.4,.02,.02),r,0,-.02,.16,o.j.chest),o.visor=l}})}function Dg(){const i=Vt(8015924,De),t=Vt(1709088,De),e=Vt(1380890,De),n=Ke(16722902),s=Vt(3024440,De),r=Cs({selfLit:De.selfLit,scale:1.9,bulk:1.45,colors:{torso:t,pelvis:e,shoulder:s,upperArm:t,glove:s,thigh:e,shin:s,boot:Vt(657932,De),skin:i,skinMat:i},head:{tex:zo("#7a5034"),scaleY:1.05},extras(o){for(const l of[-1,1]){const c=It(new Ee(.26,.12,.26),s,0,.08,0,o.j["arm"+(l>0?"L":"R")]);c.rotation.z=l*.35,It(new Ee(.2,.03,.03),n,0,.14,.12,o.j["arm"+(l>0?"L":"R")]),It(new ge(.1,8,6),s,0,-.07,.01,o.j["hand"+(l>0?"L":"R")]).scale.set(1,1.1,1),It(new ge(.03,6,4),n,0,-.12,.08,o.j["hand"+(l>0?"L":"R")])}o.visor=It(new Ee(.24,.045,.06),n,0,.015,.12,o.head),It(new Ee(.34,.28,.06),s,0,.14,.15,o.j.chest),It(new $i(.07,.015,6,16),n,0,.15,.185,o.j.chest),It(new ge(o.headR*1.04,10,8,0,Math.PI*2,0,.35*Math.PI),Vt(1118481,De),0,.01,0,o.head)}}),a=Fe(16722902,5,.18);return a.position.y=2.2,r.root.add(a),r.aura=a,r}function Ug(){const i=new Be,t=new Be;i.add(t),It(new Uo(.45,0),Vt(2366510,{flatShading:!0,selfLit:.2}),0,0,0,t).scale.set(1,.7,1);const n=It(new $i(.62,.05,6,20),Ke(16722902),0,0,0,t);n.rotation.x=Math.PI/2;const s=It(new ge(.14,10,8),Ke(16722902),0,0,.36,t);for(const a of[-1,1]){const o=It(new Ee(.5,.04,.16),Vt(3813444,De),a*.62,.1,0,t);o.rotation.z=a*.3}const r=Fe(16722902,1.6,.5);return t.add(r),{root:i,body:t,ring:n,eye:s,glow:r,isDrone:!0}}const Tn={selfLit:.28},fc=`
vec3 suitColor(vec3 p){
  vec3 J = vec3(0.03,0.025,0.035); vec3 T = vec3(0.16,0.16,0.17); vec3 M = vec3(1.0,0.12,0.75);
  float front = smoothstep(-0.02,0.04,p.z);
  float open = front*(1.0 - smoothstep(0.04 + (p.y+0.29)*0.12, 0.05 + (p.y+0.29)*0.12, abs(p.x)));
  float line1 = 1.0 - smoothstep(0.0,0.008, abs(abs(p.x) - 0.12 + p.y*0.25));
  float line2 = 1.0 - smoothstep(0.0,0.006, abs(p.y + 0.12 - abs(p.x)*0.4));
  return mix(J, T, open);
}
vec3 suitGlow(vec3 p){
  vec3 M = vec3(1.0,0.12,0.75);
  float front = smoothstep(-0.02,0.04,p.z);
  float open = front*(1.0 - smoothstep(0.04 + (p.y+0.29)*0.12, 0.05 + (p.y+0.29)*0.12, abs(p.x)));
  float line1 = 1.0 - smoothstep(0.0,0.008, abs(abs(p.x) - 0.12 + p.y*0.25));
  float line2 = 1.0 - smoothstep(0.0,0.006, abs(p.y + 0.12 - abs(p.x)*0.4));
  return (1.0-open)*max(line1,line2)*M*0.9;
}`,Ng=`
vec3 suitColor(vec3 p){
  vec3 J = vec3(0.03,0.025,0.035); vec3 M = vec3(1.0,0.12,0.75);
  return J;
}
vec3 suitGlow(vec3 p){ float l = 1.0 - smoothstep(0.0,0.008, abs(p.x + p.y*0.15)); return l*vec3(1.0,0.12,0.75)*0.9; }`;function Fg(i=1.18){const t=Vt(9066038,Tn),e=Vt(1182996,Tn),n=Vt(1710112,Tn),s=Vt(657932,Tn),r=Vt(1839128,Tn),a=Vt(2762032,Tn),o=Ke(16722902),l=zn(Ng,Tn),c=Cs({selfLit:Tn.selfLit,scale:i,bulk:1.12,colors:{torso:zn(fc,Tn),pelvis:n,shoulder:l,neck:t,upperArm:l,glove:t,thigh:n,shin:n,boot:s,skin:t,skinMat:t},head:{tex:hg(),scaleY:1.1},extras(d){const{j:h,head:f,headR:m,parts:M}=d;M.abdomen.material=zn(fc,Tn);for(const v of[-1,1])It(new Ee(.12,.13,.02),e,v*.11,.33,.02,h.chest).rotation.set(-.2,v*.5,v*.3);h.foreL.children[0].material=l;for(let v=0;v<4;v++)It(new ln(.07-v*.003,.068-v*.003,.055,10),a,0,-.04-v*.06,0,h.foreR);h.foreR.children[0].material=a,h.handR.children.forEach(v=>v.material=a),d.knuckles=[];for(let v=0;v<3;v++){const A=It(new ge(.014,6,4),o,-.03+v*.03,-.1,.03,h.handR);d.knuckles.push(A)}const g=Fe(16722902,.5,.7);g.position.set(0,-.08,.04),h.handR.add(g),d.handGlow=g;for(const v of[-1,1]){const A=new Ut(new ge(.02,8,6),o);A.position.copy(mo(m*.99,.47*Math.PI,v*.36)),A.scale.set(1.2,.6,.5),f.add(A);const S=Fe(16726745,.1,.9);S.position.copy(A.position).multiplyScalar(1.04),f.add(S)}It(new ge(m*1.05,16,8,0,Math.PI*2,0,.36*Math.PI),r,0,.005,-.01,f),It(new ge(m*1.06,16,8,Math.PI-.4,Math.PI+.8,0,.6*Math.PI),r,0,0,-.01,f);const p=Ke(13639600);for(let v=0;v<16;v++){const A=.05+v%3*.12+Math.random()*.05,S=v/16*Math.PI*2,b=new P(Math.cos(S)*Math.sin(A*Math.PI),Math.cos(A*Math.PI),Math.sin(S)*Math.sin(A*Math.PI)).multiplyScalar(m);if(b.z>.06&&b.y<m*.8)continue;const E=.1+Math.random()*.05,w=new Be;w.position.copy(b),f.add(w),w.quaternion.setFromUnitVectors(new P(0,1,0),b.clone().normalize().add(new P(0,.6,-.25)).normalize()),It(new vi(.04,E,5),r,0,E/2,0,w),It(new vi(.018,E*.38,5),p,0,E*.86,0,w)}}}),u=Fe(16722902,3.2,.25);return u.position.y=1.2*i,c.root.add(u),c.aura=u,c}const be=new P;let Og=0;function Bg(){const i=new Be,t=(s,r)=>new Rr(new ws({color:s,transparent:!0,opacity:r,depthTest:!1,toneMapped:!1})),e=t(1050648,.7);e.scale.set(1,.12,1);const n=t(16722902,1);return n.center.set(0,.5),n.position.x=-.48,n.scale.set(.96,.08,1),e.renderOrder=n.renderOrder=10,i.add(e,n),i.userData.fill=n,i}class es{constructor(t,e,n,s={}){this.game=t,this.kind=e,this.id=++Og,this.pos=n.clone(),this.vel=new P,this.home=n.clone(),this.radius=.45,this.height=1.8,this.centerY=1,this.facing=Math.random()*6.28,this.t=Math.random()*10,this.seed=Math.random()*10,this.calmed=!1,this.calmT=0,this.stun=0,this.stagger=0,this.cd=1+Math.random(),this.state="idle",this.stateT=0,this.boss=!1,this.removed=!1,this.hotspot=s.hotspot||null,this.grounded=!0,this.flying=!1}attach(t){if(this.root=t,this.game.scene.add(t),this.boss||(this.bar=Bg(),this.bar.position.y=this.height*(this.barY||1.15),t.add(this.bar)),this.calmGlow=Fe(3800954,this.height*1.6,0),this.calmGlow.position.y=this.height*.5,t.add(this.calmGlow),this.stressGlow=Fe(16722902,this.height*1.2,.18),this.stressGlow.position.y=this.height*.55,t.add(this.stressGlow),!this.flying){const e=new Ut(new Qe(1,1).rotateX(-Math.PI/2),new Ue({map:ih(),transparent:!0,depthWrite:!1}));e.scale.setScalar(this.radius*3.2),e.position.y=.04,t.add(e)}}get stressK(){return this.stress/this.maxStress}calmHit(t,e={}){if(this.calmed||this.invuln>0)return;const n=this.dazed>0?1.6:1;this.stress=Math.max(0,this.stress-t*n*(this.resist||1)),this.flashT=.12,e.stagger&&!this.boss&&(this.stagger=Math.max(this.stagger,e.stagger),this.state==="windup"&&this.setState("idle")),e.knock&&e.dir&&!this.boss&&(this.vel.x+=e.dir.x*e.knock,this.vel.z+=e.dir.z*e.knock),e.dir&&this.boss&&(this.bossHitDir=e.dir),this.onHit?.(t,e),this.stress<=0&&this.becomeCalm()}fieldTick(t,e){this.calmed||(this.calmHit(t*(this.boss?.6:1),{}),this.boss?this.stun=Math.max(this.stun,this.stunResistT?0:.2):this.stun=Math.max(this.stun,.35))}becomeCalm(){if(this.calmed)return;this.calmed=!0,this.calmT=0,this.state="calm";const t=this.game;t.onCalmed(this),t.fx.burst(this.pos.clone().setY(this.pos.y+this.centerY),3800954,22,5,.7,.9,4),t.fx.ring(this.pos,3800954,.2,3,.6),t.popup("WHOOSH!",this.pos.clone().setY(this.pos.y+this.height),!0),t.sfx.play("calm"),this.bar&&(this.bar.visible=!1),this.stressGlow.visible=!1}setState(t){this.state=t,this.stateT=0}moveToward(t,e,n,s=30){be.subVectors(t,this.pos).setY(0);const r=be.length();if(r<.05)return r;be.multiplyScalar(e/r);const a=be.x-this.vel.x,o=be.z-this.vel.z,l=Math.hypot(a,o),c=s*n;return l>c?(this.vel.x+=a/l*c,this.vel.z+=o/l*c):(this.vel.x=be.x,this.vel.z=be.z),this.facing=dc(this.facing,Math.atan2(be.x,be.z),1-Math.exp(-10*n)),r}physics(t,e=8){if(this.flying){this.pos.addScaledVector(this.vel,t);return}this.vel.y-=30*t,this.pos.addScaledVector(this.vel,t);const n=this.game.col.resolve(this.pos,this.radius,this.height),s=this.game.col.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y);return this.pos.y<=s?(this.pos.y=s,this.vel.y=0,this.grounded=!0):this.grounded=!1,n}damp(t,e=8){this.vel.x*=Math.exp(-e*t),this.vel.z*=Math.exp(-e*t)}faceDir(t,e,n=10){this.facing=dc(this.facing,Math.atan2(t.x-this.pos.x,t.z-this.pos.z),1-Math.exp(-n*e))}commonUpdate(t){if(this.t+=t,this.stateT+=t,this.stun=Math.max(0,this.stun-t),this.stagger=Math.max(0,this.stagger-t),this.cd-=t,this.flashT=Math.max(0,(this.flashT||0)-t),this.invuln=Math.max(0,(this.invuln||0)-t),this.dazed=Math.max(0,(this.dazed||0)-t),this.bar){const e=this.bar.userData.fill;e.scale.x=.96*this.stressK,e.material.color.setHSL(.86-(1-this.stressK)*.5,1,.55),this.bar.visible=!this.calmed&&this.pos.distanceTo(this.game.player.pos)<30}this.calmed?(this.calmT+=t,this.calmGlow.material.opacity=Math.max(.15,.6-this.calmT*.1)):(this.stressGlow.material.opacity=.1+this.stressK*.25+(this.flashT>0?.5:0),this.stressGlow.material.color.set(this.flashT>0?10354586:16722902))}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing}playerInFront(t,e=1.2){const n=this.game.player;be.subVectors(n.pos,this.pos);const s=Math.abs(be.y);return be.y=0,be.length()<t&&s<1.6&&Math.abs(si(Math.atan2(be.x,be.z),this.facing))<e}remove(){this.removed||(this.removed=!0,this.game.scene.remove(this.root))}}const dc=(i,t,e)=>i+si(t,i)*e;class zg extends es{constructor(t,e,n){super(t,"citizen",e,n),this.maxStress=this.stress=40,this.rig=Lg(this.id),this.anim=new Ps(this.rig),this.attach(this.rig.root),this.wander=e.clone(),this.sync()}update(t){this.commonUpdate(t);const e=this.game.player;let n;this.calmed?(this.damp(t),this.physics(t),n=Ht.sit(this.t)):this.stun>0||this.stagger>0?(this.damp(t),this.physics(t),n=Ht.dazed(this.t)):this.state==="windup"?(this.damp(t),this.physics(t),this.faceDir(e.pos,t),n=Ht.windup(this.t,this.stateT),this.stateT>.55&&(this.playerInFront(2.4)&&e.hurt(5,e.pos.clone().sub(this.pos).setY(0).normalize(),6),this.setState("recover"),this.cd=2.2)):this.state==="recover"?(this.damp(t),this.physics(t),n=Ht.punch(this.t,1),this.stateT>.35&&this.setState("idle")):e.pos.distanceTo(this.pos)<2.2&&this.cd<=0?(this.setState("windup"),n=Ht.windup(this.t,0)):((this.wander.distanceTo(this.pos)<1||this.stateT>3)&&(this.wander.set(this.home.x+(Math.random()-.5)*14,0,this.home.z+(Math.random()-.5)*14),this.stateT=0),Math.sin(this.t*.9+this.seed)>-.3?(this.moveToward(this.wander,4.2,t),n=Ht.run(this.t,.7)):(this.damp(t),this.faceDir(e.pos,t,4),n=Ht.stressed(this.t,0,this.seed)),this.physics(t)),this.anim.apply(n,t),this.sync()}}class kg extends es{constructor(t,e,n){super(t,"goon",e,n),this.maxStress=this.stress=75,this.rig=Ig(this.id),this.anim=new Ps(this.rig),this.attach(this.rig.root),this.sync()}update(t){this.commonUpdate(t);const e=this.game.player;let n;if(this.calmed)this.calmT<4?(be.subVectors(this.pos,e.pos).setY(0).normalize().multiplyScalar(5).add(this.pos),this.moveToward(be.clone(),2.2,t),n=Ht.run(this.t*.6,.25)):(this.damp(t),n=Ht.sit(this.t)),this.physics(t),this.rig.visor&&this.rig.visor.material.color.set(3800954);else if(this.stun>0||this.stagger>0)this.damp(t),this.physics(t),n=Ht.dazed(this.t);else if(this.state==="windup")this.damp(t),this.physics(t),this.faceDir(e.pos,t,6),n=Ht.windup(this.t,this.stateT),this.stressGlow.material.opacity=.6,this.stateT>.6&&(this.playerInFront(2.6)&&e.hurt(9,e.pos.clone().sub(this.pos).setY(0).normalize(),8),this.setState("recover"),this.cd=1.5);else if(this.state==="recover")this.damp(t),this.physics(t),n=Ht.punch(this.t,1),this.stateT>.45&&this.setState("idle");else{const s=e.pos.distanceTo(this.pos);s<2.2&&this.cd<=0?(this.setState("windup"),n=Ht.windup(this.t,0),this.physics(t)):s<24?(s>1.8?this.moveToward(e.pos,5.2,t):(this.damp(t),this.faceDir(e.pos,t)),n=this.vel.length()>.5?Ht.run(this.t,.8):Ht.stressed(this.t,0,this.seed),this.physics(t)):(this.moveToward(this.home,3,t),n=Ht.run(this.t,.4),this.physics(t))}this.anim.apply(n,t),this.sync()}}class rh extends es{constructor(t,e,n){super(t,"drone",e,n),this.flying=!0,this.maxStress=this.stress=45,this.radius=.7,this.height=1.2,this.centerY=0,this.barY=1.1,this.reachY=3.2,this.m=Ug(),this.attach(this.m.root),this.calmGlow.position.y=0,this.stressGlow.position.y=0,this.hoverY=e.y,this.orbitA=Math.random()*6.28,this.cd=1.5+Math.random()*1.5,this.sync()}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;if(this.calmed){const s=n.col.groundAt(this.pos.x,this.pos.z,.5,this.pos.y)+.5;this.pos.y=Math.max(s,this.pos.y-t*1.5),this.vel.multiplyScalar(Math.exp(-3*t)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.m.ring.material.color.set(3800954),this.m.eye.material.color.set(3800954),this.m.glow.material.color.set(3800954),this.m.body.rotation.y+=t*.5}else if(this.stun>0||this.stagger>0)this.vel.multiplyScalar(Math.exp(-4*t)),this.pos.addScaledVector(this.vel,t),this.m.body.rotation.z=Math.sin(this.t*12)*.3;else{this.orbitA+=t*.6;const s=9,r=e.pos.x+Math.cos(this.orbitA)*s,a=e.pos.z+Math.sin(this.orbitA)*s,l=e.pos.distanceTo(this.home)<40?new P(r,Math.max(e.pos.y+3.2,this.hoverY-2),a):this.home.clone();be.subVectors(l,this.pos);const c=Math.min(6,be.length()*2);if(be.normalize().multiplyScalar(c),this.vel.lerp(be,1-Math.exp(-2*t)),this.pos.addScaledVector(this.vel,t),this.facing=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z),this.m.body.rotation.z=Math.sin(this.t*2)*.1,this.cd<=0&&this.pos.distanceTo(e.pos)<22){this.cd=2.2+Math.random();const u=this.pos.clone(),d=e.pos.clone().setY(e.pos.y+1).sub(u).normalize();n.proj.spawn({pos:u,dir:d,speed:13,color:16722902,size:.22,owner:"enemy",panic:n.boss?4:6,life:2.5}),n.sfx.play("hype")}}this.m.body.position.y=Math.sin(this.t*3)*.12,this.m.ring.rotation.z+=t*3,n.col.resolve(this.pos,.5,.6),this.sync()}}class Gg extends es{constructor(t,e,n){super(t,"enforcer",e),this.boss=!0,this.name="AMP ENFORCER",this.maxStress=this.stress=600,this.radius=1.1,this.height=3.4,this.centerY=1.9,this.reachY=2.6,this.arena=n,this.resist=1,this.rig=Dg(),this.anim=new Ps(this.rig),this.attach(this.rig.root),this.cd=2,this.chargeDir=new P,this.sync(),this.tele=new Ut(new Qe(2.2,1).translate(0,.5,0).rotateX(-Math.PI/2),new Ue({color:16722902,transparent:!0,opacity:.35,depthWrite:!1,toneMapped:!1})),this.tele.visible=!1,t.scene.add(this.tele),this.slams=0}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos);if(this.calmed)this.damp(t),this.physics(t),s=Ht.sit(this.t),this.tele.visible=!1,this.rig.visor&&this.rig.visor.material.color.set(3800954),this.rig.aura.material.color.set(3800954);else if(this.dazed>0)this.damp(t,4),this.physics(t),s=Ht.dazed(this.t),Math.random()<t*6&&n.fx.burst(this.pos.clone().setY(3.6),2287359,1,1.5,.5,.6,2);else if(this.state==="tele")this.damp(t),this.physics(t),this.faceDir(e.pos,t,4),this.chargeDir.set(Math.sin(this.facing),0,Math.cos(this.facing)),s=Ht.windup(this.t,this.stateT),this.tele.visible=!0,this.tele.position.copy(this.pos).setY(.25),this.tele.rotation.y=this.facing,this.tele.scale.set(1,1,22),this.tele.material.opacity=.2+Math.sin(this.stateT*20)*.15,this.stateT>.9&&(this.setState("charge"),n.sfx.play("charge"),this.tele.visible=!1);else if(this.state==="charge"){this.vel.x=this.chargeDir.x*22,this.vel.z=this.chargeDir.z*22,s=Ht.charge(this.t,0);const c=this.physics(t),u=Math.hypot(this.pos.x-this.arena.x,this.pos.z-this.arena.z)>16;r<this.radius+e.radius+.4&&e.hurt(16,this.chargeDir.clone(),14),(c||u||this.stateT>1.3)&&(this.vel.set(0,0,0),(c||u)&&(this.dazed=2.6,n.shake(.5),n.sfx.play("slam"),n.showToast("DAZED! CALM HIM!")),this.setState("idle"),this.cd=1.4),Math.random()<t*20&&n.fx.burst(this.pos.clone().setY(.3),16722902,1,2,.6)}else if(this.state==="slam"){if(this.damp(t),this.physics(t),s=Ht.slam(this.t,this.stateT/.9),this.stateT>.55&&!this.slamDone){this.slamDone=!0,n.sfx.play("slam"),n.shake(.4);const c=this.pos.clone().addScaledVector(new P(Math.sin(this.facing),0,Math.cos(this.facing)),1.5);n.fx.ring(c,16722902,.5,5,.5),e.pos.distanceTo(c)<5&&e.pos.y-c.y<1.2&&!n.player.kit.field.blocks()&&e.hurt(14,e.pos.clone().sub(c).setY(0).normalize(),10)}this.stateT>.95&&(this.setState("idle"),this.cd=1.2)}else this.tele.visible=!1,this.cd<=0&&r<4.5?(this.setState("slam"),this.slamDone=!1,s=Ht.slam(this.t,0),this.physics(t)):this.cd<=0&&r>6&&r<30?(this.setState("tele"),s=Ht.windup(this.t,0),this.physics(t)):(r>3?this.moveToward(e.pos,4.2,t,10):(this.damp(t),this.faceDir(e.pos,t)),this.physics(t),s=this.vel.length()>.5?Ht.run(this.t*.7,.5):Ht.taunt(this.t));const a=this.pos.x-this.arena.x,o=this.pos.z-this.arena.z,l=Math.hypot(a,o);l>16.5&&(this.pos.x=this.arena.x+a/l*16.5,this.pos.z=this.arena.z+o/l*16.5),this.anim.apply(s,t,12),this.sync()}remove(){super.remove(),this.game.scene.remove(this.tele)}}class Hg extends es{constructor(t,e,n){super(t,"amp",e),this.boss=!0,this.name="THE AMP",this.maxStress=this.stress=1200,this.radius=.7,this.height=2.2,this.centerY=1.3,this.reachY=2.4,this.arena=n,this.rig=Fg(),this.anim=new Ps(this.rig),this.attach(this.rig.root),this.phase=1,this.cd=2,this.pulseCd=4,this.summonCd=0,this.strafeA=0,this.closeT=0,this.volley=0,this.sync()}onHit(){this.state==="overdrive"&&this.game.player.pos.distanceTo(this.pos)<3}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos),a=this.stressK,o=a>.66?1:a>.33?2:3;if(o!==this.phase&&!this.calmed&&(this.phase=o,this.invuln=1.2,this.setState("taunt"),n.showToast(o===2?"PHASE 2: OVERDRIVE!":"PHASE 3: DRONE SWARM!"),n.sfx.play("pulse"),n.flash(),o===3&&this.summon(2),this.pulseCd=2.5),this.calmed){this.damp(t),this.physics(t),s=Ht.sit(this.t),this.rig.aura.material.color.set(3800954),this.rig.handGlow.material.color.set(3800954);for(const l of this.rig.knuckles)l.material.color.set(3800954)}else if(this.stagger>0&&this.state!=="overdrive")this.damp(t),this.physics(t),s=Ht.hit(this.t,.5);else if(this.state==="taunt")this.damp(t),this.physics(t),this.faceDir(e.pos,t),s=Ht.taunt(this.t),this.stateT>1.2&&this.setState("idle");else if(this.state==="hype")this.damp(t),this.physics(t),this.faceDir(e.pos,t,8),s=Ht.hype(this.t,this.stateT/.5),this.stateT>.35&&this.volley>0&&(this.volley--,this.stateT=.2,this.fireHype()),this.volley<=0&&this.stateT>.5&&(this.setState("idle"),this.cd=o===1?1.6:2);else if(this.state==="overdrive")this.damp(t),this.physics(t),s=Ht.overdrive(this.t),this.rig.aura.material.opacity=.3+this.stateT*.5,this.stateT>1&&(this.rig.aura.material.opacity=.25,n.spawnPulse(this.pos,o===3?16:13),this.setState("idle"),this.cd=1,this.pulseCd=o===3?5.2:6.5,o===3&&Math.random()<.25&&(this.doublePulse=.9));else if(this.state==="blink"){if(s=Ht.taunt(this.t),this.rig.root.visible=this.stateT>.25,this.stateT>.25&&!this.blinked){this.blinked=!0;const l=Math.random()*6.28;this.pos.set(this.arena.x+Math.cos(l)*12,0,this.arena.z+Math.sin(l)*12),n.fx.burst(this.pos.clone().setY(1.2),16722902,16,5,.6)}this.stateT>.5&&(this.rig.root.visible=!0,this.setState("idle"),this.cd=.6)}else{this.pulseCd-=t,this.summonCd-=t,this.doublePulse&&(this.doublePulse-=t,this.doublePulse<=0&&(this.doublePulse=0,n.spawnPulse(this.pos,16))),this.closeT=r<3?this.closeT+t:Math.max(0,this.closeT-t),this.closeT>2.6?(this.closeT=0,this.blinked=!1,this.setState("blink"),n.fx.burst(this.pos.clone().setY(1.2),16722902,16,5,.6),n.sfx.play("hype")):o>=2&&this.pulseCd<=0?(this.setState("overdrive"),n.sfx.play("charge"),n.showToast("OVERDRIVE PULSE! JUMP or CALM FIELD!",1.2)):o===3&&this.summonCd<=0&&n.enemies.filter(u=>u.kind==="drone"&&!u.calmed).length<2?this.summon(2):this.cd<=0&&(this.setState("hype"),this.volley=o===1?3:4,this.fireHype()),this.strafeA+=t*.35*(o===3?1.5:1);const l=10,c=new P(this.arena.x+Math.cos(this.strafeA)*l,0,this.arena.z+Math.sin(this.strafeA)*l);this.moveToward(c,4.5,t,12),this.faceDir(e.pos,t,8),this.physics(t),s=Ht.run(this.t*.6,.35)}this.rig.handGlow.scale.setScalar(.5+Math.sin(this.t*8)*.1),this.anim.apply(s,t,14),this.sync()}fireHype(){const t=this.game,e=t.player,n=this.pos.clone().add(new P(Math.sin(this.facing)*.8,1.6,Math.cos(this.facing)*.8)),s=e.pos.clone().setY(e.pos.y+1).sub(n).normalize(),r=this.phase===1?0:(Math.random()-.5)*.3,a=s.applyAxisAngle(new P(0,1,0),r);t.proj.spawn({pos:n,dir:a,speed:14,color:16722902,size:.38,owner:"enemy",panic:4,life:2.6}),t.sfx.play("hype")}summon(t){this.summonCd=16;const e=this.game;for(let n=0;n<t;n++){const s=Math.random()*6.28;e.addEnemy(new rh(e,new P(this.pos.x+Math.cos(s)*4,5,this.pos.z+Math.sin(s)*4),{}))}e.fx.burst(this.pos.clone().setY(2),16722902,20,6,.7)}}class Vg extends es{constructor(t,e){super(t,"core",e.group.position.clone()),this.boss=!0,this.name="AMP TOWER CORE",this.maxStress=this.stress=160,this.radius=1.6,this.height=3.6,this.centerY=2.6,this.reachY=3.2,this.obj=e,this.root=new Be,this.root.position.copy(this.pos),t.scene.add(this.root),this.calmGlow=Fe(3800954,1,0),this.stressGlow=Fe(16722902,1,0),this.root.add(this.calmGlow,this.stressGlow)}update(t){this.commonUpdate(t),this.obj.orb.scale.setScalar(1+(this.flashT>0?.15:0)+Math.sin(this.t*6)*.04),this.game.city.setTowerCalm(1-this.stressK)}}const Ls=`
vec3 G = vec3(0.02,0.25,0.03); vec3 K = vec3(0.006,0.007,0.009);
float scales(vec3 p){ return 0.9 + 0.1*sin(p.x*150.0)*sin(p.y*150.0+p.z*110.0); }
`,Wg=Ls+`
vec3 suitColor(vec3 p){
  float hw = 0.11 + (p.y+0.29)/0.58*0.13;
  float front = smoothstep(-0.1,0.0,p.z);
  float panel = front * (1.0 - smoothstep(hw-0.008, hw+0.008, abs(p.x)));
  float yoke = smoothstep(0.1,0.15,p.y);
  float m = max(panel, yoke);
  float edge = front*(1.0 - smoothstep(0.0,0.01, abs(abs(p.x)-hw)))*(1.0-yoke);
  return mix(K,G,m)*scales(p);
}
vec3 suitGlow(vec3 p){
  float hw = 0.11 + (p.y+0.29)/0.58*0.13;
  float front = smoothstep(-0.1,0.0,p.z);
  float yoke = smoothstep(0.1,0.15,p.y);
  float edge = front*(1.0 - smoothstep(0.0,0.01, abs(abs(p.x)-hw)))*(1.0-yoke);
  return edge*vec3(0.0);
}`,Xg=Ls+`
vec3 suitColor(vec3 p){
  float hw = 0.05 + (p.y+0.2)/0.4*0.06;
  float front = smoothstep(-0.04,0.03,p.z);
  float m = front*(1.0 - smoothstep(hw-0.008,hw+0.008,abs(p.x)));
  return mix(K,G,m)*scales(p);
}`,Yg=Ls+`
vec3 suitColor(vec3 p){
  float front = smoothstep(-0.02,0.05,p.z);
  float v = 0.02 + abs(p.x)*0.75;
  float band = front*(1.0 - smoothstep(0.028,0.036, abs(p.y - v)));
  float above = front*step(v, p.y);
  vec3 c = mix(K, G*0.9, above);
  return mix(c, vec3(0.06,0.55,0.08), band)*scales(p);
}
vec3 suitGlow(vec3 p){
  float front = smoothstep(-0.02,0.05,p.z);
  float v = 0.02 + abs(p.x)*0.75;
  return front*(1.0 - smoothstep(0.028,0.036, abs(p.y - v)))*vec3(0.06,0.3,0.08);
}`,pc=i=>Ls+`
vec3 suitColor(vec3 p){
  float outer = smoothstep(0.02,0.045, p.x*${i.toFixed(1)});
  float m = outer*step(-0.17,p.y)*step(p.y,0.06 - abs(p.z)*0.6);
  return mix(K,G,m)*scales(p);
}`,qg=Ls+`
vec3 suitColor(vec3 p){
  float notch = p.z > 0.0 ? 0.03 + abs(p.x)*1.4 : 0.11;
  float m = step(p.y, notch);
  return mix(K,G,m)*scales(p);
}`;function Kg(){const t={selfLit:.32},e=Vt(2393903,t),n=Vt(1382172,t),s=Vt(14262908,t),r=Vt(6964006,{selfLit:.32,side:nn}),a=Vt(4860438,t),o=Cs({scale:1.02,bulk:1.06,selfLit:.32,taper:.72,pecs:.22,deltoid:.082,shoulderW:.265,colors:{torso:zn(Wg,t),pelvis:zn(Yg,t),shoulder:e,neck:e,upperArm:n,glove:e,thigh:n,shin:zn(qg,t),boot:e,skin:s,skinMat:s},head:{tex:cg(),scaleY:1.14},extras(c){const{j:u,head:d,headR:h,parts:f}=c;f.abdomen.material=zn(Xg,t),u.legL.children[0].material=zn(pc(1),t),u.legR.children[0].material=zn(pc(-1),t);{const E=f.torso.geometry.clone(),w=E.attributes.position,x=E.attributes.normal,T=E.attributes.uv,C=.36,D=.36,L=0;for(let H=0;H<w.count;H++){const Z=w.getX(H),K=w.getY(H),st=w.getZ(H);st>.01?T.setXY(H,Z/C+.5,(K-L)/D+.5):T.setXY(H,-1,-1),w.setXYZ(H,Z+x.getX(H)*.004,K+x.getY(H)*.004,st+x.getZ(H)*.004)}const G=lg();G.wrapS=G.wrapT=An;const I=new Ut(E,new Ue({map:G,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));I.name="emblem",f.torso.add(I)}const m=Fe(6160234,.34,.2);m.position.set(0,.1,.22),u.chest.add(m),c.emblemGlow=m,c.eyes=[];for(const E of[-1,1]){const w=new Ut(new ge(.026,10,6),Ke(10354554));w.position.copy(mo(h*.985,.468*Math.PI,E*.37)),w.scale.set(1.05,.55,.5),w.lookAt(w.position.clone().multiplyScalar(2)),d.add(w),c.eyes.push(w);const x=Fe(7208794,.07,.55);x.position.copy(w.position).multiplyScalar(1.05),d.add(x)}const M=It(new ge(h*1.1,28,12,0,Math.PI*2,0,.34*Math.PI),r,0,.006,-.006,d),g=It(new ge(h*1.11,24,14,Math.PI-.7,Math.PI+1.4,0,.62*Math.PI),r,0,0,-.008,d),p=It(new Ee(.006,.01,.12),s,0,h*1.07,.03,d);p.rotation.x=.3;const v=[],A=h*1.02;for(const[E,w,x,T]of[[26,1,.33,.36],[20,1.07,.37,.3]])for(let C=0;C<E;C++){const D=-1.25-(C+.5*(w>1))/(E-1)*(Math.PI*2-2.5),L=Math.PI/2+D,G=T*Math.PI,I=new P(-Math.cos(L)*Math.sin(G)*A*w,Math.cos(G)*A*w,Math.sin(L)*Math.sin(G)*A*w),H=new P(I.x,0,I.z).normalize(),Z=new P(H.x*.36,-1,H.z*.3-.1).normalize();v.push({from:I,dir:Z,len:x+C*7%5*.02,wave:.05,r:.032,phase:C*1.9+w*3})}for(const E of[-1,1])for(const w of[0,1,2]){const x=Math.PI/2+E*(.92+w*.17),T=.27*Math.PI,C=new P(-Math.cos(x)*Math.sin(T)*A*1.05,Math.cos(T)*A,Math.sin(x)*Math.sin(T)*A*1.05);v.push({from:C,dir:new P(-Math.cos(x)*.62,-1,.04).normalize(),len:.31+w*.03,wave:.045,r:.038,phase:w*2.3+E})}const S=new Ut(pg(v),r);d.add(S);for(const E of[-1,1])It(new As(.035,.1,3,6),r,E*.06,h*.86,.075,d).rotation.set(.5,0,E*1.15);const b=It(new vi(.038,.09,8),a,0,0,0,d);b.position.copy(mo(h*.93,.8*Math.PI,0)),b.rotation.x=Math.PI+.5,b.scale.set(1,1,.6),c.hair=[M,g,S]}}),l=Fe(3800954,2.2,0);return l.position.y=1.1,o.root.add(l),o.aura=l,o}const Zg=""+new URL("portrait-71rFsCbQ.jpg",import.meta.url).href,mc={chillblazer:{id:"chillblazer",name:"ChillBlazer",title:"Calm the storm.",color:3800954,portrait:Zg,model:Kg,stats:{speed:8.5,accel:60,jumpV:13,airJumps:1,airJumpV:11.5,gravity:32,radius:.45,height:1.85,maxChill:100,startChill:60},kit:{strike:{type:"meleeCombo",label:"Calm Strike",chillGain:5,panicRelief:.3,comboWindow:.5,hits:[{pose:"strike1",dur:.3,at:.1,stress:14,range:2.4,arc:2,lunge:4,sfx:"strike"},{pose:"strike2",dur:.3,at:.1,stress:14,range:2.4,arc:2,lunge:4,sfx:"strike"},{pose:"strike3",dur:.5,at:.22,stress:28,range:3,arc:2.8,lunge:5,knock:5,stagger:.6,sfx:"strike3",whoosh:!0}]},blast:{type:"projectile",label:"Chill Blast",cost:14,cooldown:.38,speed:30,stress:20,splash:2.2,homing:5,life:1.4,color:3800954,pose:"blast",stagger:.3},field:{type:"aura",label:"Calm Field",minCost:12,drain:24,radius:6.5,stressPerSec:18,panicPerSec:3,stun:!0,blocksPulses:!0,color:3800954,pose:"field"},five:{type:"channelRestore",label:"Take Five",chillPerSec:38,panicPerSec:8,pulseAfter:1.4,pulseRadius:6.5,pulseStress:22,pose:"five"},jump:{type:"multiJump",label:"Jump"},lock:{type:"lockOn",label:"Lock-on",range:30}}}};function Jg(i){return mc[i]||mc.chillblazer}const Ne=i=>document.getElementById(i),Xi=new P;class $g{constructor(t){this.g=t,this.el={hud:Ne("hud"),chill:Ne("chill-fill"),panic:Ne("panic-fill"),obj:Ne("objective"),boss:Ne("bossbar"),bossFill:Ne("boss-fill"),bossName:Ne("boss-name"),bossSub:Ne("boss-sub"),reticle:Ne("lock-reticle"),popups:Ne("popups"),flash:Ne("flash"),toast:Ne("toast"),fps:Ne("fps"),strip:Ne("compass-strip"),mini:Ne("minimap")},this.mctx=this.el.mini.getContext("2d"),this.miniT=0,this.toastT=0,this.btn={};for(const e of document.querySelectorAll(".act"))this.btn[e.dataset.act]=e;this.el.fps.classList.toggle("hidden",!t.settings.showFps)}show(t){this.el.hud.classList.toggle("hidden",!t)}objective(t){this.el.obj.textContent!==t&&(this.el.obj.textContent=t)}fps(t){this.el.fps.textContent=t.toFixed(0)+" fps"}flash(t=.5){this.el.flash.style.opacity=t,clearTimeout(this._ft),this._ft=setTimeout(()=>this.el.flash.style.opacity=0,160)}bossIntro(t,e,n){const s=Ne("boss-intro");s.querySelector(".bi-img").className="bi-img "+t,s.querySelector(".bi-name").textContent=e,s.querySelector(".bi-line").textContent=n,s.classList.add("show"),clearTimeout(this._bi),this._bi=setTimeout(()=>s.classList.remove("show"),2600)}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flashButton(t){const e=this.btn[t];e&&(e.classList.add("disabled"),setTimeout(()=>e.classList.remove("disabled"),250))}project(t){return Xi.copy(t).project(this.g.camera),Xi.z>1?null:{x:(Xi.x*.5+.5)*window.innerWidth,y:(-Xi.y*.5+.5)*window.innerHeight}}popup(t,e,n){const s=this.project(Xi.copy(e).setY(e.y+2));if(!s)return;this.el.popups.childElementCount>6&&this.el.popups.firstChild.remove();const r=document.createElement("div");r.className="pop"+(n?" big":""),r.textContent=t,r.style.left=s.x+(Math.random()-.5)*40+"px",r.style.top=s.y+"px",this.el.popups.appendChild(r),setTimeout(()=>r.remove(),900)}update(t){const e=this.g,n=e.player;this.el.chill.style.width=n.chill/n.maxChill*100+"%",this.el.panic.style.width=e.panic+"%",this.el.panic.parentElement.classList.toggle("danger",e.panic>70);const s=e.boss&&!e.boss.calmed?e.boss:null;if(this.el.boss.classList.toggle("hidden",!s),s){const a=Ne("boss-portrait");a.className!==s.kind&&(a.className=s.kind),this.el.bossFill.style.width=s.stressK*100+"%",this.el.bossName.textContent=s.name,this.el.bossSub.textContent=s.kind==="amp"?`STRESS  -  PHASE ${s.phase}/3`:s.dazed>0?"DAZED! x1.6 CALM":"STRESS"}if(e.lock){const a=this.project(Xi.copy(e.lock.pos).setY(e.lock.pos.y+(e.lock.centerY||1)));a?(this.el.reticle.classList.remove("hidden"),this.el.reticle.style.left=a.x+"px",this.el.reticle.style.top=a.y+"px"):this.el.reticle.classList.add("hidden")}else this.el.reticle.classList.add("hidden");this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.el.toast.classList.remove("show"));const r=n.kit;this.btn.blast.classList.toggle("disabled",n.chill<r.blast.cfg.cost),this.btn.blast.querySelector(".cd").style.setProperty("--p",(r.blast.cdFrac()*100).toFixed(0)+"%"),this.btn.field.classList.toggle("disabled",n.chill<r.field.cfg.minCost&&!r.field.busy()),this.btn.lock.classList.toggle("pressed",!!e.lock),this.miniT-=t,this.miniT<=0&&(this.miniT=.1,this.drawMinimap(),this.drawCompass())}drawCompass(){const t=this.g,e=t.cam.yaw,n=this.el.strip.parentElement.clientWidth,s=Math.PI*.9,r=Math.atan2(-Math.sin(e),-Math.cos(e)),a=[["N",Math.PI],["E",Math.PI/2],["S",0],["W",-Math.PI/2]].map(([l,c])=>({t:l,a:c,c:"#9fd",mk:!1}));for(const l of t.objectives())a.push({t:"◆",a:Math.atan2(l.pos.x-t.player.pos.x,l.pos.z-t.player.pos.z),c:l.id==="core"||l.id==="tower"||l.id==="park"?"#ff2bd6":"#ff6fe6",mk:!0});let o="";for(const l of a){let c=l.a-r;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;if(Math.abs(c)>s/2)continue;const u=n/2-c/(s/2)*(n/2);o+=`<span class="${l.mk?"mk":""}" style="left:${u.toFixed(0)}px;color:${l.c}">${l.t}</span>`}this.el.strip.innerHTML=o}drawMinimap(){const t=this.g,e=this.mctx,n=220,s=n/2,r=1.6,a=t.col.bounds,o=t.map,l=t.player.pos;e.clearRect(0,0,n,n),e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),e.fillStyle="#0b0718",e.fillRect(0,0,n,n),e.translate(s,s),e.rotate(t.cam.yaw);const c=r/o.scale;e.drawImage(o.canvas,-(l.x-a.minX)*r,-(l.z-a.minZ)*r,o.canvas.width*c,o.canvas.height*c);const u=(d,h)=>[(d-l.x)*r,(h-l.z)*r];for(const d of t.enemies){if(d.removed)continue;const[h,f]=u(d.pos.x,d.pos.z);e.fillStyle=d.calmed?"#39ff7a":"#ff2bd6",e.beginPath(),e.arc(h,f,d.boss?6:3.5,0,7),e.fill()}for(const d of t.objectives()){let[h,f]=u(d.pos.x,d.pos.z);const m=Math.hypot(h,f);m>s-10&&(h*=(s-10)/m,f*=(s-10)/m),e.fillStyle="#ff2bd6",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(h,f-8),e.lineTo(h+7,f),e.lineTo(h,f+8),e.lineTo(h-7,f),e.closePath(),e.fill(),e.stroke()}e.restore(),e.save(),e.translate(s,s),e.rotate(-(t.player.facing-Math.atan2(-Math.sin(t.cam.yaw),-Math.cos(t.cam.yaw)))),e.fillStyle="#39ff7a",e.shadowColor="#39ff7a",e.shadowBlur=8,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore()}}const Qg={low:1,medium:1.5,high:2},ba={h1:[[["citizen",4]],[["goon",2],["citizen",1]]],h2:[[["goon",3]],[["goon",2],["drone",1]]],h3:[[["drone",3]],[["goon",2],["drone",1]]]};class ah{constructor(t,e,n,s){this.canvas=t,this.input=e,this.sfx=n,this.settings=s;const r=s.quality;this.renderer=new ag({canvas:t,antialias:r==="high",powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=$e,this.applyQuality(),this.scene=new Du,this.scene.fog=new Po(1313316,r==="low"?.016:.011),this.scene.background=new Bt(656920),this.camera=new en(62,1,.1,600),this.scene.add(new nf(8023295,2757176,1.25));const a=new Ol(11068671,1.1);a.position.set(-40,80,30),this.scene.add(a);const o=new Ol(16730840,.5);o.position.set(30,20,-60),this.scene.add(o),this.col=new og,this.city=xg(this.scene,this.col,r),this.map=vg(this.city,this.col),this.fx=new Mg(this.scene,r),this.proj=new Sg(this.scene),this.hero=Jg("chillblazer"),this.player=new Tg(this.hero,this),r!=="low"&&(this.pLight=new rf(3800954,6,9,1.6),this.scene.add(this.pLight)),this.cam={yaw:0,pitch:.28,dist:5,userT:0,shake:0,pos:new P},this.enemies=[],this.pulses=[],this.markers={},this.hud=new $g(this),this.state="title",this.time=0,this.hitstopT=0,this.fps=60,this._fpsAcc=0,this._fpsN=0,this.frameTimes=[],this.makeMarkers(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.signalCd=12}applyQuality(){const t=Math.min(window.devicePixelRatio||1,Qg[this.settings.quality]||1.5);this.renderer.setPixelRatio(t),this.pixelRatio=t,this.camera&&this.resize()}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera&&(this.camera.aspect=t/e,this.camera.fov=t/e<1.2?75:62,this.camera.updateProjectionMatrix())}startSession(t){this.progress=t,this.clearEnemies(),this.proj.clear(),this.pulses.forEach(e=>this.scene.remove(e.mesh)),this.pulses=[],this.panic=15,this.player.chill=this.hero.stats.startChill,this.lock=null,this.waveIdx={},this.activeHotspot=null,this.boss=null,this.sessionTime=0,this.city.setTowerCalm(0),this.city.relay.dish.material.color.set(t.cleared.includes("h3")?3800954:16722902),this.player.pos.copy(this.checkpointPos()),this.player.vel.set(0,0,0),this.player.facing=Math.PI,this.cam.yaw=0,this.progress.checkpoint==="tower"&&(this.player.facing=Math.PI),this.refreshMarkers(),this.state="play",this.hud.show(!0),this.updateObjective()}checkpointPos(){const t=this.progress?.checkpoint||"start";return t==="start"?Kt.spawn.clone():t==="h1"?new P(-50,0,62):t==="h2"?new P(50,0,12):t==="h3"?new P(-50,0,-25):t==="park"?new P(25,0,-2):t==="tower"?new P(0,0,-100):Kt.spawn.clone()}stage(){const t=this.progress;return t.cleared.length<3?"hotspots":t.enforcer?t.amp?"won":t.ampCalmed?"core":"amp":"enforcer"}clearEnemies(){for(const t of this.enemies)t.remove();this.enemies=[],this.boss=null}addEnemy(t){return this.enemies.push(t),t}targets(){return this.enemies.filter(t=>!t.calmed&&!t.removed)}makeMarkers(){const t=(e,n)=>{const s=new Be;s.position.copy(e);const r=new Ut(new ln(.6,1.4,60,10,1,!0),new Ue({color:n,transparent:!0,opacity:.22,blending:hn,depthWrite:!1,side:nn,toneMapped:!1,fog:!1}));r.position.y=30,s.add(r);const a=new Ut(new Qe(10,10).rotateX(-Math.PI/2),new Ue({map:Oo(),color:n,transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1}));return a.position.y=.2,s.add(a),s.userData={beam:r,ring:a},this.scene.add(s),s};for(const e of Kt.hotspots)this.markers[e.id]=t(e.pos,16722902);this.markers.park=t(new P(Kt.park.x,0,Kt.park.z),16722902),this.markers.tower=t(Kt.towerPlaza.clone(),16722902)}refreshMarkers(){const t=this.stage();for(const e of Kt.hotspots){const n=this.markers[e.id],s=this.progress.cleared.includes(e.id);n.visible=!0,n.userData.beam.material.color.set(s?3800954:16722902),n.userData.ring.material.color.set(s?3800954:16722902),n.userData.beam.material.opacity=s?.08:.22}this.markers.park.visible=t==="enforcer"||this.progress.enforcer,this.markers.park.userData.beam.material.color.set(this.progress.enforcer?3800954:16722902),this.markers.tower.visible=t==="amp"||t==="core"}objectives(){const t=this.stage(),e=[];if(t==="hotspots")for(const n of Kt.hotspots)this.progress.cleared.includes(n.id)||e.push({id:n.id,name:n.name,pos:n.pos});return t==="enforcer"&&e.push({id:"park",name:"Amp Enforcer",pos:new P(Kt.park.x,0,Kt.park.z)}),t==="amp"&&e.push({id:"tower",name:"The Amp",pos:Kt.towerPlaza.clone()}),t==="core"&&e.push({id:"core",name:"Tower Core",pos:this.city.core.group.position.clone()}),e}updateObjective(){const t=this.stage();let e;if(this.activeHotspot){const n=Kt.hotspots.find(r=>r.id===this.activeHotspot),s=this.targets().length;e=`Calm ${n.name}: ${s} stressed left (wave ${this.waveIdx[n.id]+1}/${ba[n.id].length})`}else t==="hotspots"?e=`Calm the stress hotspots (${3-(3-this.progress.cleared.length)}/3 calmed). Follow the magenta beams.`:t==="enforcer"?e=this.boss?"Calm the Amp Enforcer! Dodge his charge so he hits the edge.":"Hotspots calm. The Amp Enforcer waits in the park plaza.":t==="amp"?e=this.boss?"Calm The Amp! Jump or Calm Field the pulses.":"Head north to the Amp Tower. End the OVERDRIVE signal.":t==="core"?e="The Amp is calm. Now calm the Amp Tower core!":e="The city is calm.";this.hud.objective(e)}spawnWave(t){const e=Kt.hotspots.find(r=>r.id===t),n=ba[t][this.waveIdx[t]];let s=0;for(const[r,a]of n)for(let o=0;o<a;o++,s++){const l=s/5*Math.PI*2+Math.random(),c=e.kind==="roof"?5:7,u=new P(e.pos.x+Math.cos(l)*c,e.pos.y,e.pos.z+Math.sin(l)*c);r==="drone"&&(u.y=e.pos.y+4);const d=r==="citizen"?zg:r==="goon"?kg:rh;this.addEnemy(new d(this,u,{hotspot:t}))}this.fx.ring(e.pos,16722902,1,12,.8),this.sfx.play("pulse")}encounterUpdate(t){const e=this.player.pos,n=this.stage();if(n==="hotspots"&&!this.activeHotspot)for(const s of Kt.hotspots){if(this.progress.cleared.includes(s.id))continue;const r=Math.hypot(e.x-s.pos.x,e.z-s.pos.z);if(s.kind==="roof"?r<15&&e.y>7:r<20){this.activeHotspot=s.id,this.waveIdx[s.id]=0,this.spawnWave(s.id),this.showToast(s.name.toUpperCase()+": CALM THE STORM"),this.updateObjective();break}}if(this.activeHotspot){const s=this.activeHotspot;this.targets().length===0&&(this.waveDelay=(this.waveDelay??1.2)-t,this.waveDelay<=0&&(this.waveDelay=void 0,this.waveIdx[s]++,this.waveIdx[s]>=ba[s].length?(this.progress.cleared.push(s),this.progress.checkpoint=s,this.activeHotspot=null,this.lock=null,this.addPanic(-12),s==="h3"&&this.city.relay.dish.material.color.set(3800954),this.showToast(Kt.hotspots.find(a=>a.id===s).name.toUpperCase()+" CALMED"),this.sfx.play("win"),this.save(),this.refreshMarkers(),this.stage()==="enforcer"&&setTimeout(()=>this.showToast("THE AMP ENFORCER IS IN THE PARK"),1800)):this.spawnWave(s),this.updateObjective()));const r=Kt.hotspots.find(a=>a.id===s);this.activeHotspot&&Math.hypot(e.x-r.pos.x,e.z-r.pos.z)>55&&(this.clearEnemies(),this.activeHotspot=null,this.updateObjective())}if(n==="enforcer"&&!this.boss){const s=Kt.park;Math.hypot(e.x-s.x,e.z-s.z)<17&&(this.clearEnemies(),this.boss=this.addEnemy(new Gg(this,new P(s.x,0,s.z-8),new P(s.x,0,s.z))),this.hud.bossIntro("enforcer","AMP ENFORCER","Dodge the charge. Let him hit the edge, then calm him."),this.sfx.play("slam"),this.updateObjective())}if(n==="amp"&&!this.boss){const s=Kt.towerPlaza;Math.hypot(e.x-s.x,e.z-s.z)<24&&(this.clearEnemies(),this.progress.checkpoint="tower",this.save(),this.boss=this.addEnemy(new Hg(this,new P(s.x,0,s.z-8),s.clone())),this.hud.bossIntro("amp","THE AMP",'"Panic sells, hero. And business is BOOMING."'),this.sfx.play("pulse"),this.flash(),this.updateObjective())}n==="core"&&!this.boss&&(this.boss=this.addEnemy(new Vg(this,this.city.core)),this.updateObjective());for(const s of this.enemies)s.calmed&&s.calmT>25&&!s.boss&&s.remove();this.enemies=this.enemies.filter(s=>!s.removed)}onCalmed(t){if(this.addPanic(t.boss?-30:-4),this.player.addChill(t.boss?40:6),this.lock===t&&(this.lock=null,this.cycleLock(30,!0)),t.kind==="enforcer"&&(this.progress.enforcer=!0,this.progress.checkpoint="park",this.boss=null,this.showToast("AMP ENFORCER CALMED"),this.sfx.play("win"),this.save(),this.refreshMarkers(),setTimeout(()=>this.state==="play"&&this.showToast("NOW: THE AMP TOWER (NORTH)"),2e3)),t.kind==="amp"){this.progress.ampCalmed=!0,this.boss=null;for(const e of this.enemies)e.kind==="drone"&&!e.calmed&&e.becomeCalm();this.pulses.forEach(e=>this.scene.remove(e.mesh)),this.pulses=[],this.showToast("THE AMP IS CALM... NOW THE TOWER"),this.save()}t.kind==="core"&&(this.progress.amp=!0,this.win()),this.updateObjective()}spawnPulse(t,e){const n=new Ut(new ln(1,1,1.1,48,1,!0),new Ue({color:16722902,transparent:!0,opacity:.55,blending:hn,side:nn,depthWrite:!1,toneMapped:!1}));n.position.set(t.x,.55,t.z),this.scene.add(n),this.pulses.push({c:t.clone(),r:.5,speed:e,max:30,mesh:n,hit:!1}),this.sfx.play("pulse"),this.flash(),this.shake(.25)}pulsesUpdate(t){const e=this.player;for(let n=this.pulses.length-1;n>=0;n--){const s=this.pulses[n];s.r+=s.speed*t,s.mesh.scale.set(s.r,1,s.r),s.mesh.material.opacity=.55*(1-s.r/s.max);const r=Math.hypot(e.pos.x-s.c.x,e.pos.z-s.c.z);if(!s.hit&&Math.abs(r-s.r)<.8){const a=this.col.groundAt(e.pos.x,e.pos.z,e.radius,e.pos.y);e.kit.field.blocks()?(s.hit=!0,this.popup("WHOOSH!",e.pos),this.fx.burst(e.pos.clone().setY(e.pos.y+1),3800954,10,4),this.stats.pulsesBlocked++):e.pos.y-a<.9?(s.hit=!0,e.hurt(14,new P(e.pos.x-s.c.x,0,e.pos.z-s.c.z).normalize(),9),this.stats.pulsesHit++):(s.hit=!0,this.stats.pulsesJumped++,this.popup("WHOOSH!",e.pos))}s.r>s.max&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),this.pulses.splice(n,1))}}projUpdate(t){const e=this.player;for(const n of this.proj.list){if(n.dead)continue;if(n.age+=t,n.homing&&n.target&&!n.target.calmed){const a=n.target.pos.clone().setY(n.target.pos.y+(n.target.centerY||1)).sub(n.mesh.position).normalize().multiplyScalar(n.speed);n.vel.lerp(a,Math.min(1,n.homing*t))}n.mesh.position.addScaledVector(n.vel,t);const s=n.mesh.position;let r=!1;if((n.age>n.life||s.y<.05||this.col.raycast(s.x,s.y,s.z,s.x+.01,s.y,s.z)<1)&&(r=!0),n.owner==="player"){for(const a of this.targets())if(a.pos.clone().setY(a.pos.y+(a.centerY||1)).distanceTo(s)<a.radius+.5+(a.boss?a.height*.3:.3)){r=!0;break}if(r){for(const a of this.targets()){const l=a.pos.clone().setY(a.pos.y+(a.centerY||1)).distanceTo(s);l<n.splash+a.radius+(a.boss?1:0)&&(a.calmHit(n.stress*(l<a.radius+1.2?1:.5),{stagger:n.stagger,knock:2,dir:n.vel.clone().setY(0).normalize(),kind:"blast"}),this.panic=Math.max(0,this.panic-.5))}this.fx.burst(s,8257418,12,5,.6),this.fx.ring(s.clone().setY(Math.max(0,s.y-1)),3800954,.3,n.splash,.35),this.popup("WHOOSH!",s)}}else{const o=e.pos.clone().setY(e.pos.y+1).distanceTo(s);e.kit.field.blocks()&&e.pos.distanceTo(s)<e.kit.field.cfg.radius?(r=!0,this.fx.burst(s,3800954,8,3,.5)):o<.65&&(r=!0,e.hurt(n.panic,n.vel.clone().setY(0).normalize(),5)&&this.stats.projHits++),r&&this.fx.burst(s,16722902,8,4,.5)}r&&this.proj.kill(n)}this.proj.list=this.proj.list.filter(n=>!n.dead)}addPanic(t){this.state==="play"&&(this.panic=Math.max(0,Math.min(100,this.panic+t)),this.panic>=100&&this.lose())}cycleLock(t=30,e=!1){const n=this.player,s=this.targets().filter(a=>a.pos.distanceTo(n.pos)<t);if(!s.length){this.lock=null;return}const r=Math.atan2(-Math.sin(this.cam.yaw),-Math.cos(this.cam.yaw));if(s.sort((a,o)=>Math.abs(si(Math.atan2(a.pos.x-n.pos.x,a.pos.z-n.pos.z),r))*8+a.pos.distanceTo(n.pos)-(Math.abs(si(Math.atan2(o.pos.x-n.pos.x,o.pos.z-n.pos.z),r))*8+o.pos.distanceTo(n.pos))),this.lock&&s.includes(this.lock)&&!e){const a=s.indexOf(this.lock);this.lock=s[(a+1)%s.length],s.length===1&&(this.lock=null)}else this.lock=s[0];e||this.sfx.play("lock")}update(t){if(this.time+=t,this.city.update(this.time),this.state!=="play"){this.titleCam(t);return}this.sessionTime+=t,this.progress.playTime+=t,this.hitstopT>0&&(this.hitstopT-=t,t*=.15);const e=this.input.sample(),n=this.settings.sens;(e.look.x||e.look.y)&&(this.cam.yaw-=e.look.x*.0065*n,this.cam.pitch+=e.look.y*.005*n*(this.settings.invertY?-1:1),this.cam.userT=.8),this.cam.pitch=Math.max(-.3,Math.min(1.15,this.cam.pitch)),this.cam.userT-=t,this.lock&&(this.lock.calmed||this.lock.removed||this.lock.pos.distanceTo(this.player.pos)>40)&&(this.lock=null),this.player.update(t,e,this.cam.yaw);for(const r of this.enemies)r.removed||r.update(t);if(this.projUpdate(t),this.pulsesUpdate(t),this.fx.update(t),this.encounterUpdate(t),this.signalCd-=t,this.signalCd<=0&&this.stage()!=="won"&&!this.progress.ampCalmed){this.signalCd=15,this.flash(.35),this.sfx.play("pulse"),this.player.kit.field.blocks()||this.player.kit.five.busy()||(this.addPanic(this.stage()==="amp"?2:4),this.stats.signal++);for(const a of this.targets())a.boss||(a.stress=Math.min(a.maxStress,a.stress+a.maxStress*.15));this.city.tower.bglow.scale.setScalar(40)}this.targets().some(r=>r.pos.distanceTo(this.player.pos)<18)||(this.panic=Math.max(0,this.panic-1.5*t)),this.pLight&&(this.pLight.position.copy(this.player.pos).add(new P(0,1.6,0)),this.pLight.intensity=4+(this.player.kit.field.busy()||this.player.kit.five.busy()?10:0)),this.updateCamera(t),this.hud.update(t),this._saveT=(this._saveT||0)+t,this._saveT>15&&(this._saveT=0,this.save())}updateCamera(t){const e=this.cam,n=this.player;if(this.lock&&e.userT<=0){const c=Math.atan2(-(this.lock.pos.x-n.pos.x),-(this.lock.pos.z-n.pos.z));e.yaw+=si(c,e.yaw)*(1-Math.exp(-4*t))}const s=new P(n.pos.x,n.pos.y+1.55,n.pos.z),r=e.dist*(this.boss&&this.boss.kind!=="core"?1.25:1),a=new P(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch)),o=s.clone().addScaledVector(a,r),l=this.col.raycast(s.x,s.y,s.z,o.x,o.y,o.z,.3);if(l<1&&o.lerpVectors(s,o,Math.max(.15,l-.06)),o.y<.4&&(o.y=.4),e.pos.lerp(o,1-Math.exp(-18*t)),e.pos.distanceTo(o)>4&&e.pos.copy(o),this.camera.position.copy(e.pos),e.shake>0){e.shake=Math.max(0,e.shake-t);const c=e.shake*.5;this.camera.position.add(new P((Math.random()-.5)*c,(Math.random()-.5)*c,(Math.random()-.5)*c))}this.camera.lookAt(s)}titleCam(t){const e=this.player;if(this.state==="model"){const n=this.modelView;e.pos.set(3,0,70),e.facing=n.yaw;const s=n.pose?Ht[n.pose](this.time,.35):Ht.idle(this.time);e.anim.apply(s,t,30),e.rig.root.position.copy(e.pos),e.rig.root.rotation.y=e.facing,e.shadow.position.set(3,.03,70),this.camera.position.set(3,n.h,70+n.dist),this.camera.lookAt(3,n.look,70);return}if(this.state==="title"&&(e.pos.set(0,0,70),e.facing=Math.PI+Math.sin(this.time*.3)*.5,e.anim.apply(jg(this.time),t),e.rig.root.position.copy(e.pos),e.rig.root.rotation.y=e.facing,e.shadow.position.set(e.pos.x,.03,e.pos.z)),this.state==="title"){const n=this.time*.08;this.camera.position.set(e.pos.x+Math.sin(n)*7-2,2.2,e.pos.z-6+Math.cos(n)*2),this.camera.lookAt(e.pos.x-1.6,1.7,e.pos.z-1)}}render(){this.renderer.render(this.scene,this.camera)}tick(t,e){this._fpsAcc+=e,this._fpsN++,this._fpsAcc>1&&(this.fps=this._fpsN/this._fpsAcc,this._fpsAcc=0,this._fpsN=0,this.hud.fps(this.fps)),this.frameTimes.push(e),this.frameTimes.length>600&&this.frameTimes.shift(),this.update(t),this.render()}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t){this.cam.shake=Math.max(this.cam.shake,t)}flash(t){this.hud.flash(t)}popup(t,e,n){this.hud.popup(t,e,n)}showToast(t,e){this.hud.toast(t,e)}flashButton(t){this.hud.flashButton(t)}win(){this.state="end",this.progress.wins++;const t=this.sessionTime;(!this.progress.bestTime||t<this.progress.bestTime)&&(this.progress.bestTime=t),this.city.setTowerCalm(1),this.sfx.play("win"),this.save(),this.onEnd?.("win")}lose(){this.state==="play"&&(this.state="end",this.sfx.play("lose"),this.save(),this.onEnd?.("lose"))}save(){this.onSave?.()}}const jg=i=>Ht.idle(i);Object.defineProperty(ah.prototype,"stats",{get(){return this._stats||(this._stats={pulsesHit:0,pulsesJumped:0,pulsesBlocked:0,projHits:0,signal:0})}});const Ea=["jump","strike","blast","field","five","lock"];class t_{constructor(t){this.move={x:0,y:0},this.look={x:0,y:0},this.held=Object.fromEntries(Ea.map(a=>[a,!1])),this.pressed=new Set,this.released=new Set,this.keys=new Set,this.joy=null,this.lookPtr=null,this.mouse=null,this.virtual=null,this.enabled=!0,this.usingTouch=!1,this.base=document.getElementById("joy-base"),this.knob=document.getElementById("joy-knob"),this._joyHome();const e=document.getElementById("joy-zone");e.addEventListener("pointerdown",a=>{if(a.preventDefault(),this.usingTouch||(this.usingTouch=a.pointerType==="touch"),this.joy)return;e.setPointerCapture?.(a.pointerId),this.joy={id:a.pointerId,ox:a.clientX,oy:a.clientY};const o=e.getBoundingClientRect();this.base.style.left=a.clientX-o.left+"px",this.base.style.top=a.clientY-o.top+"px",this._knob(0,0)}),e.addEventListener("pointermove",a=>{if(!this.joy||a.pointerId!==this.joy.id)return;a.preventDefault();let o=a.clientX-this.joy.ox,l=a.clientY-this.joy.oy;const c=46,u=Math.hypot(o,l);u>c&&(o*=c/u,l*=c/u),this._knob(o,l),this.move.x=o/c,this.move.y=-l/c});const n=a=>{!this.joy||a.pointerId!==this.joy.id||(this.joy=null,this.move.x=this.move.y=0,this._joyHome())};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),t.addEventListener("pointerdown",a=>{if(this.usingTouch||(this.usingTouch=a.pointerType==="touch"),a.pointerType==="mouse"){this.mouse={x:a.clientX,y:a.clientY,moved:0,btn:a.button},a.button===2&&this._press("blast");return}this.lookPtr||(this.lookPtr={id:a.pointerId,x:a.clientX,y:a.clientY},t.setPointerCapture?.(a.pointerId))}),t.addEventListener("pointermove",a=>{if(a.pointerType==="mouse"){if(this.mouse){const o=a.clientX-this.mouse.x,l=a.clientY-this.mouse.y;this.look.x+=o,this.look.y+=l,this.mouse.moved+=Math.abs(o)+Math.abs(l),this.mouse.x=a.clientX,this.mouse.y=a.clientY}return}!this.lookPtr||a.pointerId!==this.lookPtr.id||(this.look.x+=a.clientX-this.lookPtr.x,this.look.y+=a.clientY-this.lookPtr.y,this.lookPtr.x=a.clientX,this.lookPtr.y=a.clientY)});const s=a=>{if(a.pointerType==="mouse"){this.mouse&&this.mouse.btn===0&&this.mouse.moved<6&&this._press("strike"),this.mouse?.btn===2&&this._release("blast"),this.mouse=null;return}this.lookPtr&&a.pointerId===this.lookPtr.id&&(this.lookPtr=null)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("contextmenu",a=>a.preventDefault());for(const a of document.querySelectorAll(".act")){const o=a.dataset.act,l=document.createElement("div");l.className="cd",a.appendChild(l),a.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),this.usingTouch||(this.usingTouch=u.pointerType==="touch"),a.setPointerCapture?.(u.pointerId),a.classList.add("pressed"),this._press(o)});const c=u=>{u.preventDefault(),a.classList.remove("pressed"),this._release(o)};a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c)}const r={Space:"jump",KeyJ:"strike",KeyK:"blast",KeyQ:"field",KeyR:"five",KeyF:"lock",Tab:"lock"};window.addEventListener("keydown",a=>{if(a.repeat)return;this.keys.add(a.code);const o=r[a.code];o&&(a.preventDefault(),this._press(o)),(a.code==="Escape"||a.code==="KeyP")&&this.onPause?.()}),window.addEventListener("keyup",a=>{this.keys.delete(a.code);const o=r[a.code];o&&this._release(o)}),window.addEventListener("blur",()=>{this.keys.clear();for(const a of Ea)this._release(a);this.move.x=this.move.y=0,this.joy=null,this._joyHome()})}_joyHome(){this.base.style.left="84px",this.base.style.top="calc(100% - 78px)",this._knob(0,0)}_knob(t,e){this.knob.style.transform=`translate(${t}px, ${e}px)`}_press(t){this.held[t]||this.pressed.add(t),this.held[t]=!0}_release(t){this.held[t]&&this.released.add(t),this.held[t]=!1}sample(){let t=this.move.x,e=this.move.y;const n=this.keys;n.has("KeyW")&&(e+=1),n.has("KeyS")&&(e-=1),n.has("KeyA")&&(t-=1),n.has("KeyD")&&(t+=1);let s=this.look.x,r=this.look.y;this.look.x=this.look.y=0,n.has("ArrowLeft")&&(s-=8),n.has("ArrowRight")&&(s+=8),n.has("ArrowUp")&&(r-=5),n.has("ArrowDown")&&(r+=5);const a={...this.held},o=new Set(this.pressed),l=new Set(this.released);if(this.pressed.clear(),this.released.clear(),this.virtual){const u=this.virtual;u.move&&(t+=u.move.x,e+=u.move.y),u.look&&(s+=u.look.x,r+=u.look.y,u.look=null);for(const d of Ea){const h=!!u.held?.[d];h&&!u._prev?.[d]&&o.add(d),!h&&u._prev?.[d]&&l.add(d),a[d]=a[d]||h}u._prev={...u.held};for(const d of u.taps||[])o.add(d),l.add(d);u.taps=[]}const c=Math.hypot(t,e);return c>1&&(t/=c,e/=c),this.enabled?{move:{x:t,y:e},look:{x:s,y:r},held:a,pressed:o,released:l}:{move:{x:0,y:0},look:{x:0,y:0},held:{},pressed:new Set,released:new Set}}}class e_{constructor(){this.ctx=null,this.master=null,this.vol=.7,this.noiseBuf=null,this.pad=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.vol,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*1;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=t)}_env(t,e,n,s,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+r)}tone(t,e,n,s,r=.2,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,n),o+s),this._env(c,o,.01,r,s),l.connect(c).connect(this.master),l.start(o),l.stop(o+s+.05)}noise(t,e,n,s=.25,r=1.2,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createBufferSource();l.buffer=this.noiseBuf;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.value=r,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(e,o+n);const u=this.ctx.createGain();this._env(u,o,.03,s,n),l.connect(c).connect(u).connect(this.master),l.start(o),l.stop(o+n+.05)}play(t){switch(t){case"whoosh":this.noise(400,2400,.35,.3);break;case"strike":this.noise(900,3e3,.12,.2,2),this.tone("triangle",520,300,.12,.12);break;case"strike3":this.noise(500,3200,.25,.3,1.5),this.tone("sine",330,660,.25,.18);break;case"blast":this.tone("sine",880,220,.3,.2),this.noise(1500,500,.25,.12);break;case"calm":[523,659,784,1047].forEach((e,n)=>this.tone("sine",e,e,.5,.12,n*.07));break;case"jump":this.tone("triangle",300,600,.15,.12);break;case"hit":this.tone("square",160,60,.2,.15),this.noise(300,120,.2,.2);break;case"field":this.tone("sine",196,392,.6,.12),this.tone("sine",294,588,.6,.08);break;case"five":[392,494,587].forEach((e,n)=>this.tone("sine",e,e,.9,.07,n*.15));break;case"pulse":this.tone("sawtooth",110,55,.6,.15),this.tone("square",220,880,.3,.05);break;case"hype":this.tone("sawtooth",660,990,.18,.08);break;case"charge":this.tone("sawtooth",80,240,.8,.15);break;case"slam":this.noise(200,60,.5,.4,.8),this.tone("sine",90,40,.5,.3);break;case"lock":this.tone("square",1200,1600,.06,.06);break;case"win":[523,659,784,1047,1319].forEach((e,n)=>this.tone("triangle",e,e,.7,.12,n*.12));break;case"lose":[392,330,262].forEach((e,n)=>this.tone("sawtooth",e,e*.9,.5,.08,n*.2));break;case"ui":this.tone("sine",700,900,.08,.08);break}}startPad(){if(!this.ctx||this.pad)return;const t=this.ctx.createGain();t.gain.value=.035;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=700;const n=[110,164.8,220.5].map(a=>{const o=this.ctx.createOscillator();return o.type="sawtooth",o.frequency.value=a,o.connect(e),o.start(),o}),s=this.ctx.createOscillator();s.frequency.value=.08;const r=this.ctx.createGain();r.gain.value=300,s.connect(r).connect(e.frequency),s.start(),e.connect(t).connect(this.master),this.pad={g:t,os:n,lfo:s}}}const ko="chillblazer-brawler-save-v1",gc={quality:"medium",sens:1,vol:.7,invertY:!1,showFps:!1};function Dr(){return{hero:"chillblazer",cleared:[],enforcer:!1,ampCalmed:!1,amp:!1,wins:0,bestTime:0,playTime:0,checkpoint:"start"}}function n_(){try{const i=JSON.parse(localStorage.getItem(ko)||"null");if(i&&i.v===1)return{settings:{...gc,...i.settings},progress:i.progress?{...Dr(),...i.progress}:null}}catch{}return{settings:{...gc},progress:null}}function i_(i,t){try{localStorage.setItem(ko,JSON.stringify({v:1,settings:i,progress:t,savedAt:Date.now()}))}catch{}}function s_(){try{localStorage.removeItem(ko)}catch{}}function r_(i,t){const e=()=>{var h;return(h=i.input).virtual||(h.virtual={move:{x:0,y:0},held:{},taps:[]})},n={on:!1,t:0,holdUntil:{},tapCd:{},goal:null,lastPos:new P,log:[]},s={app:t,game:i,state(){const h=i.player,f=i.boss;return{screen:i.state,stage:i.progress?i.stage():null,progress:i.progress?JSON.parse(JSON.stringify(i.progress)):null,player:{x:+h.pos.x.toFixed(2),y:+h.pos.y.toFixed(2),z:+h.pos.z.toFixed(2),facing:+h.facing.toFixed(2),chill:+h.chill.toFixed(1),grounded:h.grounded,action:h.action?.pose||null,jumps:h.jumpCount},panic:+(i.panic??0).toFixed(1),cam:{yaw:+i.cam.yaw.toFixed(3),pitch:+i.cam.pitch.toFixed(3)},enemies:i.enemies.filter(m=>!m.removed).map(m=>({kind:m.kind,stress:+m.stress.toFixed(1),max:m.maxStress,calmed:m.calmed,state:m.state,d:+m.pos.distanceTo(h.pos).toFixed(1)})),boss:f?{name:f.name,kind:f.kind,stress:+f.stress.toFixed(1),max:f.maxStress,phase:f.phase||0}:null,lock:i.lock?i.lock.kind:null,activeHotspot:i.activeHotspot,fps:+i.fps.toFixed(1),pulses:{...i.stats},fieldOn:h.kit.field.busy(),fiveOn:h.kit.five.busy(),pixelRatio:i.pixelRatio,drawCalls:i.renderer.info.render.calls,tris:i.renderer.info.render.triangles}},setVirtual(h){Object.assign(e(),h)},tap(h){e().taps.push(h)},hold(h,f){e().held[h]=f},teleport(h,f,m){i.player.pos.set(h,f,m),i.player.vel.set(0,0,0),i.cam.pos.set(h,f+3,m+6)},faceCamera(h){i.cam.yaw=h},frameStats(){const h=i.frameTimes.slice(-300),f=h.reduce((M,g)=>M+g,0)/Math.max(1,h.length),m=[...h].sort((M,g)=>M-g);return{avgFps:1/f,p95ms:(m[Math.floor(m.length*.95)]||0)*1e3,n:h.length}},autopilot(h,f){if(n.on=h,n.goal=f?new P(f.x,0,f.z):null,!h){const m=e();m.move={x:0,y:0},m.held={}}},apLog:()=>n.log,modelView(h={}){i.modelView={yaw:0,dist:2.6,h:1.4,look:1.15,pose:null,...h},i.state="model",i.hud.show(!1);for(const f of document.querySelectorAll(".screen"))f.classList.add("hidden")}};window.__CB=s;const r=i.input.sample.bind(i.input);i.input.sample=()=>(a.on&&i.state==="play"?o(1/60):n.on&&i.state==="play"&&u(1/60),r());const a={on:!1,i:0,t:0,wps:[],log:[]};s.climb=h=>{Object.assign(a,{on:!0,i:0,t:0,wps:h,log:[]})},s.climbState=()=>({on:a.on,i:a.i,n:a.wps.length,log:a.log});function o(h){const f=e(),m=i.player,M=a.wps[a.i];if(!M){a.on=!1,f.move={x:0,y:0};return}a.t+=h;const g=new P(M.x-m.pos.x,0,M.z-m.pos.z),p=g.length();f.move=p>.3?l(g.normalize()):{x:0,y:0},M.j&&m.grounded&&p<(M.trigger||2.2)&&m.pos.y<(M.y??99)-.3&&(f.taps.push("jump"),a.jumped=!0),M.j===2&&a.jumped&&!m.grounded&&m.vel.y<3&&m.airJumps>0&&(f.taps.push("jump"),a.jumped=!1),p<.6&&m.pos.y>=(M.y??-1)-.15&&m.grounded?(a.log.push({i:a.i,y:+m.pos.y.toFixed(2),t:+a.t.toFixed(2)}),a.i++,a.t=0,a.jumped=!1):a.t>8&&(a.log.push({i:a.i,fail:!0,x:+m.pos.x.toFixed(2),y:+m.pos.y.toFixed(2),z:+m.pos.z.toFixed(2)}),a.on=!1,f.move={x:0,y:0})}function l(h){const f=i.cam.yaw,m=new P(-Math.sin(f),0,-Math.cos(f)),M=new P(Math.cos(f),0,-Math.sin(f));return{x:h.dot(M),y:h.dot(m)}}function c(h,f){const m=performance.now();(n.tapCd[h]||0)>m||(n.tapCd[h]=m+f*1e3,e().taps.push(h))}function u(h){const f=e(),m=i.player,M=performance.now();f.held=f.held||{};for(const L of["field","five"])f.held[L]=(n.holdUntil[L]||0)>M;const g=i.targets().filter(L=>L.pos.distanceTo(m.pos)<45);let p=i.lock&&!i.lock.calmed?i.lock:null;!p&&g.length&&c("lock",.5),p||(p=g.sort((L,G)=>L.pos.distanceTo(m.pos)-G.pos.distanceTo(m.pos))[0]);for(const L of i.pulses){const I=(Math.hypot(m.pos.x-L.c.x,m.pos.z-L.c.z)-L.r)/L.speed;!L.hit&&!L.bot&&I>.02&&I<.3&&m.pos.y-i.col.groundAt(m.pos.x,m.pos.z,m.radius,m.pos.y)<.5&&(L.bot=!0,n.holdUntil.five=0,f.held.five=!1,m.chill>30&&Math.random()<.35?(n.holdUntil.field=M+700,f.held.field=!0):f.taps.push("jump"))}const v=i.boss&&i.boss.kind==="amp"?i.boss:null;if(v&&v.state==="overdrive"&&v.stateT>.8&&!n.odJump&&(n.odJump=!0,m.chill>30?(n.holdUntil.field=M+900,f.held.field=!0):f.taps.push("jump")),v&&v.state!=="overdrive"&&(n.odJump=!1),f.held.five){f.move={x:0,y:0},g.some(L=>L.pos.distanceTo(m.pos)<6&&L.kind!=="core")&&(n.holdUntil.five=0);return}if(!p){if((m.chill<70||i.panic>12)&&!g.length){n.holdUntil.five=M+1500,f.move={x:0,y:0};return}if(n.goal){const L=n.goal.clone().sub(m.pos).setY(0);L.length()>1.5?(f.move=l(L.normalize()),d(h,f)):f.move={x:0,y:0}}else f.move={x:0,y:0};return}const A=p.pos.clone().sub(m.pos),S=A.y;A.y=0;const b=A.length()-(p.radius||.5),E=A.clone().normalize();if(p.kind==="enforcer"&&(p.state==="tele"||p.state==="charge")){const L=new P(E.z,0,-E.x);f.move=l(L);return}if(p.kind==="enforcer"&&p.state==="slam"){f.move=l(E.clone().multiplyScalar(-1));return}if((i.proj.list.some(L=>L.owner==="enemy"&&!L.dead&&L.mesh.position.distanceTo(m.pos)<6)||i.panic>65)&&m.chill>30&&!m.kit.field.busy()&&(n.holdUntil.field=M+700),g.filter(L=>L.pos.distanceTo(m.pos)<5).length>=3&&m.chill>35&&!m.kit.field.busy()&&(n.holdUntil.field=M+1400),m.chill<18&&b>7&&p.kind!=="amp"){n.holdUntil.five=M+1800,f.move={x:0,y:0};return}const T=p.kind==="drone"||p.kind==="core";(T||b>5)&&m.chill>=16&&c("blast",.42);const C=p.kind==="amp"?1.6:p.kind==="drone"?5:1.4;T&&n.goal&&m.pos.clone().setY(0).distanceTo(n.goal)>7?(f.move=l(n.goal.clone().sub(m.pos).setY(0).normalize()),d(h,f)):b>C?(f.move=l(E),d(h,f)):f.move={x:0,y:0},b<2.6&&Math.abs(S)<1.6&&c("strike",.14),p.kind==="core"&&b<3&&(c("jump",.8),c("strike",.14))}function d(h,f){const m=i.player;n.t+=h,n.t>.5&&(m.pos.distanceTo(n.lastPos)<.6&&Math.hypot(f.move.x,f.move.y)>.5&&c("jump",.4),n.lastPos.copy(m.pos),n.t=0)}}const Wt=i=>document.getElementById(i),oh=n_(),rn=oh.settings;let Ze=oh.progress;const Wn=new e_;Wn.setVolume(rn.vol);const lh=new t_(Wt("game")),Se=new ah(Wt("game"),lh,Wn,rn),Ur=()=>i_(rn,Ze);Se.onSave=()=>{Ze=Se.progress,Ur()};const a_=["screen-title","screen-pause","screen-settings","screen-end"];function ai(i){for(const t of a_)Wt(t).classList.toggle("hidden",t!==i)}function ch(){const i=Ze&&!Ze.amp&&(Ze.cleared.length||Ze.enforcer||Ze.playTime>5);Wt("btn-continue").classList.toggle("hidden",!i);const t=Ze;let e="";t&&(e=`Saved: ${t.cleared.length}/3 hotspots calmed${t.enforcer?", Enforcer calmed":""}${t.ampCalmed&&!t.amp?", Amp calmed":""}${t.wins?` | City calmed x${t.wins}, best ${hh(t.bestTime)}`:""}`),Wt("save-info").textContent=e}const hh=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Nr(){Se.state="title",Se.hud.show(!1),Se.clearEnemies(),ai("screen-title"),ch()}function Fr(i){Wn.unlock(),Wn.startPad(),Ze=i,Ur(),ai(null),Se.startSession(Ze),o_()}function o_(){const i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&i.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}function Or(){Se.state==="play"&&(Se.state="pause",Se.save(),ai("screen-pause"))}function Go(){ai(null),Se.state="play",go=performance.now()}lh.onPause=()=>{Se.state==="play"?Or():Se.state==="pause"&&Go()};Wt("btn-new").onclick=()=>{Wn.unlock(),Wn.play("ui"),Fr(Dr())};Wt("btn-continue").onclick=()=>{Wn.unlock(),Wn.play("ui"),Fr(Ze)};Wt("btn-pause").onclick=Or;Wt("btn-pause").addEventListener("pointerdown",i=>i.stopPropagation());Wt("btn-resume").onclick=Go;Wt("btn-quit").onclick=()=>{Se.save(),Nr()};let uh="screen-title";const fh=i=>{uh=i,Wt("set-quality").value=rn.quality,Wt("set-sens").value=rn.sens,Wt("set-vol").value=rn.vol,Wt("set-invert").checked=rn.invertY,Wt("set-fps").checked=rn.showFps,ai("screen-settings")};Wt("btn-settings").onclick=()=>fh("screen-title");Wt("btn-settings2").onclick=()=>fh("screen-pause");Wt("btn-settings-done").onclick=()=>{const i=Wt("set-quality").value,t=i!==rn.quality;Object.assign(rn,{quality:i,sens:+Wt("set-sens").value,vol:+Wt("set-vol").value,invertY:Wt("set-invert").checked,showFps:Wt("set-fps").checked}),Wn.setVolume(rn.vol),Wt("fps").classList.toggle("hidden",!rn.showFps),Ur(),t&&(Se.applyQuality(),Se.showToast?.("Quality saved (full effect after reload)")),ai(uh)};Wt("btn-reset").onclick=()=>{s_(),Ze=null,ch(),ai("screen-title")};Se.onEnd=i=>{Ze=Se.progress,Ur(),Se.hud.show(!1),ai("screen-end"),Wt("screen-end").classList.toggle("win",i==="win"),Wt("screen-end").classList.toggle("lose",i!=="win"),i==="win"?(Wt("end-title").textContent="CITY CALMED",Wt("end-text").textContent=`The OVERDRIVE signal is silent and the Amp Tower glows green. The Amp sat down, took five, and breathed. Calm the storm. Time ${hh(Se.sessionTime)}.`,Wt("btn-end-primary").textContent="PLAY AGAIN"):(Wt("end-title").textContent="THE CITY PANICKED",Wt("end-text").textContent="Panic hit 100%. Take Five to bring it down, calm enemies before they swarm you, and jump or Calm Field through OVERDRIVE pulses.",Wt("btn-end-primary").textContent="RETRY FROM CHECKPOINT"),Wt("btn-end-primary").onclick=()=>Fr(i==="win"?Dr():Ze)};Wt("btn-end-title").onclick=Nr;document.addEventListener("visibilitychange",()=>{document.hidden&&Or()});let go=performance.now();function dh(i){const t=Math.min(.1,(i-go)/1e3);go=i;const e=window.__CB?.speed||1;for(let n=1;n<e;n++)Se.update(Math.min(t,1/30));Se.tick(Math.min(t,1/30),t),requestAnimationFrame(dh)}requestAnimationFrame(dh);Nr();r_(Se,{start:Fr,pause:Or,resume:Go,goTitle:Nr,settings:rn,getProgress:()=>Ze,defaultProgress:Dr});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(i=>console.warn("SW registration failed",i)));let gs=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),gs=i,window.__CB_installable=!0,Wt("btn-install").classList.remove("hidden")});Wt("btn-install").onclick=async()=>{gs&&(gs.prompt(),await gs.userChoice.catch(()=>{}),gs=null,Wt("btn-install").classList.add("hidden"))};
