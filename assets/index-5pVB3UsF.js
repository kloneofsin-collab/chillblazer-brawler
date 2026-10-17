(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="186",Gu=0,$l=1,Vu=2,Dr=1,Hu=2,Ls=3,Li=0,$e=1,Ve=2,Yn=0,Os=1,Pe=2,Ql=3,jl=4,Wu=5,os=100,Xu=101,Yu=102,qu=103,Zu=104,Ju=200,Ku=201,$u=202,Qu=203,Rh=204,Ch=205,ju=206,tf=207,ef=208,nf=209,sf=210,rf=211,af=212,of=213,lf=214,oo=0,lo=1,co=2,Hs=3,ho=4,uo=5,fo=6,po=7,tl=0,cf=1,hf=2,Un=0,Ph=1,Lh=2,Ih=3,Dh=4,Uh=5,Nh=6,Fh=7,tc="attached",uf="detached",Oh=300,Ii=301,fs=302,pa=303,ma=304,jr=306,Gr=1e3,In=1001,mo=1002,We=1003,ff=1004,er=1005,Ke=1006,ga=1007,Ri=1008,un=1009,zh=1010,Bh=1011,Ws=1012,el=1013,Fn=1014,gn=1015,On=1016,nl=1017,il=1018,Xs=1020,kh=35902,Gh=35899,Vh=1021,Hh=1022,xn=1023,Zn=1026,Ci=1027,sl=1028,rl=1029,Di=1030,al=1031,ol=1033,Ur=33776,Nr=33777,Fr=33778,Or=33779,go=35840,xo=35841,vo=35842,_o=35843,Mo=36196,yo=37492,So=37496,bo=37488,wo=37489,Vr=37490,Eo=37491,To=37808,Ao=37809,Ro=37810,Co=37811,Po=37812,Lo=37813,Io=37814,Do=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,zo=37820,Bo=37821,ko=36492,Go=36494,Vo=36495,Ho=36283,Wo=36284,Hr=36285,Xo=36286,df=3200,Yo=0,pf=1,oi="",Ne="srgb",Wr="srgb-linear",Xr="linear",me="srgb",xa=7680,mf=519,gf=512,xf=513,vf=514,ll=515,_f=516,Mf=517,cl=518,yf=519,Wh=35044,ec="300 es",Dn=2e3,Ys=2001;function Sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){const i=qs("canvas");return i.style.display="block",i}const nc={};function Yr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Xh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Xh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ue(...i){i=Xh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hs(...i){const t=i.join(" ");t in nc||(nc[t]=!0,Vt(...i))}function wf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ef={[oo]:lo,[co]:fo,[ho]:po,[Hs]:uo,[lo]:oo,[fo]:co,[po]:ho,[uo]:Hs};class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const zs=Math.PI/180,Zs=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function hl(i,t){return(i%t+t)%t}function Tf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Af(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function Rf(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function Cf(i,t=1){return t-Math.abs(hl(i,t*2)-t)}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function If(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Df(i,t){return i+Math.random()*(t-i)}function Uf(i){return i*(.5-Math.random())}function Nf(i){i!==void 0&&(ic=i);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ff(i){return i*zs}function Of(i){return i*Zs}function zf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sn={DEG2RAD:zs,RAD2DEG:Zs,generateUUID:Nn,clamp:ie,euclideanModulo:hl,mapLinear:Tf,inverseLerp:Af,lerp:Bs,damp:Rf,pingpong:Cf,smoothstep:Pf,smootherstep:Lf,randInt:If,randFloat:Df,randFloatSpread:Uf,seededRandom:Nf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:zf,ceilPowerOfTwo:Bf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:Gf,normalize:ge,denormalize:bn},Fl=class Fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;let Et=Fl;class Bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*_;g<0&&(h=-h,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),R=Math.sin(M);m=Math.sin(m*M)/R,o=Math.sin(o*M)/R,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-o*f,t[e+2]=c*p+u*f+o*h-l*d,t[e+3]=u*p-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ol=class Ol{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ol.prototype.isVector3=!0;let P=Ol;const va=new P,sc=new Bn,zl=class zl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],R=s[4],S=s[7],b=s[2],w=s[5],C=s[8];return r[0]=a*_+o*M+l*b,r[3]=a*g+o*R+l*w,r[6]=a*m+o*S+l*C,r[1]=c*_+u*M+d*b,r[4]=c*g+u*R+d*w,r[7]=c*m+u*S+d*C,r[2]=h*_+f*M+p*b,r[5]=h*g+f*R+p*w,r[8]=h*m+f*S+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=e*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_a.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};zl.prototype.isMatrix3=!0;let Jt=zl;const _a=new Jt,rc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){const i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:t,whitePoint:n,transfer:Xr,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:me,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const oe=Vf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Hf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=qs("canvas")),ki.width=t.width,ki.height=t.height;const s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wf=0;class ul{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ma(s[a].image)):r.push(Ma(s[a]))}else r=Ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Xf=0;const ya=new P;class Xe extends Ni{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=In,s=In,r=Ke,a=Ri,o=xn,l=un,c=Xe.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Nn(),this.name="",this.source=new ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Oh;Xe.DEFAULT_ANISOTROPY=1;const Bl=class Bl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,S=(f+1)/2,b=(m+1)/2,w=(u+h)/4,C=(d+_)/4,v=(p+g)/4;return R>S&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=C/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bl.prototype.isVector4=!0;let ve=Bl;class Yf extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Xe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ul(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Yf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yh extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Qr=class Qr{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,p,_,g)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,p=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-p,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,p=o*u,_=o*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=p*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,Jf)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ti.crossVectors(n,on),ti.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ti.crossVectors(n,on)),ti.normalize(),nr.crossVectors(on,ti),s[0]=ti.x,s[4]=nr.x,s[8]=on.x,s[1]=ti.y,s[5]=nr.y,s[9]=on.y,s[2]=ti.z,s[6]=nr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],R=n[7],S=n[11],b=n[15],w=s[0],C=s[4],v=s[8],T=s[12],L=s[1],F=s[5],z=s[9],U=s[13],A=s[2],D=s[6],I=s[10],G=s[14],W=s[3],B=s[7],Y=s[11],q=s[15];return r[0]=a*w+o*L+l*A+c*W,r[4]=a*C+o*F+l*D+c*B,r[8]=a*v+o*z+l*I+c*Y,r[12]=a*T+o*U+l*G+c*q,r[1]=u*w+d*L+h*A+f*W,r[5]=u*C+d*F+h*D+f*B,r[9]=u*v+d*z+h*I+f*Y,r[13]=u*T+d*U+h*G+f*q,r[2]=p*w+_*L+g*A+m*W,r[6]=p*C+_*F+g*D+m*B,r[10]=p*v+_*z+g*I+m*Y,r[14]=p*T+_*U+g*G+m*q,r[3]=M*w+R*L+S*A+b*W,r[7]=M*C+R*F+S*D+b*B,r[11]=M*v+R*z+S*I+b*Y,r[15]=M*T+R*U+S*G+b*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],M=l*f-c*h,R=o*f-c*d,S=o*h-l*d,b=a*f-c*u,w=a*h-l*u,C=a*d-o*u;return e*(_*M-g*R+m*S)-n*(p*M-g*b+m*w)+s*(p*R-_*b+m*C)-r*(p*S-_*w+g*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=e*o-n*a,R=e*l-s*a,S=e*c-r*a,b=n*l-s*o,w=n*c-r*o,C=s*c-r*l,v=u*_-d*p,T=u*g-h*p,L=u*m-f*p,F=d*g-h*_,z=d*m-f*_,U=h*m-f*g,A=M*U-R*z+S*F+b*L-w*T+C*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=(o*U-l*z+c*F)*D,t[1]=(s*z-n*U-r*F)*D,t[2]=(_*C-g*w+m*b)*D,t[3]=(h*w-d*C-f*b)*D,t[4]=(l*L-a*U-c*T)*D,t[5]=(e*U-s*L+r*T)*D,t[6]=(g*S-p*C-m*R)*D,t[7]=(u*C-h*S+f*R)*D,t[8]=(a*z-o*L+c*v)*D,t[9]=(n*L-e*z-r*v)*D,t[10]=(p*w-_*S+m*M)*D,t[11]=(d*S-u*w-f*M)*D,t[12]=(o*T-a*F-l*v)*D,t[13]=(e*F-n*T+s*v)*D,t[14]=(_*R-p*b-g*M)*D,t[15]=(u*b-d*R+h*M)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,_=a*u,g=a*d,m=o*d,M=l*c,R=l*u,S=l*d,b=n.x,w=n.y,C=n.z;return s[0]=(1-(_+m))*b,s[1]=(f+S)*b,s[2]=(p-R)*b,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(h+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(p+R)*C,s[9]=(g-M)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const c=1/a,u=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Dn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Dn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ys)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Dn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ys)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qr.prototype.isMatrix4=!0;let te=Qr;const Gi=new P,_n=new te,Zf=new P(0,0,0),Jf=new P(1,1,1),ti=new P,nr=new P,on=new P,oc=new te,lc=new Bn;class ui{constructor(t=0,e=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kf=0;const cc=new P,Vi=new Bn,kn=new te,ir=new P,gs=new P,$f=new P,Qf=new Bn,hc=new P(1,0,0),uc=new P(0,1,0),fc=new P(0,0,1),dc={type:"added"},jf={type:"removed"},Hi={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Le extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new ui,n=new Bn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(gs,ir,this.up):kn.lookAt(ir,gs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(kn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fe extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},sr={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=hl(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wa(a,r,t+1/3),this.g=wa(a,r,t),this.b=wa(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return oe.workingToColorSpace(Ze.copy(this),t),Math.round(ie(Ze.r*255,0,255))*65536+Math.round(ie(Ze.g*255,0,255))*256+Math.round(ie(Ze.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ne){oe.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(sr);const n=Bs(ei.h,sr.h,e),s=Bs(ei.s,sr.s,e),r=Bs(ei.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Ht;Ht.NAMES=Zh;class fl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ed extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mn=new P,Gn=new P,Ea=new P,Vn=new P,Wi=new P,Xi=new P,pc=new P,Ta=new P,Aa=new P,Ra=new P,Ca=new ve,Pa=new ve,La=new ve;class mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Gn.subVectors(n,e),Ea.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Gn),l=Mn.dot(Ea),c=Gn.dot(Gn),u=Gn.dot(Ea),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ca.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ca.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ca,r.x),a.addScaledVector(Pa,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Gn.subVectors(t,e),Mn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),Ta.subVectors(t,n);const l=Wi.dot(Ta),c=Xi.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,s);const u=Wi.dot(Aa),d=Xi.dot(Aa);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Wi,a);Ra.subVectors(t,r);const f=Wi.dot(Ra),p=Xi.dot(Ra);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Xi,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return pc.subVectors(r,s),o=(d-u)/(d-u+(f-p)),e.copy(s).addScaledVector(pc,o);const m=1/(g+_+h);return a=_*m,o=h*m,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),ar.subVectors(this.max,xs),Yi.subVectors(t.a,xs),qi.subVectors(t.b,xs),Zi.subVectors(t.c,xs),ni.subVectors(qi,Yi),ii.subVectors(Zi,qi),yi.subVectors(Yi,Zi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!Ia(e,Yi,qi,Zi,ar)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,Yi,qi,Zi,ar))?!1:(or.crossVectors(ni,ii),e=[or.x,or.y,or.z],Ia(e,Yi,qi,Zi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,rr=new mi,Yi=new P,qi=new P,Zi=new P,ni=new P,ii=new P,yi=new P,xs=new P,ar=new P,or=new P,Si=new P;function Ia(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const De=new P,lr=new Et;let nd=0;class Qe extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class dl extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jh extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const id=new mi,vs=new P,Da=new P;class gi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Da)),this.expandByPoint(vs.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sd=0;const pn=new te,Ua=new Le,Ji=new P,ln=new mi,_s=new mi,Be=new P;class Se extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?Jh:dl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(ln.min,_s.min),ln.expandByPoint(Be),Be.addVectors(ln.max,_s.max),ln.expandByPoint(Be)):(ln.expandByPoint(_s.min),ln.expandByPoint(_s.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Be.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(t,c),Be.add(Ji)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,u=new P,d=new P,h=new Et,f=new Et,p=new Et,_=new P,g=new P;function m(v,T,L){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,L),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(F),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(F),o[v].add(_),o[T].add(_),o[L].add(_),l[v].add(g),l[T].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,T=M.length;v<T;++v){const L=M[v],F=L.start,z=L.count;for(let U=F,A=F+z;U<A;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const R=new P,S=new P,b=new P,w=new P;function C(v){b.fromBufferAttribute(s,v),w.copy(b);const T=o[v];R.copy(T),R.sub(b.multiplyScalar(b.dot(T))).normalize(),S.crossVectors(w,T);const F=S.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,F)}for(let v=0,T=M.length;v<T;++v){const L=M[v],F=L.start,z=L.count;for(let U=F,A=F+z;U<A;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Qe(h,u,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const nn=new P;class qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Na=new P,ad=new P,od=new Jt;class ai{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Na.subVectors(n,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Na),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||od.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ld=0;class Fi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $s extends Fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Ms=new P,$i=new P,Qi=new P,ji=new Et,ys=new Et,Kh=new te,cr=new P,Ss=new P,hr=new P,mc=new Et,Fa=new Et,gc=new Et;class ta extends Le{constructor(t=new $s){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rd(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new qr(n,3,0,!1)),Ki.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Qi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ur(cr.set(-.5,-.5,0),Qi,a,$i,s,r),ur(Ss.set(.5,-.5,0),Qi,a,$i,s,r),ur(hr.set(.5,.5,0),Qi,a,$i,s,r),mc.set(0,0),Fa.set(1,0),gc.set(1,1);let o=t.ray.intersectTriangle(cr,Ss,hr,!1,Ms);if(o===null&&(ur(Ss.set(-.5,.5,0),Qi,a,$i,s,r),Fa.set(0,1),o=t.ray.intersectTriangle(cr,hr,Ss,!1,Ms),o===null))return;const l=t.ray.origin.distanceTo(Ms);l<t.near||l>t.far||e.push({distance:l,point:Ms.clone(),uv:mn.getInterpolation(Ms,cr,Ss,hr,mc,Fa,gc,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ur(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*ji.x-s*ji.y,ys.y=s*ji.x+r*ji.y):ys.copy(ji),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Kh)}const Wn=new P,Oa=new P,fr=new P,dr=new P;class pl{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oa.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),dr.copy(this.origin).sub(Oa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=dr.dot(this.direction),l=-dr.dot(fr),c=dr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oa).addScaledVector(fr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,g=e.z-a.z,m=n.x-a.x,M=n.y-a.y,R=n.z-a.z,S=Math.abs(l),b=Math.abs(c),w=Math.abs(u);let C,v,T,L,F,z,U,A,D,I,G,W;if(S>=b&&S>=w?(T=l,z=d,D=p,W=m,l>=0?(C=c,v=u,L=h,F=f,U=_,A=g,I=M,G=R):(C=u,v=c,L=f,F=h,U=g,A=_,I=R,G=M)):b>=w?(T=c,z=h,D=_,W=M,c>=0?(C=u,v=l,L=f,F=d,U=g,A=p,I=R,G=m):(C=l,v=u,L=d,F=f,U=p,A=g,I=m,G=R)):(T=u,z=f,D=g,W=R,u>=0?(C=l,v=c,L=d,F=h,U=p,A=_,I=m,G=M):(C=c,v=l,L=h,F=d,U=_,A=p,I=M,G=m)),T===0)return null;const B=C/T,Y=v/T,q=1/T,ot=L-B*z,mt=F-Y*z,Kt=U-B*D,yt=A-Y*D,Tt=I-B*W,$=G-Y*W,tt=Tt*yt-$*Kt,dt=ot*$-mt*Tt,It=Kt*mt-yt*ot;if(s){if(tt<0||dt<0||It<0)return null}else if((tt<0||dt<0||It<0)&&(tt>0||dt>0||It>0))return null;const ct=tt+dt+It;if(ct===0)return null;const zt=q*(tt*z+dt*D+It*W);return(ct>0?zt<0:zt>0)?null:this.at(zt/ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xc=new te,bi=new pl,pr=new gi,vc=new P,mr=new P,gr=new P,xr=new P,za=new P,vr=new P,_c=new P,_r=new P;class Ft extends Le{constructor(t=new Se,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(za.fromBufferAttribute(d,t),a?vr.addScaledVector(za,u):vr.addScaledVector(za.sub(e),u))}e.add(vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(pr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(pr,vc)===null||bi.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(xc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(xc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),R=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,b=R;S<b;S+=3){const w=o.getX(S),C=o.getX(S+1),v=o.getX(S+2);s=Mr(this,m,t,n,c,u,d,w,C,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const M=o.getX(g),R=o.getX(g+1),S=o.getX(g+2);s=Mr(this,a,t,n,c,u,d,M,R,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,b=R;S<b;S+=3){const w=S,C=S+1,v=S+2;s=Mr(this,m,t,n,c,u,d,w,C,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const M=g,R=g+1,S=g+2;s=Mr(this,a,t,n,c,u,d,M,R,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function cd(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function Mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,xr);const u=cd(i,t,e,n,mr,gr,xr,_c);if(u){const d=new P;mn.getBarycoord(_c,mr,gr,xr,d),s&&(u.uv=mn.getInterpolatedAttribute(s,o,l,c,d,new Et)),r&&(u.uv1=mn.getInterpolatedAttribute(r,o,l,c,d,new Et)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};mn.getNormal(mr,gr,xr,h.normal),u.face=h,u.barycoord=d}return u}const bs=new ve,Mc=new ve,yc=new ve,hd=new ve,Sc=new te,yr=new P,Ba=new gi,bc=new te,ka=new pl;class ud extends Ft{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,yr),this.boundingBox.expandByPoint(yr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,yr),this.boundingSphere.expandByPoint(yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(s),t.ray.intersectsSphere(Ba)!==!1&&(bc.copy(s).invert(),ka.copy(t.ray).applyMatrix4(bc),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ka)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Mc.fromBufferAttribute(s.attributes.skinIndex,t),yc.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(bs.copy(e),e.set(0,0,0,0)):(bs.set(...e,1),e.set(0,0,0)),bs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=yc.getComponent(r);if(a!==0){const o=Mc.getComponent(r);Sc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(hd.copy(bs).applyMatrix4(Sc),a)}}return e.isVector4&&(e.w=bs.w),e.applyMatrix4(this.bindMatrixInverse)}}class $h extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ml extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=We,u=We,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wc=new te,fd=new te;class gl{constructor(t=[],e=[]){this.uuid=Nn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:fd;wc.multiplyMatrices(o,e[r]),wc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ml(e,t,t,xn,gn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(Vt("Skeleton: No bone found with UUID:",r),a=new $h),this.bones.push(a),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Ec extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new te,Tc=new te,Sr=[],Ac=new mi,dd=new te,ws=new Ft,Es=new gi;class Ue extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Ac.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Ac)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Es.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Tc.multiplyMatrices(n,ts),ws.matrixWorld=Tc,ws.raycast(t,Sr);for(let a=0,o=Sr.length;a<o;a++){const l=Sr[a];l.instanceId=r,l.object=this,e.push(l)}Sr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ml(new Float32Array(s*this.count),s,this.count,sl,gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wi=new gi,pd=new Et(.5,.5),br=new P;class xl{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],M=r[12],R=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-a,f-u,m-p,b-M).normalize(),s[1].setComponents(c+a,f+u,m+p,b+M).normalize(),s[2].setComponents(c+o,f+d,m+_,b+R).normalize(),s[3].setComponents(c-o,f-d,m-_,b-R).normalize(),n)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,f-h,m-g,b-S).normalize();else if(s[4].setComponents(c-l,f-h,m-g,b-S).normalize(),e===Dn)s[5].setComponents(c+l,f+h,m+g,b+S).normalize();else if(e===Ys)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=pd.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qh extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rc=new te,qo=new pl,wr=new gi,Er=new P;class vl extends Le{constructor(t=new Se,e=new Qh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;Rc.copy(s).invert(),qo.copy(t.ray).applyMatrix4(Rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,_=f;p<_;p++){const g=c.getX(p);Er.fromBufferAttribute(d,g),Cc(Er,g,l,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,_=f;p<_;p++)Er.fromBufferAttribute(d,p),Cc(Er,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cc(i,t,e,n,s,r,a){const o=qo.distanceSqToPoint(i);if(o<e){const l=new P;qo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class jh extends Xe{constructor(t=[],e=Ii,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zr extends Xe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Xe{constructor(t,e,n=Fn,s,r,a,o=We,l=We,c,u=Zn,d=1){if(u!==Zn&&u!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ul(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class md extends Js{constructor(t,e=Fn,n=Ii,s,r,a=We,o=We,l,c=Zn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tu extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ae extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function p(_,g,m,M,R,S,b,w,C,v,T){const L=S/C,F=b/v,z=S/2,U=b/2,A=w/2,D=C+1,I=v+1;let G=0,W=0;const B=new P;for(let Y=0;Y<I;Y++){const q=Y*F-U;for(let ot=0;ot<D;ot++){const mt=ot*L-z;B[_]=mt*M,B[g]=q*R,B[m]=A,c.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[m]=w>0?1:-1,u.push(B.x,B.y,B.z),d.push(ot/C),d.push(1-Y/v),G+=1}}for(let Y=0;Y<v;Y++)for(let q=0;q<C;q++){const ot=h+q+D*Y,mt=h+q+D*(Y+1),Kt=h+(q+1)+D*(Y+1),yt=h+(q+1)+D*Y;l.push(ot,mt,yt),l.push(mt,Kt,yt),W+=6}o.addGroup(f,W,T),f+=W,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ea extends Se{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,p=n*2+r,_=s+1,g=new P,m=new P;for(let M=0;M<=p;M++){let R=0,S=0,b=0,w=0;if(M<=n){const T=M/n,L=T*Math.PI/2;S=-u-t*Math.cos(L),b=t*Math.sin(L),w=-t*Math.cos(L),R=T*d}else if(M<=n+r){const T=(M-n)/r;S=-u+T*e,b=t,w=0,R=d+T*h}else{const T=(M-n-r)/n,L=T*Math.PI/2;S=u+t*Math.sin(L),b=t*Math.cos(L),w=t*Math.sin(L),R=d+h+T*d}const C=Math.max(0,Math.min(1,R/f));let v=0;M===0?v=.5/s:M===p&&(v=-.5/s);for(let T=0;T<=s;T++){const L=T/s,F=L*Math.PI*2,z=Math.sin(F),U=Math.cos(F);m.x=-b*U,m.y=S,m.z=b*z,o.push(m.x,m.y,m.z),g.set(-b*U,w,b*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(L+v,C)}if(M>0){const T=(M-1)*_;for(let L=0;L<s;L++){const F=T+L,z=T+L+1,U=M*_+L,A=M*_+L+1;a.push(F,z,U),a.push(z,A,U)}}}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Jr extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,u=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Je extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const _=[],g=n/2;let m=0;M(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function M(){const S=new P,b=new P;let w=0;const C=(e-t)/n;for(let v=0;v<=r;v++){const T=[],L=v/r,F=L*(e-t)+t;for(let z=0;z<=s;z++){const U=z/s,A=U*l+o,D=Math.sin(A),I=Math.cos(A);b.x=F*D,b.y=-L*n+g,b.z=F*I,d.push(b.x,b.y,b.z),S.set(D,C,I).normalize(),h.push(S.x,S.y,S.z),f.push(U,1-L),T.push(p++)}_.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const L=_[T][v],F=_[T+1][v],z=_[T+1][v+1],U=_[T][v+1];(t>0||T!==0)&&(u.push(L,F,U),w+=3),(e>0||T!==r-1)&&(u.push(F,z,U),w+=3)}c.addGroup(m,w,0),m+=w}function R(S){const b=p,w=new Et,C=new P;let v=0;const T=S===!0?t:e,L=S===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*L,0),h.push(0,L,0),f.push(.5,.5),p++;const F=p;for(let z=0;z<=s;z++){const A=z/s*l+o,D=Math.cos(A),I=Math.sin(A);C.x=T*I,C.y=g*L,C.z=T*D,d.push(C.x,C.y,C.z),h.push(0,L,0),w.x=D*.5+.5,w.y=I*.5*L+.5,f.push(w.x,w.y),p++}for(let z=0;z<s;z++){const U=b+z,A=F+z;S===!0?u.push(A,A+1,U):u.push(A+1,A,U),v+=3}c.addGroup(m,v,S===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fi extends Je{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const R=new P,S=new P,b=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],R),f(e[w+1],S),f(e[w+2],b),l(R,S,b,M)}function l(M,R,S,b){const w=b+1,C=[];for(let v=0;v<=w;v++){C[v]=[];const T=M.clone().lerp(S,v/w),L=R.clone().lerp(S,v/w),F=w-v;for(let z=0;z<=F;z++)z===0&&v===w?C[v][z]=T:C[v][z]=T.clone().lerp(L,z/F)}for(let v=0;v<w;v++)for(let T=0;T<2*(w-v)-1;T++){const L=Math.floor(T/2);T%2===0?(h(C[v][L+1]),h(C[v+1][L]),h(C[v][L])):(h(C[v][L+1]),h(C[v+1][L+1]),h(C[v+1][L]))}}function c(M){const R=new P;for(let S=0;S<r.length;S+=3)R.x=r[S+0],R.y=r[S+1],R.z=r[S+2],R.normalize().multiplyScalar(M),r[S+0]=R.x,r[S+1]=R.y,r[S+2]=R.z}function u(){const M=new P;for(let R=0;R<r.length;R+=3){M.x=r[R+0],M.y=r[R+1],M.z=r[R+2];const S=g(M)/2/Math.PI+.5,b=m(M)/Math.PI+.5;a.push(S,1-b)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){const R=a[M+0],S=a[M+2],b=a[M+4],w=Math.max(R,S,b),C=Math.min(R,S,b);w>.9&&C<.1&&(R<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,R){const S=M*3;R.x=t[S+0],R.y=t[S+1],R.z=t[S+2]}function p(){const M=new P,R=new P,S=new P,b=new P,w=new Et,C=new Et,v=new Et;for(let T=0,L=0;T<r.length;T+=9,L+=6){M.set(r[T+0],r[T+1],r[T+2]),R.set(r[T+3],r[T+4],r[T+5]),S.set(r[T+6],r[T+7],r[T+8]),w.set(a[L+0],a[L+1]),C.set(a[L+2],a[L+3]),v.set(a[L+4],a[L+5]),b.copy(M).add(R).add(S).divideScalar(3);const F=g(b);_(w,L+0,M,F),_(C,L+2,R,F),_(v,L+4,S,F)}}function _(M,R,S,b){b<0&&M.x===1&&(a[R]=M.x-1),S.x===0&&S.z===0&&(a[R]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.vertices,t.indices,t.radius,t.detail)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Et:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new te;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class eu extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gd extends eu{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _l(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Pc=new P,Lc=new P,Ga=new _l,Va=new _l,Ha=new _l;class xd extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Lc.subVectors(s[0],s[1]).add(s[0]),c=Lc);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Pc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Ga.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,g),Va.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,g),Ha.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Va.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ha.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Ga.calc(l),Va.calc(l),Ha.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ic(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function vd(i,t){const e=1-i;return e*e*t}function _d(i,t){return 2*(1-i)*i*t}function Md(i,t){return i*i*t}function ks(i,t,e,n){return vd(i,t)+_d(i,e)+Md(i,n)}function yd(i,t){const e=1-i;return e*e*e*t}function Sd(i,t){const e=1-i;return 3*e*e*i*t}function bd(i,t){return 3*(1-i)*i*i*t}function wd(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return yd(i,t)+Sd(i,e)+bd(i,n)+wd(i,s)}class Ed extends Jn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(t,s.x,r.x,a.x,o.x),Gs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Td extends Jn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gs(t,s.x,r.x,a.x,o.x),Gs(t,s.y,r.y,a.y,o.y),Gs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ad extends Jn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Jn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cd extends Jn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ks(t,s.x,r.x,a.x),ks(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ml extends Jn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ks(t,s.x,r.x,a.x),ks(t,s.y,r.y,a.y),ks(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pd extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ic(o,l.x,c.x,u.x,d.x),Ic(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var Ld=Object.freeze({__proto__:null,ArcCurve:gd,CatmullRomCurve3:xd,CubicBezierCurve:Ed,CubicBezierCurve3:Td,EllipseCurve:eu,LineCurve:Ad,LineCurve3:Rd,QuadraticBezierCurve:Cd,QuadraticBezierCurve3:Ml,SplineCurve:Pd});class ia extends na{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ia(t.radius,t.detail)}}class yl extends na{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yl(t.radius,t.detail)}}class Te extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const M=m*h-a;for(let R=0;R<c;R++){const S=R*d-r;p.push(S,-M,0),_.push(0,0,1),g.push(R/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const R=M+c*m,S=M+c*(m+1),b=M+1+c*(m+1),w=M+1+c*m;f.push(R,S,w),f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kr extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,f=new P,p=new Et;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const M=m+g,R=M,S=M+n+1,b=M+n+2,w=M+1;o.push(R,S,w),o.push(S,b,w)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const M=[],R=m/n,S=a+R*o,b=t*Math.cos(S),w=Math.sqrt(t*t-b*b);let C=0;m===0&&a===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){const T=v/e,L=s+T*r;d.x=-w*Math.cos(L),d.y=b,d.z=w*Math.sin(L),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(T+C,1-R),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const R=u[m][M+1],S=u[m][M],b=u[m+1][M],w=u[m+1][M+1];(m!==0||a>0)&&f.push(R,S,w),(m!==n-1||l<Math.PI)&&f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ui extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,p=new P;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let m=0;m<=s;m++){const M=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,M=(s+1)*(_-1)+g-1,R=(s+1)*(_-1)+g,S=(s+1)*_+g;l.push(m,M,S),l.push(M,R,S)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Sl extends Se{constructor(t=new Ml(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Et;let u=new P;const d=[],h=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function _(){for(let R=0;R<e;R++)g(R);g(r===!1?e:0),M(),m()}function g(R){u=t.getPointAt(R/e,u);const S=a.normals[R],b=a.binormals[R];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,v=Math.sin(C),T=-Math.cos(C);l.x=T*S.x+v*b.x,l.y=T*S.y+v*b.y,l.z=T*S.z+v*b.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let R=1;R<=e;R++)for(let S=1;S<=s;S++){const b=(s+1)*(R-1)+(S-1),w=(s+1)*R+(S-1),C=(s+1)*R+S,v=(s+1)*(R-1)+S;p.push(b,w,v),p.push(w,C,v)}}function M(){for(let R=0;R<=e;R++)for(let S=0;S<=s;S++)c.x=R/e,c.y=S/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sl(new Ld[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Dc(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function Dc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const bl={clone:ds,merge:rn};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Nd extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class di extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fd extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Od extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Uc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Uc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Uc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class zd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bd=new zd;class wl{constructor(t){this.manager=t!==void 0?t:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}wl.DEFAULT_MATERIAL_NAME="__DEFAULT";const es=new WeakMap;class kd extends wl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Wa.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=es.get(a);d===void 0&&(d=[],es.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=qs("img");function l(){u(),e&&e(this);const d=es.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}es.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),Wa.remove(`image:${t}`);const h=es.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}es.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wa.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Gd extends wl{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,a=new kd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class El extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Vd extends El{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Xa=new te,Nc=new P,Fc=new P;class iu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tr=new P,Ar=new Bn,An=new P;class su extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tr,Ar,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Ar,An.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Tr,Ar,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Ar,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new P,Oc=new Et,zc=new Et;class cn extends su{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,zc),e.subVectors(zc,Oc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Hd extends iu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Wd extends El{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Tl extends su{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xd extends iu{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bc extends El{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Xd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ns=-90,is=1;class Yd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(ns,is,t,e);s.layers=this.layers,this.add(s);const r=new cn(ns,is,t,e);r.layers=this.layers,this.add(r);const a=new cn(ns,is,t,e);a.layers=this.layers,this.add(a);const o=new cn(ns,is,t,e);o.layers=this.layers,this.add(o);const l=new cn(ns,is,t,e);l.layers=this.layers,this.add(l);const c=new cn(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class qd extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kl=class kl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};kl.prototype.isMatrix2=!0;let kc=kl;function Gc(i,t,e,n){const s=Zd(n);switch(e){case Vh:return i*t;case sl:return i*t/s.components*s.byteLength;case rl:return i*t/s.components*s.byteLength;case Di:return i*t*2/s.components*s.byteLength;case al:return i*t*2/s.components*s.byteLength;case Hh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case ol:return i*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:case _o:return Math.max(i,16)*Math.max(t,8)/4;case go:case vo:return Math.max(i,8)*Math.max(t,8)/2;case Mo:case yo:case bo:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Vr:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case un:case zh:return{byteLength:1,components:1};case Ws:case Bh:case On:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Fn:case el:case gn:return{byteLength:4,components:1};case kh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ru(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Zp=`uniform sampler2D dfgLUT;
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
}`,Jp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,rm=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,xm=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,_m=`#define PHONG
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
}`,Mm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,bm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Kd,alphahash_pars_fragment:$d,alphamap_fragment:Qd,alphamap_pars_fragment:jd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:xp,color_vertex:vp,common:_p,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Sp,displacementmap_vertex:bp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Vp,envmap_vertex:Ip,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:zp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:kp,lights_pars_begin:Gp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:qp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Kp,lights_fragment_end:$p,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:f0,morphtarget_vertex:d0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:v0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:w0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:z0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:G0,tonemapping_fragment:V0,tonemapping_pars_fragment:H0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:Y0,uv_pars_vertex:q0,uv_vertex:Z0,worldpos_vertex:J0,background_vert:K0,background_frag:$0,backgroundCube_vert:Q0,backgroundCube_frag:j0,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:sm,distance_frag:rm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:xm,meshphong_vert:vm,meshphong_frag:_m,meshphysical_vert:Mm,meshphysical_frag:ym,meshtoon_vert:Sm,meshtoon_frag:bm,points_vert:wm,points_frag:Em,shadow_vert:Tm,shadow_frag:Am,sprite_vert:Rm,sprite_frag:Cm},xt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Pn={basic:{uniforms:rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:rn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:rn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:rn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:rn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:rn([xt.points,xt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:rn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:rn([xt.common,xt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:rn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:rn([xt.sprite,xt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:rn([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:rn([xt.lights,xt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Pn.physical={uniforms:rn([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Rr={r:0,b:0,g:0},Pm=new te,au=new Jt;au.set(-1,0,0,0,1,0,0,0,1);function Lm(i,t,e,n,s,r){const a=new Ht(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){const S=M.backgroundBlurriness>0;R=t.get(R,S)}return R}function p(M){let R=!1;const S=f(M);S===null?g(a,o):S&&S.isColor&&(g(S,1),R=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,R){const S=f(R);S&&(S.isCubeTexture||S.mapping===jr)?(c===void 0&&(c=new Ft(new ae(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(au),c.material.toneMapped=oe.getTransfer(S.colorSpace)!==me,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ft(new Te(2,2),new je({name:"BackgroundMaterial",uniforms:ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=oe.getTransfer(S.colorSpace)!==me,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,R){M.getRGB(Rr,nu(i)),e.buffers.color.setClear(Rr.r,Rr.g,Rr.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Im(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(F,z,U,A,D){let I=!1;const G=d(F,A,U,z);r!==G&&(r=G,c(r.object)),I=f(F,A,U,D),I&&p(F,A,U,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,S(F,z,U,A),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function d(F,z,U,A){const D=A.wireframe===!0;let I=n[z.id];I===void 0&&(I={},n[z.id]=I);const G=F.isInstancedMesh===!0?F.id:0;let W=I[G];W===void 0&&(W={},I[G]=W);let B=W[U.id];B===void 0&&(B={},W[U.id]=B);let Y=B[D];return Y===void 0&&(Y=h(l()),B[D]=Y),Y}function h(F){const z=[],U=[],A=[];for(let D=0;D<e;D++)z[D]=0,U[D]=0,A[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:U,attributeDivisors:A,object:F,attributes:{},index:null}}function f(F,z,U,A){const D=r.attributes,I=z.attributes;let G=0;const W=U.getAttributes();for(const B in W)if(W[B].location>=0){const q=D[B];let ot=I[B];if(ot===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor)),q===void 0||q.attribute!==ot||ot&&q.data!==ot.data)return!0;G++}return r.attributesNum!==G||r.index!==A}function p(F,z,U,A){const D={},I=z.attributes;let G=0;const W=U.getAttributes();for(const B in W)if(W[B].location>=0){let q=I[B];q===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));const ot={};ot.attribute=q,q&&q.data&&(ot.data=q.data),D[B]=ot,G++}r.attributes=D,r.attributesNum=G,r.index=A}function _(){const F=r.newAttributes;for(let z=0,U=F.length;z<U;z++)F[z]=0}function g(F){m(F,0)}function m(F,z){const U=r.newAttributes,A=r.enabledAttributes,D=r.attributeDivisors;U[F]=1,A[F]===0&&(i.enableVertexAttribArray(F),A[F]=1),D[F]!==z&&(i.vertexAttribDivisor(F,z),D[F]=z)}function M(){const F=r.newAttributes,z=r.enabledAttributes;for(let U=0,A=z.length;U<A;U++)z[U]!==F[U]&&(i.disableVertexAttribArray(U),z[U]=0)}function R(F,z,U,A,D,I,G){G===!0?i.vertexAttribIPointer(F,z,U,D,I):i.vertexAttribPointer(F,z,U,A,D,I)}function S(F,z,U,A){_();const D=A.attributes,I=U.getAttributes(),G=z.defaultAttributeValues;for(const W in I){const B=I[W];if(B.location>=0){let Y=D[W];if(Y===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),Y!==void 0){const q=Y.normalized,ot=Y.itemSize,mt=t.get(Y);if(mt===void 0)continue;const Kt=mt.buffer,yt=mt.type,Tt=mt.bytesPerElement,$=yt===i.INT||yt===i.UNSIGNED_INT||Y.gpuType===el;if(Y.isInterleavedBufferAttribute){const tt=Y.data,dt=tt.stride,It=Y.offset;if(tt.isInstancedInterleavedBuffer){for(let ct=0;ct<B.locationSize;ct++)m(B.location+ct,tt.meshPerAttribute);F.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<B.locationSize;ct++)g(B.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ct=0;ct<B.locationSize;ct++)R(B.location+ct,ot/B.locationSize,yt,q,dt*Tt,(It+ot/B.locationSize*ct)*Tt,$)}else{if(Y.isInstancedBufferAttribute){for(let tt=0;tt<B.locationSize;tt++)m(B.location+tt,Y.meshPerAttribute);F.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let tt=0;tt<B.locationSize;tt++)g(B.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let tt=0;tt<B.locationSize;tt++)R(B.location+tt,ot/B.locationSize,yt,q,ot*Tt,ot/B.locationSize*tt*Tt,$)}}else if(G!==void 0){const q=G[W];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(B.location,q);break;case 3:i.vertexAttrib3fv(B.location,q);break;case 4:i.vertexAttrib4fv(B.location,q);break;default:i.vertexAttrib1fv(B.location,q)}}}}M()}function b(){T();for(const F in n){const z=n[F];for(const U in z){const A=z[U];for(const D in A){const I=A[D];for(const G in I)u(I[G].object),delete I[G];delete A[D]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;const z=n[F.id];for(const U in z){const A=z[U];for(const D in A){const I=A[D];for(const G in I)u(I[G].object),delete I[G];delete A[D]}}delete n[F.id]}function C(F){for(const z in n){const U=n[z];for(const A in U){const D=U[A];if(D[F.id]===void 0)continue;const I=D[F.id];for(const G in I)u(I[G].object),delete I[G];delete D[F.id]}}}function v(F){for(const z in n){const U=n[z],A=F.isInstancedMesh===!0?F.id:0,D=U[A];if(D!==void 0){for(const I in D){const G=D[I];for(const W in G)u(G[W].object),delete G[W];delete D[I]}delete U[A],Object.keys(U).length===0&&delete n[z]}}}function T(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Dm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Um(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==un&&C!==gn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:b,samples:w}}function Nm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ai,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const M=r?0:n,R=M*4;let S=m.clippingState||null;l.value=S,S=u(p,h,R,f);for(let b=0;b!==R;++b)S[b]=e[b];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,S=f;R!==_;++R,S+=4)a.copy(d[R]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const ls=4,Fm=6,Om=20,zm=256,Ts=new Tl,Vc=new Ht;let Ya=null,qa=0,Za=0,Ja=!1;const Bm=new P,Ei=new P;class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Bm}=r;Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,qa,Za),this._renderer.xr.enabled=Ja,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:On,format:xn,colorSpace:Wr,depthBuffer:!1},s=Wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(r)),this._blurMaterial=Vm(r,t,e),this._ggxMaterial=Gm(r,t,e)}return s}_compileMaterial(t){const e=new Ft(new Se,t);this._renderer.compile(e,Ts)}_sceneToCubeUV(t,e,n,s,r){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Vc),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new ae,new pe({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(Vc),m=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const b=this._cubeSize;ss(s,S*b,R>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ii||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ts)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-ls?n-p+ls:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,ss(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Ts),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ss(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(o,Ts)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-ls?s-this._lodMax+ls:0),h=4*(this._cubeSize-u);ss(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Ts)}}function km(i){const t=[],e=[];let n=i;const s=i-ls+1+Fm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let m=0;m<d;m++){const M=m%3*2/3-1,R=m>2?0:-1,S=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];p.set(S,f*h*m);for(let b=0;b<h;b++){const w=u[b*2]*2-1,C=u[b*2+1]*2-1;m===0?Ei.set(1,C,w):m===1?Ei.set(-w,1,-C):m===2?Ei.set(-w,C,1):m===3?Ei.set(-1,C,-w):m===4?Ei.set(-w,-1,C):Ei.set(w,C,-1),Ei.toArray(_,(m*h+b)*f)}}const g=new Se;g.setAttribute("position",new Qe(p,f)),g.setAttribute("outputDirection",new Qe(_,f)),e.push(new Ft(g,null)),n>ls&&n--}return{lodMeshes:e,sizeLods:t}}function Wc(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gm(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Vm(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Xc(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Yc(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ou extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ae(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Yn});r.uniforms.tEquirect.value=e;const a=new Ft(s,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ke),new Yd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===pa||f===ma)if(t.has(h)){const p=t.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new ou(p.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===pa||f===ma,_=f===Ii||f===fs;if(p||_){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Hc(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Hc(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===pa?h.mapping=Ii:f===ma&&(h.mapping=fs),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let R=0,S=M.length;R<S;R+=3){const b=M[R+0],w=M[R+1],C=M[R+2];h.push(b,w,w,C,C,b)}}else{const M=p.array;_=p.version;for(let R=0,S=M.length/3-1;R<S;R+=3){const b=R+0,w=R+1,C=R+2;h.push(b,w,w,C,C,b)}}const g=new(p.count>=65535?Jh:dl)(h,1);g.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Ym(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let R=0;f===!0&&(R=1),p===!0&&(R=2),_===!0&&(R=3);let S=o.attributes.position.count*R,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const w=new Float32Array(S*b*4*d),C=new Yh(w,S,b,d);C.type=gn,C.needsUpdate=!0;const v=R*4;for(let L=0;L<d;L++){const F=g[L],z=m[L],U=M[L],A=S*b*4*L;for(let D=0;D<F.count;D++){const I=D*v;f===!0&&(s.fromBufferAttribute(F,D),w[A+I+0]=s.x,w[A+I+1]=s.y,w[A+I+2]=s.z,w[A+I+3]=0),p===!0&&(s.fromBufferAttribute(z,D),w[A+I+4]=s.x,w[A+I+5]=s.y,w[A+I+6]=s.z,w[A+I+7]=0),_===!0&&(s.fromBufferAttribute(U,D),w[A+I+8]=s.x,w[A+I+9]=s.y,w[A+I+10]=s.z,w[A+I+11]=U.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Et(S,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Jm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Km={[Ph]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Fh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function $m(i,t,e,n,s,r){const a=new wn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Se;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));const u=new Nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(c,u),h=new Tl(-1,1,1,-1,0,1);let f=null,p=null,_=!1,g,m=null,M=[],R=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),l!==null&&l.setSize(S,b);for(let w=0;w<M.length;w++){const C=M[w];C.setSize&&C.setSize(S,b)}},this.setEffects=function(S){M=S,R=M.length>0&&M[0].isRenderPass===!0;const b=a.width,w=a.height;M.length>0&&o===null&&(o=new wn(b,w,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new wn(b,w,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){const v=M[C];v.setSize&&v.setSize(b,w)}},this.begin=function(S,b){if(_||S.toneMapping===Un&&M.length===0)return!1;if(m=b,b!==null){const w=b.width,C=b.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return R===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Un,!0},this.hasRenderPass=function(){return R},this.end=function(S,b){S.toneMapping=g,_=!0;let w=a,C=o;for(let v=0;v<M.length;v++){const T=M[v];T.enabled!==!1&&(T.render(S,C,w,b),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(f!==S.outputColorSpace||p!==S.toneMapping){f=S.outputColorSpace,p=S.toneMapping,u.defines={},oe.getTransfer(f)===me&&(u.defines.SRGB_TRANSFER="");const v=Km[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(m),S.render(d,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const lu=new Xe,Zo=new Js(1,1),cu=new Yh,hu=new qf,uu=new jh,qc=[],Zc=[],Jc=new Float32Array(16),Kc=new Float32Array(9),$c=new Float32Array(4);function ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),ze(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),ze(e,n)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),ze(e,n)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=Zo):r=lu,e.setTexture2D(t||r,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hu,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uu,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cu,s)}function xg(i){switch(i){case 5126:return Qm;case 35664:return jm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){const e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){const e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function yg(i,t){const e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){const e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){const e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){const e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Eg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zo:a=lu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ug(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hu,r[a])}function Ng(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uu,r[a])}function Fg(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cu,r[a])}function Og(i){switch(i){case 5126:return vg;case 35664:return _g;case 35665:return Mg;case 35666:return yg;case 35674:return Sg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Qc(i,t){i.seq.push(t),i.map[t.id]=t}function Gg(i,t,e){const n=i.name,s=n.length;for(Ka.lastIndex=0;;){const r=Ka.exec(n),a=Ka.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qc(e,c===void 0?new zg(o,i,t):new Bg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new kg(o),Qc(e,d)),e=d}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Gg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vg=37297;let Hg=0;function Wg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const th=new Jt;function Xg(i){oe._getMatrix(th,oe.workingColorSpace,i);const t=`mat3( ${th.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function eh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wg(i.getShaderSource(t),o)}else return r}function Yg(i,t){const e=Xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qg={[Ph]:"Linear",[Lh]:"Reinhard",[Ih]:"Cineon",[Dh]:"ACESFilmic",[Nh]:"AgX",[Fh]:"Neutral",[Uh]:"Custom"};function Zg(i,t){const e=qg[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new P;function Jg(){oe.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function $g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Is(i){return i!==""}function nh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(jg,ex)}const tx=new Map;function ex(i,t){let e=ne[t];if(e===void 0){const n=tx.get(t);if(n!==void 0)e=ne[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jo(e)}const nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(nx,ix)}function ix(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const sx={[Dr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function rx(i){return sx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ax={[Ii]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ax[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lx={[fs]:"ENVMAP_MODE_REFRACTION"};function cx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hx={[tl]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hx[i.combine]||"ENVMAP_BLENDING_NONE"}function fx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=rx(e),c=ox(e),u=cx(e),d=ux(e),h=fx(e),f=Kg(e),p=$g(r),_=s.createProgram();let g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Is).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(g=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?ne.tonemapping_pars_fragment:"",e.toneMapping!==Un?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),Jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=Jo(a),a=nh(a,e),a=ih(a,e),o=Jo(o),o=nh(o,e),o=ih(o,e),a=sh(a),o=sh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=M+g+a,S=M+m+o,b=jc(s,s.VERTEX_SHADER,R),w=jc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,b),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(F){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",A=s.getShaderInfoLog(w)||"",D=z.trim(),I=U.trim(),G=A.trim();let W=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,w);else{const Y=eh(s,b,"vertex"),q=eh(s,w,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+D+`
`+Y+`
`+q)}else D!==""?Vt("WebGLProgram: Program Info Log:",D):(I===""||G==="")&&(B=!1);B&&(F.diagnostics={runnable:W,programLog:D,vertexShader:{log:I,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(b),s.deleteShader(w),v=new zr(s,_),T=Qg(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,Vg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gx(t),e.set(t,n)),n}}class gx{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}}function xx(i){return i===Di||i===Vr||i===Hr}function vx(i,t,e,n,s,r){const a=new qh,o=new mx,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,L,F,z,U){const A=F.fog,D=z.geometry,I=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=t.get(v.envMap||I,G),B=W&&W.mapping===jr?W.image.height:null,Y=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ot=q!==void 0?q.length:0;let mt=0;D.morphAttributes.position!==void 0&&(mt=1),D.morphAttributes.normal!==void 0&&(mt=2),D.morphAttributes.color!==void 0&&(mt=3);let Kt,yt,Tt,$;if(Y){const be=Pn[Y];Kt=be.vertexShader,yt=be.fragmentShader}else{Kt=v.vertexShader,yt=v.fragmentShader;const be=o.getVertexShaderStage(v),fe=o.getFragmentShaderStage(v);o.update(v,be,fe),Tt=be.id,$=fe.id}const tt=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),It=z.isInstancedMesh===!0,ct=z.isBatchedMesh===!0,zt=!!v.map,ce=!!v.matcap,Bt=!!W,jt=!!v.aoMap,le=!!v.lightMap,Wt=!!v.bumpMap&&v.wireframe===!1,K=!!v.normalMap,st=!!v.displacementMap,lt=!!v.emissiveMap,vt=!!v.metalnessMap,Lt=!!v.roughnessMap,O=v.anisotropy>0,Gt=v.clearcoat>0,At=v.dispersion>0,y=v.retroreflectivity>0,x=v.iridescence>0,N=v.sheen>0,k=v.transmission>0,X=O&&!!v.anisotropyMap,rt=Gt&&!!v.clearcoatMap,at=Gt&&!!v.clearcoatNormalMap,j=Gt&&!!v.clearcoatRoughnessMap,et=x&&!!v.iridescenceMap,ht=x&&!!v.iridescenceThicknessMap,Dt=N&&!!v.sheenColorMap,pt=N&&!!v.sheenRoughnessMap,ut=!!v.specularMap,Rt=!!v.specularColorMap,kt=!!v.specularIntensityMap,Zt=k&&!!v.transmissionMap,H=k&&!!v.thicknessMap,ft=!!v.gradientMap,nt=!!v.alphaMap,gt=v.alphaTest>0,St=!!v.alphaHash,it=!!v.extensions;let Ot=Un;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const Ut={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Kt,fragmentShader:yt,defines:v.defines,customVertexShaderID:Tt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ct,batchingColor:ct&&z._colorsTexture!==null,instancing:It,instancingColor:It&&z.instanceColor!==null,instancingMorph:It&&z.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:ce,envMap:Bt,envMapMode:Bt&&W.mapping,envMapCubeUVHeight:B,aoMap:jt,lightMap:le,bumpMap:Wt,normalMap:K,displacementMap:st,emissiveMap:lt,normalMapObjectSpace:K&&v.normalMapType===pf,normalMapTangentSpace:K&&v.normalMapType===Yo,packedNormalMap:K&&v.normalMapType===Yo&&xx(v.normalMap.format),metalnessMap:vt,roughnessMap:Lt,anisotropy:O,anisotropyMap:X,clearcoat:Gt,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:j,dispersion:At,retroreflection:y,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:ht,sheen:N,sheenColorMap:Dt,sheenRoughnessMap:pt,specularMap:ut,specularColorMap:Rt,specularIntensityMap:kt,transmission:k,transmissionMap:Zt,thicknessMap:H,gradientMap:ft,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:gt,alphaHash:St,combine:v.combine,mapUv:zt&&p(v.map.channel),aoMapUv:jt&&p(v.aoMap.channel),lightMapUv:le&&p(v.lightMap.channel),bumpMapUv:Wt&&p(v.bumpMap.channel),normalMapUv:K&&p(v.normalMap.channel),displacementMapUv:st&&p(v.displacementMap.channel),emissiveMapUv:lt&&p(v.emissiveMap.channel),metalnessMapUv:vt&&p(v.metalnessMap.channel),roughnessMapUv:Lt&&p(v.roughnessMap.channel),anisotropyMapUv:X&&p(v.anisotropyMap.channel),clearcoatMapUv:rt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&p(v.sheenRoughnessMap.channel),specularMapUv:ut&&p(v.specularMap.channel),specularColorMapUv:Rt&&p(v.specularColorMap.channel),specularIntensityMapUv:kt&&p(v.specularIntensityMap.channel),transmissionMapUv:Zt&&p(v.transmissionMap.channel),thicknessMapUv:H&&p(v.thicknessMap.channel),alphaMapUv:nt&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(K||O),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(zt||nt),fog:!!A,useFog:v.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&K===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:lt&&v.emissiveMap.isVideoTexture===!0&&oe.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ve,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)T.push(L),T.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const T=f[v.type];let L;if(T){const F=Pn[T];L=bl.clone(F.uniforms)}else L=v.uniforms;return L}function S(v,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new dx(i,T,v,s),c.push(L),u.set(T,L)),L}function b(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:R,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function _x(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,g,m){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=p,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=g,M.group=m),t++,M}function l(h,f,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);const R=o(h,f,p,_,g,m);p.transmission>0?n.push(R):p.transparent===!0?s.push(R):e.push(R)}function c(h,f,p,_,g,m){const M=o(h,f,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||Mx),n.length>1&&n.sort(f||ah),s.length>1&&s.sort(f||ah)}function d(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function yx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new oh,i.set(n,[a])):s>=r.length?(a=new oh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function bx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wx=0;function Ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tx(i){const t=new Sx,e=bx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new te,a=new te;function o(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,R=0,S=0,b=0,w=0,C=0,v=0,T=0,L=0;c.sort(Ex);for(let z=0,U=c.length;z<U;z++){const A=c[z],D=A.color,I=A.intensity,G=A.distance;let W=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Di?W=A.shadow.map.texture:W=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=D.r*I,d+=D.g*I,h+=D.b*I;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],I);L++}else if(A.isSunLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,q=e.get(A);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=q,n.sunShadowMap[p]=W;const ot=Y.getViewportCount();for(let mt=0;mt<ot;mt++)n.sunShadowMatrix[_+mt]=Y.getMatrix(mt),n.sunShadowCascade[_+mt]=Y._cascadeData[mt];_+=ot,p++}n.sun[f]=B,f++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,q=e.get(A);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=A.shadow.matrix,b++}n.directional[g]=B,g++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(D).multiplyScalar(I),B.distance=G,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[M]=B;const Y=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,Y.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[M]=Y.matrix,A.castShadow){const q=e.get(A);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=W,C++}M++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(D).multiplyScalar(I),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[R]=B,R++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const Y=A.shadow,q=e.get(A);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=A.shadow.matrix,w++}n.point[m]=B,m++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(I),B.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[S]=B,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const F=n.hash;(F.sunLength!==f||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==M||F.rectAreaLength!==R||F.hemiLength!==S||F.numSunShadows!==p||F.numDirectionalShadows!==b||F.numPointShadows!==w||F.numSpotShadows!==C||F.numSpotMaps!==v||F.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=R,n.point.length=m,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,F.sunLength=f,F.directionalLength=g,F.pointLength=m,F.spotLength=M,F.rectAreaLength=R,F.hemiLength=S,F.numSunShadows=p,F.numDirectionalShadows=b,F.numPointShadows=w,F.numSpotShadows=C,F.numSpotMaps=v,F.numLightProbes=L,n.version=wx++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){const S=c[M];if(S.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),d++}else if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(S.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function lh(i){const t=new Tx(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ax(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new lh(i),t.set(s,[o])):r>=a.length?(o=new lh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
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
}`,Px=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Lx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ch=new te,As=new P,$a=new P;function Ix(i,t,e){let n=new xl;const s=new Et,r=new Et,a=new ve,o=new Fd,l=new Od,c={},u=e.maxTextureSize,d={[Li]:$e,[$e]:Li,[Ve]:Ve},h=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Se;p.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let m=this.type;this.render=function(w,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Hu&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);const T=i.getRenderTarget(),L=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Yn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=m!==this.type;U&&C.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(D=>D.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,D=w.length;A<D;A++){const I=w[A],G=I.shadow;if(G===void 0){Vt("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const W=G.getFrameExtents();s.multiply(W),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,G.mapSize.y=r.y));const B=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=B,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ls){if(I.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(s.x,s.y,{format:Di,type:On,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new Js(s.x,s.y,gn),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Zn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=We,G.map.depthTexture.magFilter=We}else I.isPointLight?(G.map=new ou(s.x),G.map.depthTexture=new md(s.x,Fn)):(G.map=new wn(s.x,s.y),G.map.depthTexture=new Js(s.x,s.y,Fn)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Zn,this.type===Dr?(G.map.depthTexture.compareFunction=B?cl:ll,G.map.depthTexture.minFilter=Ke,G.map.depthTexture.magFilter=Ke):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=We,G.map.depthTexture.magFilter=We);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const Y=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();I.isPointLight!==!0&&G.updateMatrices(I,v);for(let q=0;q<Y;q++){const ot=G.getCamera(q);if(I.isPointLight){const mt=G.camera,Kt=G.matrix,yt=I.distance||mt.far;yt!==mt.far&&(mt.far=yt,mt.updateProjectionMatrix()),As.setFromMatrixPosition(I.matrixWorld),mt.position.copy(As),$a.copy(mt.position),$a.add(Px[q]),mt.up.copy(Lx[q]),mt.lookAt($a),mt.updateMatrixWorld(),Kt.makeTranslation(-As.x,-As.y,-As.z),ch.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ch,mt.coordinateSystem,mt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,q),i.clear();else{q===0&&(i.setRenderTarget(G.map),i.clear());const mt=G.getViewport(q);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),z.viewport(a)}n=G.getFrustum(q),S(C,v,ot,I,this.type)}G.isPointLightShadow!==!0&&this.type===Ls&&M(G,v),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,L,F)};function M(w,C){const v=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new wn(s.x,s.y,{format:Di,type:On}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,v,f,_,null)}function R(w,C,v,T){let L=null;const F=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)L=F;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=L.uuid,U=C.uuid;let A=c[z];A===void 0&&(A={},c[z]=A);let D=A[U];D===void 0&&(D=L.clone(),A[U]=D,C.addEventListener("dispose",b)),L=D}if(L.visible=C.visible,L.wireframe=C.wireframe,T===Ls?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=i.properties.get(L);z.light=v}return L}function S(w,C,v,T,L){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Ls)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const U=t.update(w),A=w.material;if(Array.isArray(A)){const D=U.groups;for(let I=0,G=D.length;I<G;I++){const W=D[I],B=A[W.materialIndex];if(B&&B.visible){const Y=R(w,B,T,L);w.onBeforeShadow(i,w,C,v,U,Y,W),i.renderBufferDirect(v,null,U,Y,w,W),w.onAfterShadow(i,w,C,v,U,Y,W)}}}else if(A.visible){const D=R(w,A,T,L);w.onBeforeShadow(i,w,C,v,U,D,null),i.renderBufferDirect(v,null,U,D,w,null),w.onAfterShadow(i,w,C,v,U,D,null)}}const z=w.children;for(let U=0,A=z.length;U<A;U++)S(z[U],C,v,T,L)}function b(w){w.target.removeEventListener("dispose",b);for(const v in c){const T=c[v],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function Dx(i,t){function e(){let H=!1;const ft=new ve;let nt=null;const gt=new ve(0,0,0,0);return{setMask:function(St){nt!==St&&!H&&(i.colorMask(St,St,St,St),nt=St)},setLocked:function(St){H=St},setClear:function(St,it,Ot,Ut,be){be===!0&&(St*=Ut,it*=Ut,Ot*=Ut),ft.set(St,it,Ot,Ut),gt.equals(ft)===!1&&(i.clearColor(St,it,Ot,Ut),gt.copy(ft))},reset:function(){H=!1,nt=null,gt.set(-1,0,0,0)}}}function n(){let H=!1,ft=!1,nt=null,gt=null,St=null;return{setReversed:function(it){if(ft!==it){const Ot=t.get("EXT_clip_control");it?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),ft=it;const Ut=St;St=null,this.setClear(Ut)}},getReversed:function(){return ft},setTest:function(it){it?tt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(it){nt!==it&&!H&&(i.depthMask(it),nt=it)},setFunc:function(it){if(ft&&(it=Ef[it]),gt!==it){switch(it){case oo:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=it}},setLocked:function(it){H=it},setClear:function(it){St!==it&&(St=it,ft&&(it=1-it),i.clearDepth(it))},reset:function(){H=!1,nt=null,gt=null,St=null,ft=!1}}}function s(){let H=!1,ft=null,nt=null,gt=null,St=null,it=null,Ot=null,Ut=null,be=null;return{setTest:function(fe){H||(fe?tt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(fe){ft!==fe&&!H&&(i.stencilMask(fe),ft=fe)},setFunc:function(fe,vn,En){(nt!==fe||gt!==vn||St!==En)&&(i.stencilFunc(fe,vn,En),nt=fe,gt=vn,St=En)},setOp:function(fe,vn,En){(it!==fe||Ot!==vn||Ut!==En)&&(i.stencilOp(fe,vn,En),it=fe,Ot=vn,Ut=En)},setLocked:function(fe){H=fe},setClear:function(fe){be!==fe&&(i.clearStencil(fe),be=fe)},reset:function(){H=!1,ft=null,nt=null,gt=null,St=null,it=null,Ot=null,Ut=null,be=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,R=null,S=null,b=null,w=null,C=null,v=new Ht(0,0,0),T=0,L=!1,F=null,z=null,U=null,A=null,D=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=W>=2);let Y=null,q={};const ot=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Kt=new ve().fromArray(ot),yt=new ve().fromArray(mt);function Tt(H,ft,nt,gt){const St=new Uint8Array(4),it=i.createTexture();i.bindTexture(H,it),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<nt;Ot++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(ft+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return it}const $={};$[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Hs),Wt(!1),K($l),tt(i.CULL_FACE),jt(Yn);function tt(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function dt(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function It(H,ft){return h[H]!==ft?(i.bindFramebuffer(H,ft),h[H]=ft,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function ct(H,ft){let nt=p,gt=!1;if(H){nt=f.get(ft),nt===void 0&&(nt=[],f.set(ft,nt));const St=H.textures;if(nt.length!==St.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ot=St.length;it<Ot;it++)nt[it]=i.COLOR_ATTACHMENT0+it;nt.length=St.length,gt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(nt)}function zt(H){return _!==H?(i.useProgram(H),_=H,!0):!1}const ce={[os]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};ce[qu]=i.MIN,ce[Zu]=i.MAX;const Bt={[Ju]:i.ZERO,[Ku]:i.ONE,[$u]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[ef]:i.DST_COLOR,[ju]:i.DST_ALPHA,[Qu]:i.ONE_MINUS_SRC_COLOR,[Ch]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[tf]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[lf]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(H,ft,nt,gt,St,it,Ot,Ut,be,fe){if(H===Yn){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),H!==Wu){if(H!==m||fe!==L){if((M!==os||b!==os)&&(i.blendEquation(i.FUNC_ADD),M=os,b=os),fe)switch(H){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pe:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",H);break}else switch(H){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",H);break}R=null,S=null,w=null,C=null,v.set(0,0,0),T=0,m=H,L=fe}return}St=St||ft,it=it||nt,Ot=Ot||gt,(ft!==M||St!==b)&&(i.blendEquationSeparate(ce[ft],ce[St]),M=ft,b=St),(nt!==R||gt!==S||it!==w||Ot!==C)&&(i.blendFuncSeparate(Bt[nt],Bt[gt],Bt[it],Bt[Ot]),R=nt,S=gt,w=it,C=Ot),(Ut.equals(v)===!1||be!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,be),v.copy(Ut),T=be),m=H,L=!1}function le(H,ft){H.side===Ve?dt(i.CULL_FACE):tt(i.CULL_FACE);let nt=H.side===$e;ft&&(nt=!nt),Wt(nt),H.blending===Os&&H.transparent===!1?jt(Yn):jt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const gt=H.stencilWrite;o.setTest(gt),gt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),lt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(H){F!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),F=H)}function K(H){H!==Gu?(tt(i.CULL_FACE),H!==z&&(H===$l?i.cullFace(i.BACK):H===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),z=H}function st(H){H!==U&&(G&&i.lineWidth(H),U=H)}function lt(H,ft,nt){H?(tt(i.POLYGON_OFFSET_FILL),(A!==ft||D!==nt)&&(A=ft,D=nt,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,nt))):dt(i.POLYGON_OFFSET_FILL)}function vt(H){H?tt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Lt(H){H===void 0&&(H=i.TEXTURE0+I-1),Y!==H&&(i.activeTexture(H),Y=H)}function O(H,ft,nt){nt===void 0&&(Y===null?nt=i.TEXTURE0+I-1:nt=Y);let gt=q[nt];gt===void 0&&(gt={type:void 0,texture:void 0},q[nt]=gt),(gt.type!==H||gt.texture!==ft)&&(Y!==nt&&(i.activeTexture(nt),Y=nt),i.bindTexture(H,ft||$[H]),gt.type=H,gt.texture=ft)}function Gt(){const H=q[Y];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(H){ue("WebGLState:",H)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(H){ue("WebGLState:",H)}}function x(){try{i.texSubImage2D(...arguments)}catch(H){ue("WebGLState:",H)}}function N(){try{i.texSubImage3D(...arguments)}catch(H){ue("WebGLState:",H)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(H){ue("WebGLState:",H)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(H){ue("WebGLState:",H)}}function rt(){try{i.texStorage2D(...arguments)}catch(H){ue("WebGLState:",H)}}function at(){try{i.texStorage3D(...arguments)}catch(H){ue("WebGLState:",H)}}function j(){try{i.texImage2D(...arguments)}catch(H){ue("WebGLState:",H)}}function et(){try{i.texImage3D(...arguments)}catch(H){ue("WebGLState:",H)}}function ht(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Dt(H,ft){d[H]!==ft&&(i.pixelStorei(H,ft),d[H]=ft)}function pt(H){Kt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Kt.copy(H))}function ut(H){yt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),yt.copy(H))}function Rt(H,ft){let nt=c.get(ft);nt===void 0&&(nt=new WeakMap,c.set(ft,nt));let gt=nt.get(H);gt===void 0&&(gt=i.getUniformBlockIndex(ft,H.name),nt.set(H,gt))}function kt(H,ft){const gt=c.get(ft).get(H);l.get(ft)!==gt&&(i.uniformBlockBinding(ft,gt,H.__bindingPointIndex),l.set(ft,gt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,q={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,R=null,S=null,b=null,w=null,C=null,v=new Ht(0,0,0),T=0,L=!1,F=null,z=null,U=null,A=null,D=null,Kt.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:dt,bindFramebuffer:It,drawBuffers:ct,useProgram:zt,setBlending:jt,setMaterial:le,setFlipSided:Wt,setCullFace:K,setLineWidth:st,setPolygonOffset:lt,setScissorTest:vt,activeTexture:Lt,bindTexture:O,unbindTexture:Gt,compressedTexImage2D:At,compressedTexImage3D:y,texImage2D:j,texImage3D:et,pixelStorei:Dt,getParameter:ht,updateUBOMapping:Rt,uniformBlockBinding:kt,texStorage2D:rt,texStorage3D:at,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:X,scissor:pt,viewport:ut,reset:Zt}}function Ux(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return p?new OffscreenCanvas(y,x):qs("canvas")}function g(y,x,N){let k=1;const X=At(y);if((X.width>N||X.height>N)&&(k=N/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const rt=Math.floor(k*X.width),at=Math.floor(k*X.height);h===void 0&&(h=_(rt,at));const j=x?_(rt,at):h;return j.width=rt,j.height=at,j.getContext("2d").drawImage(y,0,0,rt,at),Vt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+rt+"x"+at+")."),j}else return"data"in y&&Vt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),y;return y}function m(y){return y.generateMipmaps}function M(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(y,x,N,k,X,rt=!1){if(y!==null){if(i[y]!==void 0)return i[y];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let at;k&&(at=t.get("EXT_texture_norm16"),at||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(N===i.FLOAT&&(j=i.R32F),N===i.HALF_FLOAT&&(j=i.R16F),N===i.UNSIGNED_BYTE&&(j=i.R8),N===i.UNSIGNED_SHORT&&at&&(j=at.R16_EXT),N===i.SHORT&&at&&(j=at.R16_SNORM_EXT)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.R8UI),N===i.UNSIGNED_SHORT&&(j=i.R16UI),N===i.UNSIGNED_INT&&(j=i.R32UI),N===i.BYTE&&(j=i.R8I),N===i.SHORT&&(j=i.R16I),N===i.INT&&(j=i.R32I)),x===i.RG&&(N===i.FLOAT&&(j=i.RG32F),N===i.HALF_FLOAT&&(j=i.RG16F),N===i.UNSIGNED_BYTE&&(j=i.RG8),N===i.UNSIGNED_SHORT&&at&&(j=at.RG16_EXT),N===i.SHORT&&at&&(j=at.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RG8UI),N===i.UNSIGNED_SHORT&&(j=i.RG16UI),N===i.UNSIGNED_INT&&(j=i.RG32UI),N===i.BYTE&&(j=i.RG8I),N===i.SHORT&&(j=i.RG16I),N===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RGB8UI),N===i.UNSIGNED_SHORT&&(j=i.RGB16UI),N===i.UNSIGNED_INT&&(j=i.RGB32UI),N===i.BYTE&&(j=i.RGB8I),N===i.SHORT&&(j=i.RGB16I),N===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),N===i.UNSIGNED_INT&&(j=i.RGBA32UI),N===i.BYTE&&(j=i.RGBA8I),N===i.SHORT&&(j=i.RGBA16I),N===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_SHORT&&at&&(j=at.RGB16_EXT),N===i.SHORT&&at&&(j=at.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){const et=rt?Xr:oe.getTransfer(X);N===i.FLOAT&&(j=i.RGBA32F),N===i.HALF_FLOAT&&(j=i.RGBA16F),N===i.UNSIGNED_BYTE&&(j=et===me?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&at&&(j=at.RGBA16_EXT),N===i.SHORT&&at&&(j=at.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(y,x){let N;return y?x===null||x===Fn||x===Xs?N=i.DEPTH24_STENCIL8:x===gn?N=i.DEPTH32F_STENCIL8:x===Ws&&(N=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===Xs?N=i.DEPTH_COMPONENT24:x===gn?N=i.DEPTH_COMPONENT32F:x===Ws&&(N=i.DEPTH_COMPONENT16),N}function w(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==We&&y.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function C(y){const x=y.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function v(y){const x=y.target;x.removeEventListener("dispose",v),F(x)}function T(y){const x=n.get(y);if(x.__webglInit===void 0)return;const N=y.source,k=f.get(N);if(k){const X=k[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(y),Object.keys(k).length===0&&f.delete(N)}n.remove(y)}function L(y){const x=n.get(y);i.deleteTexture(x.__webglTexture);const N=y.source,k=f.get(N);delete k[x.__cacheKey],a.memory.textures--}function F(y){const x=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let X=0;X<x.__webglFramebuffer[k].length;X++)i.deleteFramebuffer(x.__webglFramebuffer[k][X]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=y.textures;for(let k=0,X=N.length;k<X;k++){const rt=n.get(N[k]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(N[k])}n.remove(y)}let z=0;function U(){z=0}function A(){return z}function D(y){z=y}function I(){const y=z;return y>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,y}function G(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function W(y,x){const N=n.get(y);if(y.isVideoTexture&&O(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){const k=y.image;if(k===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(N,y,x);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function B(y,x){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){dt(N,y,x);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function Y(y,x){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){dt(N,y,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function q(y,x){const N=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){It(N,y,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const ot={[Gr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},mt={[We]:i.NEAREST,[ff]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Kt={[gf]:i.NEVER,[yf]:i.ALWAYS,[xf]:i.LESS,[ll]:i.LEQUAL,[vf]:i.EQUAL,[cl]:i.GEQUAL,[_f]:i.GREATER,[Mf]:i.NOTEQUAL};function yt(y,x){if(x.type===gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===ga||x.magFilter===er||x.magFilter===Ri||x.minFilter===Ke||x.minFilter===ga||x.minFilter===er||x.minFilter===Ri)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,ot[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ot[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ot[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Kt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==er&&x.minFilter!==Ri||x.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Tt(y,x){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",C));const k=x.source;let X=f.get(k);X===void 0&&(X={},f.set(k,X));const rt=G(x);if(rt!==y.__cacheKey){X[rt]===void 0&&(X[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),X[rt].usedTimes++;const at=X[y.__cacheKey];at!==void 0&&(X[y.__cacheKey].usedTimes--,at.usedTimes===0&&L(x)),y.__cacheKey=rt,y.__webglTexture=X[rt].texture}return N}function $(y,x,N){return Math.floor(Math.floor(y/N)/x)}function tt(y,x,N,k){const rt=y.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,k,x.data);else{rt.sort((Dt,pt)=>Dt.start-pt.start);let at=0;for(let Dt=1;Dt<rt.length;Dt++){const pt=rt[at],ut=rt[Dt],Rt=pt.start+pt.count,kt=$(ut.start,x.width,4),Zt=$(pt.start,x.width,4);ut.start<=Rt+1&&kt===Zt&&$(ut.start+ut.count-1,x.width,4)===kt?pt.count=Math.max(pt.count,ut.start+ut.count-pt.start):(++at,rt[at]=ut)}rt.length=at+1;const j=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Dt=0,pt=rt.length;Dt<pt;Dt++){const ut=rt[Dt],Rt=Math.floor(ut.start/4),kt=Math.ceil(ut.count/4),Zt=Rt%x.width,H=Math.floor(Rt/x.width),ft=kt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Zt,H,ft,nt,N,k,x.data)}y.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function dt(y,x,N){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);const X=Tt(y,x),rt=x.source;e.bindTexture(k,y.__webglTexture,i.TEXTURE0+N);const at=n.get(rt);if(rt.version!==at.__version||X===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const nt=oe.getPrimaries(oe.workingColorSpace),gt=x.colorSpace===oi?null:oe.getPrimaries(x.colorSpace),St=x.colorSpace===oi||nt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=g(x.image,!1,s.maxTextureSize);et=Gt(x,et);const ht=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type);let pt=S(x.internalFormat,ht,Dt,x.normalized,x.colorSpace,x.isVideoTexture);yt(k,x);let ut;const Rt=x.mipmaps,kt=x.isVideoTexture!==!0,Zt=at.__version===void 0||X===!0,H=rt.dataReady,ft=w(x,et);if(x.isDepthTexture)pt=b(x.format===Ci,x.type),Zt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,pt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,pt,et.width,et.height,0,ht,Dt,null));else if(x.isDataTexture)if(Rt.length>0){kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,ft,pt,Rt[0].width,Rt[0].height);for(let nt=0,gt=Rt.length;nt<gt;nt++)ut=Rt[nt],kt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,ht,Dt,ut.data):e.texImage2D(i.TEXTURE_2D,nt,pt,ut.width,ut.height,0,ht,Dt,ut.data);x.generateMipmaps=!1}else kt?(Zt&&e.texStorage2D(i.TEXTURE_2D,ft,pt,et.width,et.height),H&&tt(x,et,ht,Dt)):e.texImage2D(i.TEXTURE_2D,0,pt,et.width,et.height,0,ht,Dt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,pt,Rt[0].width,Rt[0].height,et.depth);for(let nt=0,gt=Rt.length;nt<gt;nt++)if(ut=Rt[nt],x.format!==xn)if(ht!==null)if(kt){if(H)if(x.layerUpdates.size>0){const St=Gc(ut.width,ut.height,x.format,x.type);for(const it of x.layerUpdates){const Ot=ut.data.subarray(it*St/ut.data.BYTES_PER_ELEMENT,(it+1)*St/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,it,ut.width,ut.height,1,ht,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,et.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,pt,ut.width,ut.height,et.depth,0,ut.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,et.depth,ht,Dt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,pt,ut.width,ut.height,et.depth,0,ht,Dt,ut.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,ft,pt,Rt[0].width,Rt[0].height);for(let nt=0,gt=Rt.length;nt<gt;nt++)ut=Rt[nt],x.format!==xn?ht!==null?kt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,pt,ut.width,ut.height,0,ut.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,ht,Dt,ut.data):e.texImage2D(i.TEXTURE_2D,nt,pt,ut.width,ut.height,0,ht,Dt,ut.data)}else if(x.isDataArrayTexture)if(kt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,pt,et.width,et.height,et.depth),H)if(x.layerUpdates.size>0){const nt=Gc(et.width,et.height,x.format,x.type);for(const gt of x.layerUpdates){const St=et.data.subarray(gt*nt/et.data.BYTES_PER_ELEMENT,(gt+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,et.width,et.height,1,ht,Dt,St)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,et.width,et.height,et.depth,0,ht,Dt,et.data);else if(x.isData3DTexture)kt?(Zt&&e.texStorage3D(i.TEXTURE_3D,ft,pt,et.width,et.height,et.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,pt,et.width,et.height,et.depth,0,ht,Dt,et.data);else if(x.isFramebufferTexture){if(Zt)if(kt)e.texStorage2D(i.TEXTURE_2D,ft,pt,et.width,et.height);else{let nt=et.width,gt=et.height;for(let St=0;St<ft;St++)e.texImage2D(i.TEXTURE_2D,St,pt,nt,gt,0,ht,Dt,null),nt>>=1,gt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),et.parentNode!==nt){nt.appendChild(et),d.add(x),nt.onpaint=gt=>{const St=gt.changedElements;for(const it of d)St.includes(it.image)&&(it.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{const St=i.RGBA,it=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,it,Ot,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(kt&&Zt){const nt=At(Rt[0]);e.texStorage2D(i.TEXTURE_2D,ft,pt,nt.width,nt.height)}for(let nt=0,gt=Rt.length;nt<gt;nt++)ut=Rt[nt],kt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ht,Dt,ut):e.texImage2D(i.TEXTURE_2D,nt,pt,ht,Dt,ut);x.generateMipmaps=!1}else if(kt){if(Zt){const nt=At(et);e.texStorage2D(i.TEXTURE_2D,ft,pt,nt.width,nt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,pt,ht,Dt,et);m(x)&&M(k),at.__version=rt.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function It(y,x,N){if(x.image.length!==6)return;const k=Tt(y,x),X=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const rt=n.get(X);if(X.version!==rt.__version||k===!0){e.activeTexture(i.TEXTURE0+N);const at=oe.getPrimaries(oe.workingColorSpace),j=x.colorSpace===oi?null:oe.getPrimaries(x.colorSpace),et=x.colorSpace===oi||at===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const ht=x.isCompressedTexture||x.image[0].isCompressedTexture,Dt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let it=0;it<6;it++)!ht&&!Dt?pt[it]=g(x.image[it],!0,s.maxCubemapSize):pt[it]=Dt?x.image[it].image:x.image[it],pt[it]=Gt(x,pt[it]);const ut=pt[0],Rt=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),Zt=S(x.internalFormat,Rt,kt,x.normalized,x.colorSpace),H=x.isVideoTexture!==!0,ft=rt.__version===void 0||k===!0,nt=X.dataReady;let gt=w(x,ut);yt(i.TEXTURE_CUBE_MAP,x);let St;if(ht){H&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Zt,ut.width,ut.height);for(let it=0;it<6;it++){St=pt[it].mipmaps;for(let Ot=0;Ot<St.length;Ot++){const Ut=St[Ot];x.format!==xn?Rt!==null?H?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,0,0,Ut.width,Ut.height,Rt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,Zt,Ut.width,Ut.height,0,Ut.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,0,0,Ut.width,Ut.height,Rt,kt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,Zt,Ut.width,Ut.height,0,Rt,kt,Ut.data)}}}else{if(St=x.mipmaps,H&&ft){St.length>0&&gt++;const it=At(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Zt,it.width,it.height)}for(let it=0;it<6;it++)if(Dt){H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt[it].width,pt[it].height,Rt,kt,pt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,pt[it].width,pt[it].height,0,Rt,kt,pt[it].data);for(let Ot=0;Ot<St.length;Ot++){const be=St[Ot].image[it].image;H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,0,0,be.width,be.height,Rt,kt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,Zt,be.width,be.height,0,Rt,kt,be.data)}}else{H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Rt,kt,pt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,Rt,kt,pt[it]);for(let Ot=0;Ot<St.length;Ot++){const Ut=St[Ot];H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,0,0,Rt,kt,Ut.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,Zt,Rt,kt,Ut.image[it])}}}m(x)&&M(i.TEXTURE_CUBE_MAP),rt.__version=X.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ct(y,x,N,k,X,rt){const at=r.convert(N.format,N.colorSpace),j=r.convert(N.type),et=S(N.internalFormat,at,j,N.normalized,N.colorSpace),ht=n.get(x),Dt=n.get(N);if(Dt.__renderTarget=x,!ht.__hasExternalTextures){const pt=Math.max(1,x.width>>rt),ut=Math.max(1,x.height>>rt);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,rt,et,pt,ut,x.depth,0,at,j,null):e.texImage2D(X,rt,et,pt,ut,0,at,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,X,Dt.__webglTexture,0,vt(x)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,X,Dt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(y,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){const k=x.depthTexture,X=k&&k.isDepthTexture?k.type:null,rt=b(x.stencilBuffer,X),at=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(x),rt,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(x),rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,y)}else{const k=x.textures;for(let X=0;X<k.length;X++){const rt=k[X],at=r.convert(rt.format,rt.colorSpace),j=r.convert(rt.type),et=S(rt.internalFormat,at,j,rt.normalized,rt.colorSpace);Lt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(x),et,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(y,x,N){const k=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),yt(i.TEXTURE_CUBE_MAP,x.depthTexture);const ht=r.convert(x.depthTexture.format),Dt=r.convert(x.depthTexture.type);let pt;x.depthTexture.format===Zn?pt=i.DEPTH_COMPONENT24:x.depthTexture.format===Ci&&(pt=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,x.width,x.height,0,ht,Dt,null)}}else W(x.depthTexture,0);const rt=X.__webglTexture,at=vt(x),j=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,et=x.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)Lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,rt,0);else if(x.depthTexture.format===Ci)Lt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(y){const x=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=k}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)ce(x.__webglFramebuffer[k],y,k);else{const k=y.texture.mipmaps;k&&k.length>0?ce(x.__webglFramebuffer[0],y,0):ce(x.__webglFramebuffer,y,0)}else if(N){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),zt(x.__webglDepthbuffer[k],y,!1);else{const X=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,rt)}}else{const k=y.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),zt(x.__webglDepthbuffer,y,!1);else{const X=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(y,x,N){const k=n.get(y);x!==void 0&&ct(k.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Bt(y)}function le(y){const x=y.texture,N=n.get(y),k=n.get(x);y.addEventListener("dispose",v);const X=y.textures,rt=y.isWebGLCubeRenderTarget===!0,at=X.length>1;if(at||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,a.memory.textures++),rt){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let et=0;et<x.mipmaps.length;et++)N.__webglFramebuffer[j][et]=i.createFramebuffer()}else N.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)N.__webglFramebuffer[j]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(at)for(let j=0,et=X.length;j<et;j++){const ht=n.get(X[j]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Lt(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<X.length;j++){const et=X[j];N.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[j]);const ht=r.convert(et.format,et.colorSpace),Dt=r.convert(et.type),pt=S(et.internalFormat,ht,Dt,et.normalized,et.colorSpace,y.isXRRenderTarget===!0),ut=vt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,N.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),yt(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)ct(N.__webglFramebuffer[j][et],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else ct(N.__webglFramebuffer[j],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(x)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let j=0,et=X.length;j<et;j++){const ht=X[j],Dt=n.get(ht);let pt=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Dt.__webglTexture),yt(pt,ht),ct(N.__webglFramebuffer,y,ht,i.COLOR_ATTACHMENT0+j,pt,0),m(ht)&&M(pt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(j=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,k.__webglTexture),yt(j,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)ct(N.__webglFramebuffer[et],y,x,i.COLOR_ATTACHMENT0,j,et);else ct(N.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,j,0);m(x)&&M(j),e.unbindTexture()}y.depthBuffer&&Bt(y)}function Wt(y){const x=y.textures;for(let N=0,k=x.length;N<k;N++){const X=x[N];if(m(X)){const rt=R(y),at=n.get(X).__webglTexture;e.bindTexture(rt,at),M(rt),e.unbindTexture()}}}const K=[],st=[];function lt(y){if(y.samples>0){if(Lt(y)===!1){const x=y.textures,N=y.width,k=y.height;let X=i.COLOR_BUFFER_BIT;const rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(y),j=x.length>1;if(j)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const et=y.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);const Dt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,X,i.NEAREST),l===!0&&(K.length=0,st.length=0,K.push(i.COLOR_ATTACHMENT0+ht),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(K.push(rt),st.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,st)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);const Dt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){const x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function vt(y){return Math.min(s.maxSamples,y.samples)}function Lt(y){const x=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(y){const x=a.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function Gt(y,x){const N=y.colorSpace,k=y.format,X=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==Wr&&N!==oi&&(oe.getTransfer(N)===me?(k!==xn||X!==un)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",N)),x}function At(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=jt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Nx(i,t){function e(n,s=oi){let r;const a=oe.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===xn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Fr||n===Or)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===xo||n===vo||n===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===yo||n===So||n===bo||n===wo||n===Vr||n===Eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===yo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vr)return r.COMPRESSED_RG11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===zo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Go||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Wo||n===Hr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
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

}`;class zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new tu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:Fx,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends Ni{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new zx,m={},M=e.getContextAttributes();let R=null,S=null;const b=[],w=[],C=new Et;let v=null,T=null;const L=new cn;L.viewport=new ve;const F=new cn;F.viewport=new ve;const z=[L,F],U=new qd;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=b[$];return tt===void 0&&(tt=new ba,b[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=b[$];return tt===void 0&&(tt=new ba,b[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=b[$];return tt===void 0&&(tt=new ba,b[$]=tt),tt.getHandSpace()};function I($){const tt=w.indexOf($.inputSource);if(tt===-1)return;const dt=b[tt];dt!==void 0&&(dt.update($.inputSource,$.frame,c||a),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",W);for(let $=0;$<b.length;$++){const tt=w[$];tt!==null&&(w[$]=null,b[$].disconnect(tt))}A=null,D=null,g.reset();for(const $ in m)delete m[$];if(t.setRenderTarget(R),f=null,h=null,d=null,s=null,S=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",G),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,It=null,ct=null;M.depth&&(ct=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=M.stencil?Ci:Zn,It=M.stencil?Xs:Fn);const zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new wn(h.textureWidth,h.textureHeight,{format:xn,type:un,depthTexture:new Js(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const dt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new wn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W($){for(let tt=0;tt<$.removed.length;tt++){const dt=$.removed[tt],It=w.indexOf(dt);It>=0&&(w[It]=null,b[It].disconnect(dt))}for(let tt=0;tt<$.added.length;tt++){const dt=$.added[tt];let It=w.indexOf(dt);if(It===-1){for(let zt=0;zt<b.length;zt++)if(zt>=w.length){w.push(dt),It=zt;break}else if(w[zt]===null){w[zt]=dt,It=zt;break}if(It===-1)break}const ct=b[It];ct&&ct.connect(dt)}}const B=new P,Y=new P;function q($,tt,dt){B.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);const It=B.distanceTo(Y),ct=tt.projectionMatrix.elements,zt=dt.projectionMatrix.elements,ce=ct[14]/(ct[10]-1),Bt=ct[14]/(ct[10]+1),jt=(ct[9]+1)/ct[5],le=(ct[9]-1)/ct[5],Wt=(ct[8]-1)/ct[0],K=(zt[8]+1)/zt[0],st=ce*Wt,lt=ce*K,vt=It/(-Wt+K),Lt=vt*-Wt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ct[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const O=ce+vt,Gt=Bt+vt,At=st-Lt,y=lt+(It-Lt),x=jt*Bt/Gt*O,N=le*Bt/Gt*O;$.projectionMatrix.makePerspective(At,y,x,N,O,Gt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ot($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,dt=$.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),U.near=F.near=L.near=tt,U.far=F.far=L.far=dt,(A!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),A=U.near,D=U.far),U.layers.mask=$.layers.mask|6,L.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;const It=$.parent,ct=U.cameras;ot(U,It);for(let zt=0;zt<ct.length;zt++)ot(ct[zt],It);ct.length===2?q(U,L,F):U.projectionMatrix.copy(L.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),mt($,U,It)};function mt($,tt,dt){dt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let Kt=null;function yt($,tt){if(u=tt.getViewerPose(c||a),p=tt,u!==null){const dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let It=!1;dt.length!==U.cameras.length&&(U.cameras.length=0,It=!0);for(let Bt=0;Bt<dt.length;Bt++){const jt=dt[Bt];let le=null;if(f!==null)le=f.getViewport(jt);else{const K=d.getViewSubImage(h,jt);le=K.viewport,Bt===0&&(t.setRenderTargetTextures(S,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(S))}let Wt=z[Bt];Wt===void 0&&(Wt=new cn,Wt.layers.enable(Bt),Wt.viewport=new ve,z[Bt]=Wt),Wt.matrix.fromArray(jt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(jt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Bt===0&&(U.matrix.copy(Wt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),It===!0&&U.cameras.push(Wt)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Bt=d.getDepthInformation(dt[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,s.renderState)}if(ct&&ct.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<dt.length;Bt++){const jt=dt[Bt].camera;if(jt){let le=m[jt];le||(le=new tu,m[jt]=le);const Wt=d.getCameraImage(jt);le.sourceTexture=Wt}}}}for(let dt=0;dt<b.length;dt++){const It=w[dt],ct=b[dt];It!==null&&ct!==void 0&&ct.update(It,tt,c||a)}Kt&&Kt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const Tt=new ru;Tt.setAnimationLoop(yt),this.setAnimationLoop=function($){Kt=$},this.dispose=function(){}}}const kx=new te,fu=new Jt;fu.set(-1,0,0,0,1,0,0,0,1);function Gx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,nu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,R,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),R=M.envMap,S=M.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(fu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=R*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const w=b.program;n.uniformBlockBinding(S,w)}function c(S,b){let w=s[S.id];w===void 0&&(g(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",M));const C=b.program;n.updateUBOMapping(S,C);const v=t.render.frame;r[S.id]!==v&&(h(S),r[S.id]=v)}function u(S){const b=d();S.__bindingPointIndex=b;const w=i.createBuffer(),C=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=s[S.id],w=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=w.length;v<T;v++){const L=w[v];if(Array.isArray(L))for(let F=0,z=L.length;F<z;F++)f(L[F],v,F,C);else f(L,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,w,C){if(_(S,b,w,C)===!0){const v=S.__offset,T=S.value;if(Array.isArray(T)){let L=0;for(let F=0;F<T.length;F++){const z=T[F],U=m(z);p(z,S.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function p(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function _(S,b,w,C){const v=S.value,T=b+"_"+w;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{const L=C[T];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function g(S){const b=S.uniforms;let w=0;const C=16;for(let T=0,L=b.length;T<L;T++){const F=Array.isArray(b[T])?b[T]:[b[T]];for(let z=0,U=F.length;z<U;z++){const A=F[z],D=Array.isArray(A.value)?A.value:[A.value];for(let I=0,G=D.length;I<G;I++){const W=D[I],B=m(W),Y=w%C,q=Y%B.boundary,ot=Y+q;w+=q,ot!==0&&C-ot<B.storage&&(w+=C-ot),A.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,w+=B.storage}}}const v=w%C;return v>0&&(w+=C-v),S.__size=w,S.__cache={},this}function m(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),b}function M(S){const b=S.target;b.removeEventListener("dispose",M);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}const Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function Wx(){return Rn===null&&(Rn=new ml(Hx,16,16,Di,On),Rn.name="DFG_LUT",Rn.minFilter=Ke,Rn.magFilter=Ke,Rn.wrapS=In,Rn.wrapT=In,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class Xx{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([ol,al,rl]),m=new Set([un,Fn,Ws,Xs,nl,il]),M=new Uint32Array(4),R=new Int32Array(4),S=new P;let b=null,w=null;const C=[],v=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1,z=null,U=null,A=null,D=null;this._outputColorSpace=Ne;let I=0,G=0,W=null,B=-1,Y=null;const q=new ve,ot=new ve;let mt=null;const Kt=new Ht(0);let yt=0,Tt=e.width,$=e.height,tt=1,dt=null,It=null;const ct=new ve(0,0,Tt,$),zt=new ve(0,0,Tt,$);let ce=!1;const Bt=new xl;let jt=!1,le=!1;const Wt=new te,K=new P,st=new ve,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Lt(){return W===null?tt:1}let O=n;function Gt(E,V){return e.getContext(E,V)}let At,y,x,N,k,X,rt,at,j,et,ht,Dt,pt,ut,Rt,kt,Zt,H,ft,nt,gt,St,it;try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",vn,!1),O===null){const V="webgl2";if(O=Gt(V,E),O===null)throw Gt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(E){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),ue("WebGLRenderer: "+E.message),E}function Ot(){At=new Wm(O),At.init(),gt=new Nx(O,At),y=new Um(O,At,t,gt),x=new Dx(O,At),y.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),U=O.createFramebuffer(),A=O.createFramebuffer(),D=O.createFramebuffer(),N=new qm(O),k=new _x,X=new Ux(O,At,x,k,y,gt,N),rt=new Hm(L),at=new Jd(O),St=new Im(O,at),j=new Xm(O,at,N,St),et=new Jm(O,j,at,St,N),H=new Zm(O,y,X),Rt=new Nm(k),ht=new vx(L,rt,At,y,St,Rt),Dt=new Gx(L,k),pt=new yx,ut=new Ax(At),Zt=new Lm(L,rt,x,et,p,l),kt=new Ix(L,et,y),it=new Vx(O,N,y,x),ft=new Dm(O,At,N),nt=new Ym(O,At,N),N.programs=ht.programs,L.capabilities=y,L.extensions=At,L.properties=k,L.renderLists=pt,L.shadowMap=kt,L.state=x,L.info=N}_!==un&&(T=new $m(_,e.width,e.height,o,s,r));const Ut=new Bx(L,O);this.xr=Ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=At.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=At.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(Tt,$,!1))},this.getSize=function(E){return E.set(Tt,$)},this.setSize=function(E,V,Q=!0){if(Ut.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=E,$=V,e.width=Math.floor(E*tt),e.height=Math.floor(V*tt),Q===!0&&(e.style.width=E+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Tt*tt,$*tt).floor()},this.setDrawingBufferSize=function(E,V,Q){Tt=E,$=V,tt=Q,e.width=Math.floor(E*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(_===un){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,V,Q,Z){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,V,Q,Z),x.viewport(q.copy(ct).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(zt)},this.setScissor=function(E,V,Q,Z){E.isVector4?zt.set(E.x,E.y,E.z,E.w):zt.set(E,V,Q,Z),x.scissor(ot.copy(zt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){x.setScissorTest(ce=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){It=E},this.getClearColor=function(E){return E.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,Q=!0){let Z=0;if(E){let J=!1;if(W!==null){const Mt=W.texture.format;J=g.has(Mt)}if(J){const Mt=W.texture.type,wt=m.has(Mt),_t=Zt.getClearColor(),Ct=Zt.getClearAlpha(),Nt=_t.r,ee=_t.g,se=_t.b;wt?(M[0]=Nt,M[1]=ee,M[2]=se,M[3]=Ct,O.clearBufferuiv(O.COLOR,0,M)):(R[0]=Nt,R[1]=ee,R[2]=se,R[3]=Ct,O.clearBufferiv(O.COLOR,0,R))}else Z|=O.COLOR_BUFFER_BIT}V&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),Zt.dispose(),pt.dispose(),ut.dispose(),k.dispose(),rt.dispose(),et.dispose(),St.dispose(),it.dispose(),ht.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Vl),Ut.removeEventListener("sessionend",Hl),Mi.stop()};function be(E){E.preventDefault(),Yr("WebGLRenderer: Context Lost."),F=!0}function fe(){Yr("WebGLRenderer: Context Restored."),F=!1;const E=N.autoReset,V=kt.enabled,Q=kt.autoUpdate,Z=kt.needsUpdate,J=kt.type;Ot(),N.autoReset=E,kt.enabled=V,kt.autoUpdate=Q,kt.needsUpdate=Z,kt.type=J}function vn(E){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function En(E){const V=E.target;V.removeEventListener("dispose",En),Uu(V)}function Uu(E){Nu(E),k.remove(E)}function Nu(E){const V=k.get(E).programs;V!==void 0&&(V.forEach(function(Q){ht.releaseProgram(Q)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Q,Z,J,Mt){V===null&&(V=lt);const wt=J.isMesh&&J.matrixWorld.determinantAffine()<0,_t=zu(E,V,Q,Z,J);x.setMaterial(Z,wt);let Ct=Q.index,Nt=1;if(Z.wireframe===!0){if(Ct=j.getWireframeAttribute(Q),Ct===void 0)return;Nt=2}const ee=Q.drawRange,se=Q.attributes.position;let Pt=ee.start*Nt,de=(ee.start+ee.count)*Nt;Mt!==null&&(Pt=Math.max(Pt,Mt.start*Nt),de=Math.min(de,(Mt.start+Mt.count)*Nt)),Ct!==null?(Pt=Math.max(Pt,0),de=Math.min(de,Ct.count)):se!=null&&(Pt=Math.max(Pt,0),de=Math.min(de,se.count));const Ie=de-Pt;if(Ie<0||Ie===1/0)return;St.setup(J,Z,_t,Q,Ct);let Ee,_e=ft;if(Ct!==null&&(Ee=at.get(Ct),_e=nt,_e.setIndex(Ee)),J.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*Lt()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(J.isLine){let Ye=Z.linewidth;Ye===void 0&&(Ye=1),x.setLineWidth(Ye*Lt()),J.isLineSegments?_e.setMode(O.LINES):J.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else J.isPoints?_e.setMode(O.POINTS):J.isSprite&&_e.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(At.get("WEBGL_multi_draw"))_e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ye=J._multiDrawStarts,bt=J._multiDrawCounts,en=J._multiDrawCount,he=Ct?at.get(Ct).bytesPerElement:1,dn=k.get(Z).currentProgram.getUniforms();for(let Tn=0;Tn<en;Tn++)dn.setValue(O,"_gl_DrawID",Tn),_e.render(Ye[Tn]/he,bt[Tn])}else if(J.isInstancedMesh)_e.renderInstances(Pt,Ie,J.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,bt=Math.min(Q.instanceCount,Ye);_e.renderInstances(Pt,Ie,bt)}else _e.render(Pt,Ie)};function Gl(E,V,Q,Z){z!==null&&E.isNodeMaterial&&z.setObject(Z,E),jt===!0&&Rt.setState(E,Q,!1),E.transparent===!0&&E.side===Ve&&E.forceSinglePass===!1?(E.side=$e,E.needsUpdate=!0,tr(E,V,Z),E.side=Li,E.needsUpdate=!0,tr(E,V,Z),E.side=Ve):tr(E,V,Z)}this.compile=function(E,V,Q=null){Q===null&&(Q=E),z!==null&&z.renderStart(E,V,Q),w=ut.get(Q),w.init(V),v.push(w),Q.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),E!==Q&&E.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),le=this.localClippingEnabled,jt=Rt.init(this.clippingPlanes,le),jt===!0&&Rt.setGlobalState(this.clippingPlanes,V),z!==null&&kt.render(w.state.shadowsArray,Q,V);const Z=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Mt=J.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){const _t=Mt[wt];Gl(_t,Q,V,J),Z.add(_t)}else Gl(Mt,Q,V,J),Z.add(Mt)}),w=v.pop(),z!==null&&z.renderEnd(),Z},this.compileAsync=function(E,V,Q=null){const Z=this.compile(E,V,Q);return new Promise(J=>{function Mt(){if(Z.forEach(function(wt){const Ct=k.get(wt).currentProgram;(Ct===void 0||Ct.isReady())&&Z.delete(wt)}),Z.size===0){J(E);return}setTimeout(Mt,10)}At.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let fa=null;function Fu(E){fa&&fa(E)}function Vl(){Mi.stop()}function Hl(){Mi.start()}const Mi=new ru;Mi.setAnimationLoop(Fu),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(E){fa=E,Ut.setAnimationLoop(E),E===null?Mi.stop():Mi.start()},Ut.addEventListener("sessionstart",Vl),Ut.addEventListener("sessionend",Hl),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(E,V);const Q=Ut.enabled===!0&&Ut.isPresenting===!0,Z=T!==null&&(W===null||Q)&&T.begin(L,W);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(V),V=Ut.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,V,W),w=ut.get(E,v.length),w.init(V),w.state.textureUnits=X.getTextureUnits(),v.push(w),Wt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Bt.setFromProjectionMatrix(Wt,Dn,V.reversedDepth),le=this.localClippingEnabled,jt=Rt.init(this.clippingPlanes,le),b=pt.get(E,C.length),b.init(),C.push(b),Ut.enabled===!0&&Ut.isPresenting===!0){const wt=L.xr.getDepthSensingMesh();wt!==null&&da(wt,V,-1/0,L.sortObjects)}da(E,V,0,L.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),L.sortObjects===!0&&b.sort(dt,It),vt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,vt&&Zt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Rt.beginShadows();const J=w.state.shadowsArray;if(kt.render(J,E,V),jt===!0&&Rt.endShadows(),(Z&&T.hasRenderPass())===!1){const wt=b.opaque,_t=b.transmissive;if(w.setupLights(),V.isArrayCamera){const Ct=V.cameras;if(_t.length>0)for(let Nt=0,ee=Ct.length;Nt<ee;Nt++){const se=Ct[Nt];Xl(wt,_t,E,se)}vt&&Zt.render(E);for(let Nt=0,ee=Ct.length;Nt<ee;Nt++){const se=Ct[Nt];Wl(b,E,se,se.viewport)}}else _t.length>0&&Xl(wt,_t,E,V),vt&&Zt.render(E),Wl(b,E,V)}W!==null&&G===0&&(X.updateMultisampleRenderTarget(W),X.updateRenderTargetMipmap(W)),Z&&T.end(L),E.isScene===!0&&E.onAfterRender(L,E,V),St.resetDefaultState(),B=-1,Y=null,v.pop(),v.length>0?(w=v[v.length-1],X.setTextureUnits(w.state.textureUnits),jt===!0&&Rt.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,z!==null&&z.renderEnd()};function da(E,V,Q,Z){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Bt)){Z&&st.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Wt);const wt=et.update(E),_t=E.material;_t.visible&&b.push(E,wt,_t,Q,st.z,null,V)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Bt))){const wt=et.update(E),_t=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),st.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),st.copy(wt.boundingSphere.center)),st.applyMatrix4(E.matrixWorld).applyMatrix4(Wt)),Array.isArray(_t)){const Ct=wt.groups;for(let Nt=0,ee=Ct.length;Nt<ee;Nt++){const se=Ct[Nt],Pt=_t[se.materialIndex];Pt&&Pt.visible&&b.push(E,wt,Pt,Q,st.z,se,V)}}else _t.visible&&b.push(E,wt,_t,Q,st.z,null,V)}}const Mt=E.children;for(let wt=0,_t=Mt.length;wt<_t;wt++)da(Mt[wt],V,Q,Z)}function Wl(E,V,Q,Z){const{opaque:J,transmissive:Mt,transparent:wt}=E;w.setupLightsView(Q),jt===!0&&Rt.setGlobalState(L.clippingPlanes,Q),Z&&x.viewport(q.copy(Z)),J.length>0&&js(J,V,Q),Mt.length>0&&js(Mt,V,Q),wt.length>0&&js(wt,V,Q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Xl(E,V,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){const Pt=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new wn(1,1,{generateMipmaps:!0,type:Pt?On:un,minFilter:Ri,samples:Math.max(4,y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const Mt=w.state.transmissionRenderTarget[Z.id],wt=Z.viewport||q;Mt.setSize(wt.z*L.transmissionResolutionScale,wt.w*L.transmissionResolutionScale);const _t=L.getRenderTarget(),Ct=L.getActiveCubeFace(),Nt=L.getActiveMipmapLevel();L.setRenderTarget(Mt),L.getClearColor(Kt),yt=L.getClearAlpha(),yt<1&&L.setClearColor(16777215,.5),L.clear(),vt&&Zt.render(Q);const ee=L.toneMapping;L.toneMapping=Un;const se=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),jt===!0&&Rt.setGlobalState(L.clippingPlanes,Z),js(E,Q,Z),X.updateMultisampleRenderTarget(Mt),X.updateRenderTargetMipmap(Mt),At.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let de=0,Ie=V.length;de<Ie;de++){const Ee=V[de],{object:_e,geometry:Ye,material:bt,group:en}=Ee;if(bt.side===Ve&&_e.layers.test(Z.layers)){const he=bt.side;bt.side=$e,bt.needsUpdate=!0,Yl(_e,Q,Z,Ye,bt,en),bt.side=he,bt.needsUpdate=!0,Pt=!0}}Pt===!0&&(X.updateMultisampleRenderTarget(Mt),X.updateRenderTargetMipmap(Mt))}L.setRenderTarget(_t,Ct,Nt),L.setClearColor(Kt,yt),se!==void 0&&(Z.viewport=se),L.toneMapping=ee}function js(E,V,Q){const Z=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Mt=E.length;J<Mt;J++){const wt=E[J],{object:_t,geometry:Ct,group:Nt}=wt;let ee=wt.material;ee.allowOverride===!0&&Z!==null&&(ee=Z),_t.layers.test(Q.layers)&&Yl(_t,V,Q,Ct,ee,Nt)}}function Yl(E,V,Q,Z,J,Mt){z!==null&&J.isNodeMaterial&&z.setObject(E,J),E.onBeforeRender(L,V,Q,Z,J,Mt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(L,V,Q,Z,E,Mt),J.transparent===!0&&J.side===Ve&&J.forceSinglePass===!1?(J.side=$e,J.needsUpdate=!0,L.renderBufferDirect(Q,V,Z,J,E,Mt),J.side=Li,J.needsUpdate=!0,L.renderBufferDirect(Q,V,Z,J,E,Mt),J.side=Ve):L.renderBufferDirect(Q,V,Z,J,E,Mt),E.onAfterRender(L,V,Q,Z,J,Mt)}function tr(E,V,Q){V.isScene!==!0&&(V=lt);const Z=k.get(E),J=w.state.lights,Mt=w.state.shadowsArray,wt=J.state.version,_t=ht.getParameters(E,J.state,Mt,V,Q,w.state.lightProbeGridArray),Ct=ht.getProgramCacheKey(_t);let Nt=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;const ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=rt.get(E.envMap||Z.environment,ee),Z.envMapRotation=Z.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",En),Nt=new Map,Z.programs=Nt);let se=Nt.get(Ct);if(se!==void 0){if(Z.currentProgram===se&&Z.lightsStateVersion===wt)return Zl(E,_t),se}else _t.uniforms=ht.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,Q,_t),E.onBeforeCompile(_t,L),se=ht.acquireProgram(_t,Ct),Nt.set(Ct,se),Z.uniforms=_t.uniforms;const Pt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Rt.uniform),Zl(E,_t),Z.needsLights=ku(E),Z.lightsStateVersion=wt,Z.needsLights&&(Pt.ambientLightColor.value=J.state.ambient,Pt.lightProbe.value=J.state.probe,Pt.sunLights.value=J.state.sun,Pt.sunLightShadows.value=J.state.sunShadow,Pt.directionalLights.value=J.state.directional,Pt.directionalLightShadows.value=J.state.directionalShadow,Pt.spotLights.value=J.state.spot,Pt.spotLightShadows.value=J.state.spotShadow,Pt.rectAreaLights.value=J.state.rectArea,Pt.ltc_1.value=J.state.rectAreaLTC1,Pt.ltc_2.value=J.state.rectAreaLTC2,Pt.pointLights.value=J.state.point,Pt.pointLightShadows.value=J.state.pointShadow,Pt.hemisphereLights.value=J.state.hemi,Pt.sunShadowMatrix.value=J.state.sunShadowMatrix,Pt.sunShadowCascade.value=J.state.sunShadowCascade,Pt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Pt.spotLightMatrix.value=J.state.spotLightMatrix,Pt.spotLightMap.value=J.state.spotLightMap,Pt.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=se,Z.uniformsList=null,se}function ql(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=zr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Zl(E,V){const Q=k.get(E);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Ou(E,V){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let Q=0,Z=E.length;Q<Z;Q++){const J=E[Q];if(J.texture!==null&&J.boundingBox.containsPoint(S))return J}return null}function zu(E,V,Q,Z,J){V.isScene!==!0&&(V=lt),X.resetTextureUnits();const Mt=V.fog,wt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,_t=W===null?L.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:oe.workingColorSpace,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Nt=rt.get(Z.envMap||wt,Ct),ee=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,se=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Pt=!!Q.morphAttributes.position,de=!!Q.morphAttributes.normal,Ie=!!Q.morphAttributes.color;let Ee=Un;Z.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ee=L.toneMapping);const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ye=_e!==void 0?_e.length:0,bt=k.get(Z),en=w.state.lights;if(jt===!0&&(le===!0||E!==Y)){const we=E===Y&&Z.id===B;Rt.setState(Z,E,we)}let he=!1;Z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==en.state.version||bt.outputColorSpace!==_t||J.isBatchedMesh&&bt.batching===!1||!J.isBatchedMesh&&bt.batching===!0||J.isBatchedMesh&&bt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&bt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&bt.instancing===!1||!J.isInstancedMesh&&bt.instancing===!0||J.isSkinnedMesh&&bt.skinning===!1||!J.isSkinnedMesh&&bt.skinning===!0||J.isInstancedMesh&&bt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&bt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&bt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&bt.instancingMorph===!1&&J.morphTexture!==null||bt.envMap!==Nt||Z.fog===!0&&bt.fog!==Mt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Rt.numPlanes||bt.numIntersection!==Rt.numIntersection)||bt.vertexAlphas!==ee||bt.vertexTangents!==se||bt.morphTargets!==Pt||bt.morphNormals!==de||bt.morphColors!==Ie||bt.toneMapping!==Ee||bt.morphTargetsCount!==Ye||!!bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,bt.__version=Z.version);let dn=bt.currentProgram;he===!0&&(dn=tr(Z,V,J),z&&Z.isNodeMaterial&&z.onUpdateProgram(Z,dn,bt));let Tn=!1,$n=!1,zi=!1;const xe=dn.getUniforms(),Re=bt.uniforms;if(x.useProgram(dn.program)&&(Tn=!0,$n=!0,zi=!0),Z.id!==B&&(B=Z.id,$n=!0),bt.needsLights){const we=Ou(w.state.lightProbeGridArray,J);bt.lightProbeGrid!==we&&(bt.lightProbeGrid=we,$n=!0)}if(Tn||Y!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(O,"projectionMatrix",E.projectionMatrix),xe.setValue(O,"viewMatrix",E.matrixWorldInverse);const jn=xe.map.cameraPosition;jn!==void 0&&jn.setValue(O,K.setFromMatrixPosition(E.matrixWorld)),y.logarithmicDepthBuffer&&xe.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,$n=!0,zi=!0)}if(bt.needsLights&&(en.state.sunShadowMap.length>0&&xe.setValue(O,"sunShadowMap",en.state.sunShadowMap,X),en.state.directionalShadowMap.length>0&&xe.setValue(O,"directionalShadowMap",en.state.directionalShadowMap,X),en.state.spotShadowMap.length>0&&xe.setValue(O,"spotShadowMap",en.state.spotShadowMap,X),en.state.pointShadowMap.length>0&&xe.setValue(O,"pointShadowMap",en.state.pointShadowMap,X)),J.isSkinnedMesh){xe.setOptional(O,J,"bindMatrix"),xe.setOptional(O,J,"bindMatrixInverse");const we=J.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),xe.setValue(O,"boneTexture",we.boneTexture,X))}J.isBatchedMesh&&(xe.setOptional(O,J,"batchingTexture"),xe.setValue(O,"batchingTexture",J._matricesTexture,X),xe.setOptional(O,J,"batchingIdTexture"),xe.setValue(O,"batchingIdTexture",J._indirectTexture,X),xe.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&xe.setValue(O,"batchingColorTexture",J._colorsTexture,X));const Qn=Q.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&H.update(J,Q,dn),($n||bt.receiveShadow!==J.receiveShadow)&&(bt.receiveShadow=J.receiveShadow,xe.setValue(O,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Re.envMapIntensity.value=V.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Wx()),$n){if(xe.setValue(O,"toneMappingExposure",L.toneMappingExposure),bt.needsLights&&Bu(Re,zi),Mt&&Z.fog===!0&&Dt.refreshFogUniforms(Re,Mt),Dt.refreshMaterialUniforms(Re,Z,tt,$,w.state.transmissionRenderTarget[E.id]),bt.needsLights&&bt.lightProbeGrid){const we=bt.lightProbeGrid;Re.probesSH.value=we.texture,Re.probesMin.value.copy(we.boundingBox.min),Re.probesMax.value.copy(we.boundingBox.max),Re.probesResolution.value.copy(we.resolution)}zr.upload(O,ql(bt),Re,X)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zr.upload(O,ql(bt),Re,X),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(O,"center",J.center),xe.setValue(O,"modelViewMatrix",J.modelViewMatrix),xe.setValue(O,"normalMatrix",J.normalMatrix),xe.setValue(O,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){const we=Z.uniformsGroups;for(let jn=0,Bi=we.length;jn<Bi;jn++){const Kl=we[jn];it.update(Kl,dn),it.bind(Kl,dn)}}return dn}function Bu(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.sunLights.needsUpdate=V,E.sunLightShadows.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function ku(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(E,V,Q){const Z=k.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),k.get(E.texture).__webglTexture=V,k.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const Q=k.get(E);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,Q=0){W=E,I=V,G=Q;let Z=null,J=!1,Mt=!1;if(E){const _t=k.get(E);if(_t.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,_t.__webglFramebuffer),q.copy(E.viewport),ot.copy(E.scissor),mt=E.scissorTest,x.viewport(q),x.scissor(ot),x.setScissorTest(mt),B=-1;return}else if(_t.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(_t.__hasExternalTextures)X.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ee=E.depthTexture;if(_t.__boundDepthTexture!==ee){if(ee!==null&&k.has(ee)&&(E.width!==ee.image.width||E.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);const Nt=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[V])?Z=Nt[V][Q]:Z=Nt[V],J=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?Z=k.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?Z=Nt[Q]:Z=Nt,q.copy(E.viewport),ot.copy(E.scissor),mt=E.scissorTest}else q.copy(ct).multiplyScalar(tt).floor(),ot.copy(zt).multiplyScalar(tt).floor(),mt=ce;if(Q!==0&&(Z=U),x.bindFramebuffer(O.FRAMEBUFFER,Z)&&x.drawBuffers(E,Z),x.viewport(q),x.scissor(ot),x.setScissorTest(mt),J){const _t=k.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,Q)}else if(Mt){const _t=V;for(let Ct=0;Ct<E.textures.length;Ct++){const Nt=k.get(E.textures[Ct]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ct,Nt.__webglTexture,Q,_t)}}else if(E!==null&&Q!==0){const _t=k.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_t.__webglTexture,Q)}B=-1};function Jl(E){const V=k.get(E);return(V.__readFormat!==E.format||V.__readType!==E.type)&&(V.__readFormat=E.format,V.__readType=E.type,V.__formatReadable=y.textureFormatReadable(E.format),V.__typeReadable=y.textureTypeReadable(E.type)),V}this.readRenderTargetPixels=function(E,V,Q,Z,J,Mt,wt,_t=0){if(!(E&&E.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){x.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Nt=E.textures[_t],ee=Nt.format,se=Nt.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_t);const Pt=Jl(Nt);if(Pt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Z&&Q>=0&&Q<=E.height-J&&O.readPixels(V,Q,Z,J,gt.convert(ee),gt.convert(se),Mt)}finally{const Nt=W!==null?k.get(W).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,V,Q,Z,J,Mt,wt,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(V>=0&&V<=E.width-Z&&Q>=0&&Q<=E.height-J){x.bindFramebuffer(O.FRAMEBUFFER,Ct);const Nt=E.textures[_t],ee=Nt.format,se=Nt.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_t);const Pt=Jl(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.bufferData(O.PIXEL_PACK_BUFFER,Mt.byteLength,O.STREAM_READ),O.readPixels(V,Q,Z,J,gt.convert(ee),gt.convert(se),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ie=W!==null?k.get(W).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Ie);const Ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wf(O,Ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(de),O.deleteSync(Ee),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,Q=0){const Z=Math.pow(2,-Q),J=Math.floor(E.image.width*Z),Mt=Math.floor(E.image.height*Z),wt=V!==null?V.x:0,_t=V!==null?V.y:0;X.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,wt,_t,J,Mt),x.unbindTexture()},this.copyTextureToTexture=function(E,V,Q=null,Z=null,J=0,Mt=0){let wt,_t,Ct,Nt,ee,se,Pt,de,Ie;const Ee=E.isCompressedTexture?E.mipmaps[Mt]:E.image;if(Q!==null)wt=Q.max.x-Q.min.x,_t=Q.max.y-Q.min.y,Ct=Q.isBox3?Q.max.z-Q.min.z:1,Nt=Q.min.x,ee=Q.min.y,se=Q.isBox3?Q.min.z:0;else{const Re=Math.pow(2,-J);wt=Math.floor(Ee.width*Re),_t=Math.floor(Ee.height*Re),E.isDataArrayTexture?Ct=Ee.depth:E.isData3DTexture?Ct=Math.floor(Ee.depth*Re):Ct=1,Nt=0,ee=0,se=0}Z!==null?(Pt=Z.x,de=Z.y,Ie=Z.z):(Pt=0,de=0,Ie=0);const _e=gt.convert(V.format),Ye=gt.convert(V.type);let bt;V.isData3DTexture?(X.setTexture3D(V,0),bt=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(X.setTexture2DArray(V,0),bt=O.TEXTURE_2D_ARRAY):(X.setTexture2D(V,0),bt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const en=x.getParameter(O.UNPACK_ROW_LENGTH),he=x.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(O.UNPACK_SKIP_PIXELS),Tn=x.getParameter(O.UNPACK_SKIP_ROWS),$n=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),x.pixelStorei(O.UNPACK_SKIP_ROWS,ee),x.pixelStorei(O.UNPACK_SKIP_IMAGES,se);const zi=E.isDataArrayTexture||E.isData3DTexture,xe=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Re=k.get(E),Qn=k.get(V),we=k.get(Re.__renderTarget),jn=k.get(Qn.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,we.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Bi=0;Bi<Ct;Bi++)zi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,k.get(E).__webglTexture,J,se+Bi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,k.get(V).__webglTexture,Mt,Ie+Bi)),O.blitFramebuffer(Nt,ee,wt,_t,Pt,de,wt,_t,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||k.has(E)){const Re=k.get(E),Qn=k.get(V);x.bindFramebuffer(O.READ_FRAMEBUFFER,A),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let we=0;we<Ct;we++)zi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,J,se+we):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,J),xe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qn.__webglTexture,Mt,Ie+we):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qn.__webglTexture,Mt),J!==0?O.blitFramebuffer(Nt,ee,wt,_t,Pt,de,wt,_t,O.COLOR_BUFFER_BIT,O.NEAREST):xe?O.copyTexSubImage3D(bt,Mt,Pt,de,Ie+we,Nt,ee,wt,_t):O.copyTexSubImage2D(bt,Mt,Pt,de,Nt,ee,wt,_t);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(bt,Mt,Pt,de,Ie,wt,_t,Ct,_e,Ye,Ee.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,Mt,Pt,de,Ie,wt,_t,Ct,_e,Ee.data):O.texSubImage3D(bt,Mt,Pt,de,Ie,wt,_t,Ct,_e,Ye,Ee):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Mt,Pt,de,wt,_t,_e,Ye,Ee.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Mt,Pt,de,Ee.width,Ee.height,_e,Ee.data):O.texSubImage2D(O.TEXTURE_2D,Mt,Pt,de,wt,_t,_e,Ye,Ee);x.pixelStorei(O.UNPACK_ROW_LENGTH,en),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,$n),Mt===0&&V.generateMipmaps&&O.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(E){k.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){I=0,G=0,W=null,x.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Yx{constructor(){this.boxes=[],this.bounds={minX:-100,maxX:100,minZ:-170,maxZ:100},this.grid=new Map,this.cell=20}add(t,e,n,s,r,a=0,o=null){const l={minX:t,maxX:e,minZ:n,maxZ:s,top:r,bottom:a,tag:o};this.boxes.push(l);const c=this.cell;for(let u=Math.floor(t/c);u<=Math.floor(e/c);u++)for(let d=Math.floor(n/c);d<=Math.floor(s/c);d++){const h=u*1e3+d;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(l)}return l}near(t,e,n){const s=this.cell,r=new Set;for(let a=Math.floor((t-n)/s);a<=Math.floor((t+n)/s);a++)for(let o=Math.floor((e-n)/s);o<=Math.floor((e+n)/s);o++){const l=this.grid.get(a*1e3+o);if(l)for(const c of l)r.add(c)}return r}groundAt(t,e,n,s,r=.55){let a=0;for(const o of this.near(t,e,n))t+n*.6<o.minX||t-n*.6>o.maxX||e+n*.6<o.minZ||e-n*.6>o.maxZ||o.top<=s+r&&o.top>a&&(a=o.top);return a}resolve(t,e,n,s=.55){let r=!1;for(const o of this.near(t.x,t.z,e)){if(t.y>=o.top-s||t.y+n<=o.bottom)continue;const l=Math.max(o.minX,Math.min(t.x,o.maxX)),c=Math.max(o.minZ,Math.min(t.z,o.maxZ));let u=t.x-l,d=t.z-c;const h=u*u+d*d;if(!(h>=e*e))if(r=!0,h>1e-8){const f=Math.sqrt(h),p=(e-f)/f;t.x+=u*p,t.z+=d*p}else{const f=t.x-o.minX,p=o.maxX-t.x,_=t.z-o.minZ,g=o.maxZ-t.z,m=Math.min(f,p,_,g);m===f?t.x=o.minX-e:m===p?t.x=o.maxX+e:m===_?t.z=o.minZ-e:t.z=o.maxZ+e}}const a=this.bounds;return t.x<a.minX+e&&(t.x=a.minX+e,r=!0),t.x>a.maxX-e&&(t.x=a.maxX-e,r=!0),t.z<a.minZ+e&&(t.z=a.minZ+e,r=!0),t.z>a.maxZ-e&&(t.z=a.maxZ-e,r=!0),r}raycast(t,e,n,s,r,a,o=0){let l=1;const c=s-t,u=r-e,d=a-n,h=(t+s)/2,f=(n+a)/2,p=Math.hypot(c,d)/2+1;for(const _ of this.near(h,f,p)){if(_.top<o)continue;let g=0,m=l;const M=[[t,c,_.minX,_.maxX],[e,u,_.bottom,_.top],[n,d,_.minZ,_.maxZ]];let R=!0;for(const[S,b,w,C]of M){if(Math.abs(b)<1e-9){if(S<w||S>C){R=!1;break}continue}let v=(w-S)/b,T=(C-S)/b;if(v>T&&([v,T]=[T,v]),g=Math.max(g,v),m=Math.min(m,T),g>m){R=!1;break}}R&&g<l&&(l=g)}return l}}const Qa=new Map;function Oi(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function xi(i,t=!0){const e=new Zr(i);return t&&(e.colorSpace=Ne),e.anisotropy=2,e}function Kn(i,t){return Qa.has(i)||Qa.set(i,t()),Qa.get(i)}const ci=()=>Kn("glow",()=>{const[i,t]=Oi(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),xi(i)}),Al=()=>Kn("ring",()=>{const[i,t]=Oi(128,128),e=t.createRadialGradient(64,64,30,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.15)"),e.addColorStop(.9,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),xi(i)}),du=()=>Kn("blob",()=>{const[i,t]=Oi(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),xi(i)}),qx=[[0,1],[.5,.86],[-.5,.86],[1.05,.66],[-1.05,.66],[1.85,.36],[-1.85,.36]];function Zx(i,t,e){const n=Math.max(6,Math.round(t/9)),s=r=>e*Math.pow(Math.sin(Math.min(1,r*1.15)*Math.PI*.5+1e-4),.9)*Math.pow(1-r,.85)*1.55;i.beginPath(),i.moveTo(0,0);for(const r of[1,-1]){const a=[];for(let o=1;o<=n;o++){const l=(o-.5)/n,c=o/n;a.push([r*s(l)*.8,-t*(l-.02)],[r*s(c)*1.06,-t*c])}if(r<0&&a.reverse(),r>0){for(const[o,l]of a)i.lineTo(o,l);i.lineTo(0,-t)}else{for(const[o,l]of a)i.lineTo(o,l);i.lineTo(0,0)}}i.closePath()}function Vs(i,t,e,n,s,r,a={}){i.save(),i.translate(t,e),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(n*.07,n*.28,-n*.05,n*.52),i.strokeStyle=s,i.lineWidth=n*.034,i.lineCap="round",i.stroke();for(const[o,l]of qx){i.save(),i.rotate(o);const c=n*l,u=n*.14*(.75+l*.25);if(Zx(i,c,u),a.grad){const d=i.createLinearGradient(-u,0,u,0);d.addColorStop(0,s),d.addColorStop(.5,a.grad),d.addColorStop(1,s),i.fillStyle=d}else i.fillStyle=s;if(i.fill(),r&&(i.strokeStyle=r,i.lineWidth=n*.012,i.lineJoin="miter",i.stroke()),a.vein){i.beginPath(),i.moveTo(0,0),i.lineTo(0,-c*.96),i.strokeStyle=a.vein,i.lineWidth=n*.014,i.stroke(),i.lineWidth=n*.006,i.beginPath();for(let d=.16;d<.8;d+=.16)for(const h of[1,-1])i.moveTo(0,-c*d),i.lineTo(h*u*.6*Math.sin(d*Math.PI),-c*(d+.07));i.stroke()}i.restore()}i.restore()}const Jx=()=>Kn("emblem",()=>{const[i,t]=Oi(512,512),e=256,n=300,s=205,r=t.createRadialGradient(e,n-40,20,e,n-40,250);return r.addColorStop(0,"rgba(150,255,120,.30)"),r.addColorStop(.6,"rgba(70,255,90,.10)"),r.addColorStop(1,"rgba(60,255,90,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.shadowColor="#7dff5a",t.shadowBlur=34,Vs(t,e,n,s,"#4dff4a","#b8ff9a"),t.shadowBlur=12,Vs(t,e,n,s,"#3fe043","#d8ffc4"),t.shadowBlur=0,Vs(t,e,n,s,"#36d23c","#eaffdc",{grad:"#b6ff9c",vein:"rgba(18,110,32,.9)"}),xi(i)}),Kx=()=>Kn("emblemBadge",()=>{const[i,t]=Oi(96,96);return t.fillStyle="rgba(4,20,8,.9)",t.beginPath(),t.arc(48,48,46,0,6.3),t.fill(),t.shadowColor="#7dff5a",t.shadowBlur=8,Vs(t,48,56,36,"#4dff4a","#d8ffc4"),t.shadowBlur=0,Vs(t,48,56,36,"#3fe043","#eaffdc",{grad:"#b6ff9c",vein:"rgba(18,110,32,.9)"}),i.toDataURL()});function Rl(i,t){const[e,n]=Oi(512,256);n.fillStyle=i,n.fillRect(0,0,512,256);const s=128,r=n.createRadialGradient(s,140,20,s,140,130);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,512,256),[e,n,s]}const $x=()=>Kn("cbface",()=>{const[i,t,e]=Rl("#d9a27c","rgba(120,60,40,.35)");{const n=t.createLinearGradient(0,170,0,236);n.addColorStop(0,"rgba(90,45,30,0)"),n.addColorStop(1,"rgba(90,45,30,.35)"),t.fillStyle=n,t.fillRect(e-70,170,140,70)}t.fillStyle="rgba(110,55,38,.22)";for(const n of[-1,1])t.beginPath(),t.ellipse(e+n*46,150,10,26,n*.3,0,6.3),t.fill();t.strokeStyle="rgba(120,60,42,.55)",t.lineWidth=2;for(const n of[-1,1])t.beginPath(),t.moveTo(e+n*16,150),t.quadraticCurveTo(e+n*30,160,e+n*34,176),t.stroke();t.fillStyle="rgba(120,62,44,.45)",t.fillRect(e-3,118,2,30),t.fillStyle="rgba(70,30,20,.6)";for(const n of[-1,1])t.beginPath(),t.ellipse(e+n*6,154,3.5,2,0,0,6.3),t.fill();t.fillStyle="rgba(150,80,55,.35)",t.beginPath(),t.ellipse(e,146,7,14,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(230,120,110,.18)";for(const n of[-1,1])t.beginPath(),t.ellipse(e+n*30,152,13,8,0,0,6.3),t.fill();t.beginPath(),t.moveTo(e,108),t.bezierCurveTo(e+20,96,e+44,94,e+70,102),t.lineTo(e+80,110),t.bezierCurveTo(e+70,134,e+48,148,e+24,142),t.bezierCurveTo(e+12,138,e+6,132,e,134),t.bezierCurveTo(e-6,132,e-12,138,e-24,142),t.bezierCurveTo(e-48,148,e-70,134,e-80,110),t.lineTo(e-70,102),t.bezierCurveTo(e-44,94,e-20,96,e,108),t.closePath(),t.fillStyle="#2f8a3a",t.fill(),t.lineWidth=3,t.strokeStyle="#123d18",t.stroke(),t.fillStyle="rgba(160,255,140,.25)",t.beginPath(),t.ellipse(e-30,112,18,3,0,0,6.3),t.ellipse(e+30,112,18,3,0,0,6.3),t.fill(),t.strokeStyle="#4a2c18",t.lineWidth=4;for(const n of[-1,1])t.beginPath(),t.moveTo(e+n*14,96),t.quadraticCurveTo(e+n*34,88,e+n*56,94),t.stroke();return t.fillStyle="#5a1f1a",t.beginPath(),t.moveTo(e-30,164),t.quadraticCurveTo(e,186,e+30,164),t.quadraticCurveTo(e,170,e-30,164),t.fill(),t.fillStyle="#fbfaf3",t.beginPath(),t.moveTo(e-26,165),t.quadraticCurveTo(e,178,e+26,165),t.quadraticCurveTo(e,169,e-26,165),t.fill(),t.strokeStyle="rgba(120,50,40,.6)",t.lineWidth=2,t.beginPath(),t.moveTo(e-33,162),t.quadraticCurveTo(e,188,e+33,162),t.stroke(),t.fillStyle="#4a2a16",t.beginPath(),t.moveTo(e-7,182),t.lineTo(e+7,182),t.lineTo(e+5,190),t.lineTo(e-5,190),t.fill(),t.beginPath(),t.moveTo(e-26,190),t.quadraticCurveTo(e,186,e+26,190),t.quadraticCurveTo(e+20,214,e,228),t.quadraticCurveTo(e-20,214,e-26,190),t.fill(),xi(i)}),Qx=()=>Kn("ampface",()=>{const[i,t,e]=Rl("#8a5636","rgba(40,15,10,.45)");t.fillStyle="rgba(60,25,15,.4)",t.beginPath(),t.ellipse(e,146,7,14,0,0,6.3),t.fill();for(const n of[-1,1]){const s=t.createRadialGradient(e+n*28,122,2,e+n*28,122,22);s.addColorStop(0,"rgba(255,90,230,.95)"),s.addColorStop(1,"rgba(255,40,200,0)"),t.fillStyle=s,t.fillRect(e+n*28-24,100,48,44),t.strokeStyle="#1a0a10",t.lineWidth=5,t.beginPath(),t.moveTo(e+n*10,112),t.lineTo(e+n*46,104),t.stroke()}return t.fillStyle="#3a0d12",t.beginPath(),t.moveTo(e-28,162),t.quadraticCurveTo(e+4,186,e+34,156),t.quadraticCurveTo(e+4,170,e-28,162),t.fill(),t.fillStyle="#f6f2ea",t.beginPath(),t.moveTo(e-24,163),t.quadraticCurveTo(e+4,177,e+30,158),t.quadraticCurveTo(e+4,168,e-24,163),t.fill(),t.fillStyle="rgba(30,12,8,.35)",t.fillRect(e-40,196,80,30),xi(i)});function Cl(i,t="stressed"){return Kn("npc"+i+t,()=>{const[e,n,s]=Rl(i,"rgba(40,20,20,.35)");n.fillStyle="#1b1010";for(const r of[-1,1])n.beginPath(),n.ellipse(s+r*24,124,5,6,0,0,6.3),n.fill();n.strokeStyle="#2a1510",n.lineWidth=3;for(const r of[-1,1])n.beginPath(),n.moveTo(s+r*12,106),n.lineTo(s+r*34,112),n.stroke();return n.beginPath(),n.ellipse(s,168,10,7,0,0,6.3),n.fillStyle="#3a1010",n.fill(),xi(e)})}const jx=()=>Kn("ground",()=>{const[i,t]=Oi(256,256);t.fillStyle="#17141f",t.fillRect(0,0,256,256);for(let n=0;n<1400;n++){const s=18+Math.random()*18;t.fillStyle=`rgb(${s},${s-2},${s+8})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}const e=xi(i);return e.wrapS=e.wrapT=Gr,e});function fn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Se;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=hh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][h]);const p=hh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function hh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Qe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<e;p++){const _=u.getComponent(h,p);o.setComponent(h+d,p,_)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const uh=["hips","spine","chest","neck","head","armL","armR","foreL","foreR","handL","handR","legL","legR","shinL","shinR","footL","footR"];function $t(i,t={}){const{selfLit:e,...n}=t,s=new di({color:i,...n});return e&&s.emissive.set(i).multiplyScalar(e),s}function He(i){return new pe({color:i,toneMapped:!1})}function tn(i,t,e=.8){const n=new ta(new $s({map:ci(),color:i,transparent:!0,opacity:e,blending:Pe,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(t),n}function ja(i,t={}){const{selfLit:e,...n}=t,s=new di({color:16777215,...n});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjP = position;`);const a=i+(i.includes("suitGlow")?"":`
vec3 suitGlow(vec3 p){ return vec3(0.0); }
`)+`
vec3 selfLit(vec3 p){ return suitColor(p) * ${(t.selfLit??0).toFixed(3)}; }
`;r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObjP;
`+a).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( diffuse * suitColor(vObjP), opacity );").replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive + suitGlow(vObjP) + selfLit(vObjP);")},s.customProgramCacheKey=()=>i+(t.selfLit??0),s}const Pr=(i,t,e=16)=>new ea(i,t,6,e);function Ti(i,t,e,n=1){const s=new ea(i,e,6,16),r=s.attributes.position,a=e/2+i;for(let o=0;o<r.count;o++){const l=r.getY(o),c=(a-l)/(2*a),u=Sn.lerp(1,t/i,c)*(1+(n-1)*Math.sin(Math.PI*Math.min(1,c*1.4)));r.setX(o,r.getX(o)*u),r.setZ(o,r.getZ(o)*u)}return s.computeVertexNormals(),s}function Yt(i,t,e=0,n=0,s=0,r){const a=new Ft(i,t);return a.position.set(e,n,s),r&&r.add(a),a}function aa(i){const t=i.scale||1,e=i.bulk||1,n=new Fe,s=new Fe;s.scale.setScalar(t),n.add(s);const r={},a=(b,w,C,v,T)=>{const L=new Le;return L.name=b,L.position.set(C,v,T),w.add(L),r[b]=L,L},o=i.colors;a("hips",s,0,.98,0),a("spine",r.hips,0,.08,0),a("chest",r.spine,0,.2,0),a("neck",r.chest,0,.3,0),a("head",r.neck,0,.1,0);const c=(i.shoulderW||.25)*e;a("armL",r.chest,c,.22,0),a("armR",r.chest,-c,.22,0),a("foreL",r.armL,0,-.3,0),a("foreR",r.armR,0,-.3,0),a("handL",r.foreL,0,-.27,0),a("handR",r.foreR,0,-.27,0),a("legL",r.hips,.1*e,-.04,0),a("legR",r.hips,-.1*e,-.04,0),a("shinL",r.legL,0,-.45,0),a("shinR",r.legR,0,-.45,0),a("footL",r.shinL,0,-.44,0),a("footR",r.shinR,0,-.44,0);const u=Yt(Ti(.15*e,.13*e,.08,.95),o.pelvis,0,.02,0,r.hips);u.scale.set(1.1,1,.8);const d=Yt(Ti(.14*e,.13*e,.12,1),o.torso,0,.09,0,r.spine);d.scale.set(1.04,1,.76);const h=Pr(.19*e,.2,20);{const b=h.attributes.position,w=i.taper||1;for(let C=0;C<b.count;C++){const v=b.getX(C),T=b.getY(C),L=b.getZ(C),F=Sn.lerp(w,1,Sn.smoothstep(T,-.29,.14)),z=L>0?1+(i.pecs||0)*Math.exp(-((T-.07)**2)/.006)*Math.exp(-((Math.abs(v)-.08)**2)/.01):1;b.setXYZ(C,v*F,T,L*(.86+.14*F)*z)}h.computeVertexNormals()}const f=Yt(h,o.torso,0,.12,0,r.chest);f.scale.set(1.2,1,.74);const p=i.deltoid||.095,_=Yt(Pr(p*.8*e,c*2-.08,14),o.shoulder||o.torso,0,.2,-.01,r.chest);_.rotation.z=Math.PI/2,Yt(Ti(.056*e,.06*e,.08,1),o.neck||o.skin,0,.05,0,r.neck);for(const b of["L","R"]){Yt(new ye(p*e,16,12),o.shoulder||o.upperArm,0,-.03,0,r["arm"+b]).scale.set(1,1.05,.95),Yt(Ti(.07*e,.056*e,.2,1.08),o.upperArm,0,-.15,0,r["arm"+b]),Yt(Ti(.058*e,.044*e,.18,1.08),o.glove,0,-.13,0,r["fore"+b]);const C=Yt(new ye(.05*e,12,10),o.glove,0,-.06,.005,r["hand"+b]);C.scale.set(.95,1.35,.6),C.name="hand";const v=Yt(Pr(.017,.04,8),o.glove,(b==="L"?-1:1)*-.04,-.035,.02,r["hand"+b]);v.rotation.z=(b==="L"?-1:1)*.5,Yt(Ti(.095*e,.066*e,.29,1.06),o.thigh,0,-.21,0,r["leg"+b]),Yt(Ti(.066*e,.05*e,.3,1.12),o.shin,0,-.21,0,r["shin"+b]);const T=Yt(Pr(.05*e,.13,12),o.boot,0,-.03,.05,r["foot"+b]);T.rotation.x=Math.PI/2,T.scale.set(1.05,1,.75),T.name="foot"}const g=.135,m=new di({map:i.head.tex});i.selfLit&&(m.emissive.set(16777215).multiplyScalar(i.selfLit*.9),m.emissiveMap=i.head.tex);const M=Yt(new ye(g,32,24),m,0,.1,.005,r.head);M.scale.set(.95,i.head.scaleY||1.14,1),M.rotation.y=0,M.name="headMesh";const R=Yt(new fi(.018,.045,6),o.skinMat,0,-.01,.132,M);R.rotation.x=Math.PI/2-.5,R.scale.set(1.1,1,.8);for(const b of[-1,1])Yt(new ye(.03,6,6),o.skinMat,b*.13,0,0,M).scale.set(.5,1,.8);const S={root:n,body:s,j:r,head:M,headR:g,parts:{torso:f,pelvis:u,abdomen:d},S:t};return i.extras?.(S),S.root.traverse(b=>{b.isMesh&&(b.frustumCulled=!0)}),S}function Ko(i,t,e){const n=Math.PI/2+e;return new P(-Math.cos(n)*Math.sin(t)*i,Math.cos(t)*i,Math.sin(n)*Math.sin(t)*i)}class ms{constructor(t){this.rig=t,this.cur={};for(const e of uh)this.cur[e]=[0,0,0];this.hipY=0,this.lift=0,this.t=0}apply(t,e,n=14){const s=1-Math.exp(-n*e);for(const r of uh){const a=t[r]||tv,o=this.cur[r];o[0]+=(a[0]-o[0])*s,o[1]+=(a[1]-o[1])*s,o[2]+=(a[2]-o[2])*s,this.rig.j[r].rotation.set(o[0],o[1],o[2])}this.hipY+=((t.hipY||0)-this.hipY)*s,this.lift+=((t.lift||0)-this.lift)*s,this.rig.j.hips.position.y=(this.rig.hipBase??.98)+this.hipY,this.rig.body.position.y=this.lift}}const tv=[0,0,0],sn=Math.sin,to=Math.cos,Xt={idle(i){const t=sn(i*2.2)*.03,e=sn(i*.9)*.04;return{hips:[0,e*.5,e*.25],spine:[t,-e*.4,-e*.2],chest:[t,0,0],neck:[-t,e*.5,0],armL:[.1+e*.5,.2,.12+t],armR:[.1-e*.5,-.2,-.12-t],foreL:[-.42-t,0,.05],foreR:[-.42+t,0,-.05],handL:[.18,.2,.1],handR:[.18,-.2,-.1],legL:[0,0,.04],legR:[0,0,-.04],hipY:-.01+t*.1}},run(i,t){const e=i*(8+t*3),n=.35+t*.6,s=sn(e),r=to(e);return{spine:[.12*t,sn(e)*.1,0],chest:[.06*t,-s*.18*t,0],neck:[-.12*t,s*.1,0],head:[0,0,0],legL:[-s*n,0,.02],legR:[s*n,0,-.02],shinL:[Math.max(0,-r)*(.5+n)+.1,0,0],shinR:[Math.max(0,r)*(.5+n)+.1,0,0],footL:[.1,0,0],footR:[.1,0,0],armL:[s*n*.9,0,.12],armR:[-s*n*.9,0,-.12],foreL:[-.6-t*.6,0,0],foreR:[-.6-t*.6,0,0],hipY:-Math.abs(r)*.05*t}},jump(i,t){const e=t>0;return{spine:[.1,0,0],legL:[e?-.9:-.4,0,.05],legR:[e?-.2:-.6,0,-.05],shinL:[e?1.3:.6,0,0],shinR:[e?.5:.9,0,0],armL:[e?-.6:.2,0,.9],armR:[e?-.6:.2,0,-.9],foreL:[-.4,0,0],foreR:[-.4,0,0]}},strike1(i,t){const e=t<.3?t/.3:1-(t-.3)/.7*.6;return{spine:[.1,.2*e,0],chest:[0,.45*e,0],armR:[-1.5*e,0,-.2],foreR:[-.15,0,0],handR:[.6*e,0,0],armL:[-.4,0,.35],foreL:[-1.6,0,0],legL:[-.5,0,.05],shinL:[.4,0,0],legR:[.3,0,-.05],shinR:[.2,0,0],hipY:-.06}},strike2(i,t){const e=t<.3?t/.3:1-(t-.3)/.7*.6;return{spine:[.1,-.2*e,0],chest:[0,-.45*e,0],armL:[-1.5*e,0,.2],foreL:[-.15,0,0],handL:[.6*e,0,0],armR:[-.4,0,-.35],foreR:[-1.6,0,0],legR:[-.5,0,-.05],shinR:[.4,0,0],legL:[.3,0,.05],shinL:[.2,0,0],hipY:-.06}},strike3(i,t){const e=t<.4?t/.4:1,n=t<.4?1-e:0;return{spine:[.15-n*.3,0,0],armL:[-1.45*e+n*.6,0,.15],armR:[-1.45*e+n*.6,0,-.15],foreL:[-.1-n,0,0],foreR:[-.1-n,0,0],handL:[.9*e,0,0],handR:[.9*e,0,0],legL:[-.7,0,.1],shinL:[.5,0,0],legR:[.5,0,-.1],shinR:[.3,0,0],hipY:-.12,lift:sn(t*Math.PI)*.25}},blast(i,t){const e=Math.min(1,t/.25);return{chest:[0,.35,0],armR:[-1.55*e,0,-.05],foreR:[0,0,0],handR:[.8,0,0],armL:[.2,0,.5],foreL:[-1,0,0],legL:[-.35,0,.05],shinL:[.3,0,0],legR:[.25,0,0],hipY:-.04}},field(i){const t=sn(i*4)*.05;return{spine:[-.08,0,0],neck:[-.15,0,0],armL:[-.3,0,1.35+t],armR:[-.3,0,-1.35-t],foreL:[-.2,0,.2],foreR:[-.2,0,-.2],handL:[0,0,.6],handR:[0,0,-.6],legL:[-.1,0,.12],legR:[-.1,0,-.12],shinL:[.25,0,0],shinR:[.25,0,0],footL:[.4,0,0],footR:[.4,0,0],lift:.25+t}},hit(i,t){const e=1-t;return{spine:[-.35*e,0,0],neck:[-.3*e,0,0],armL:[-.5*e,0,.6],armR:[-.5*e,0,-.6],foreL:[-.8,0,0],foreR:[-.8,0,0],legL:[-.2,0,0],shinL:[.3,0,0]}},stressed(i,t,e=0){const n=sn(i*13+e)*.08;return{spine:[.15,n,0],neck:[.2,sn(i*9+e)*.35,0],armL:[-2.6,0,.5],armR:[-2.6,0,-.5],foreL:[-2,0,0],foreR:[-2,0,0],legL:[0,0,.05],legR:[0,0,-.05],hipY:Math.abs(n)*-.1}},sit(i){const t=sn(i*1.5)*.02;return{spine:[-.15+t,0,0],chest:[t,0,0],neck:[.1,0,0],legL:[-1.5,0,.12],legR:[-1.5,0,-.12],shinL:[.2,0,0],shinR:[.2,0,0],armL:[.2,0,.25],armR:[.2,0,-.25],foreL:[-.6,0,0],foreR:[-.6,0,0],hipY:-.78}},windup(i,t){return{spine:[-.15,.3,0],chest:[0,.3,0],armR:[-.4,0,-1.6],foreR:[-1.6,0,0],armL:[-.6,0,.4],foreL:[-1.2,0,0],legL:[-.4,0,0],shinL:[.3,0,0],legR:[.3,0,0],hipY:-.06}},punch(i,t){return{spine:[.2,-.35,0],chest:[0,-.4,0],armR:[-1.55,0,-.1],foreR:[-.1,0,0],armL:[-.3,0,.4],foreL:[-1.4,0,0],legL:[-.6,0,0],shinL:[.4,0,0],legR:[.4,0,0],hipY:-.08}},charge(i,t){const e=i*16;return{spine:[.55,0,0],neck:[-.4,0,0],armL:[.9,0,.3],armR:[.9,0,-.3],foreL:[-.5,0,0],foreR:[-.5,0,0],legL:[-sn(e)*1,0,0],legR:[sn(e)*1,0,0],shinL:[Math.max(0,-to(e))*1.4,0,0],shinR:[Math.max(0,to(e))*1.4,0,0]}},slam(i,t){const e=t<.55;return{spine:[e?-.3:.6,0,0],armL:[e?-3:-1.2,0,.2],armR:[e?-3:-1.2,0,-.2],foreL:[-.3,0,0],foreR:[-.3,0,0],legL:[-.5,0,.2],legR:[-.5,0,-.2],shinL:[.6,0,0],shinR:[.6,0,0],hipY:e?0:-.2}},dazed(i){return{spine:[.3,sn(i*3)*.2,0],neck:[.5,sn(i*4)*.4,0],armL:[.2,0,.3],armR:[.2,0,-.3],legL:[-.3,0,.1],legR:[-.3,0,-.1],shinL:[.6,0,0],shinR:[.6,0,0],hipY:-.15}},hype(i,t){const e=Math.min(1,t/.3);return{chest:[-.1,-.4*e,0],armR:[-1.6*e,.3,-.1],foreR:[-.1,0,0],handR:[.4,0,0],armL:[-.2,0,.6],foreL:[-1.8,0,0],neck:[-.1,.2,0],legL:[-.3,0,0],legR:[.3,0,0]}},taunt(i){const t=sn(i*3);return{chest:[-.1,t*.15,0],neck:[-.2,t*.2,0],armL:[-.5,0,1.1+t*.2],armR:[-.5,0,-1.1-t*.2],foreL:[-1.2,0,0],foreR:[-1.2,0,0],lift:.05}},overdrive(i){const t=sn(i*30)*.05;return{spine:[-.25,0,0],neck:[-.4,0,0],armL:[-2.9,0,.6+t],armR:[-2.9,0,-.6-t],foreL:[-.2,0,0],foreR:[-.2,0,0],legL:[-.2,0,.3],legR:[-.2,0,-.3],lift:.4}}},rs=[-50,0,50],fh=2.6,dh=4.4,hn=4.4,Ln=1.9,Rs={green:7,yellow:1.6},Lr={moving:[10,16],cruise:9,stopGap:7};function Pi(i,t){const e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new Qe(n,3)),delete i.attributes.uv,i}function ev(){const i=new ae(Ln,.62,hn,1,1,2).translate(0,.55,0),t=i.attributes.position;for(let o=0;o<t.count;o++)Math.abs(t.getZ(o))>hn/2-.01&&t.getY(o)>.6&&t.setZ(o,t.getZ(o)*.93);const e=new ae(Ln*.86,.55,hn*.5).translate(0,1.13,-.15),n=e.attributes.position;for(let o=0;o<n.count;o++)n.getY(o)>1.2&&(n.setZ(o,n.getZ(o)*.7-.05),n.setX(o,n.getX(o)*.9));const s=new ae(Ln*.88,.36,hn*.44).translate(0,1.12,-.15),r=s.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)>1.2&&r.setZ(o,r.getZ(o)*.72-.05);const a=[Pi(i,[1,1,1]),Pi(e,[.85,.85,.9]),Pi(s,[.08,.1,.16])];for(const[o,l]of[[-.95,1.35],[.95,1.35],[-.95,-1.35],[.95,-1.35]])a.push(Pi(new Je(.36,.36,.28,10).rotateZ(Math.PI/2).translate(o,.36,l),[.05,.05,.06]));return fn(a)}function nv(){const i=[];for(const t of[-1,1])i.push(Pi(new ae(.42,.14,.06).translate(t*.66,.68,hn/2+.01),[1,.95,.8])),i.push(Pi(new ae(.5,.12,.06).translate(t*.62,.7,-hn/2-.01),[1,.08,.2]));return i.push(Pi(new ae(Ln*.9,.05,hn*.8).translate(0,.16,0),[.1,.9,1])),fn(i)}function iv(i,t,e,n,s=[]){const r=[],a=(A,D)=>s.some(I=>Math.hypot(A-I.x,D-I.z)<I.r);for(const A of rs)for(const D of[-1,1])for(let I=-92;I<=92;I+=7.5)if(!(rs.some(G=>Math.abs(I-G)<10)||n()<.45))for(const G of[!0,!1]){const W=G?A+D*dh:I,B=G?I:A+D*dh;a(W,B)||n()<.4||(r.push({parked:!0,alongZ:G,x:W,z:B,dir:n()<.5?1:-1}),G?t.add(W-Ln/2,W+Ln/2,B-hn/2,B+hn/2,1.4):t.add(W-hn/2,W+hn/2,B-Ln/2,B+Ln/2,1.4))}const o=Lr.moving[e===0?0:1];for(let A=0;A<o;A++){const D=A%2===0,I=rs[A%3],G=(A>>1)%2?1:-1;r.push({parked:!1,alongZ:D,road:I,dir:G,s:-90+n()*180,v:Lr.cruise,lane:I+G*(D?-fh:fh)})}const l=[2287359,16722902,16769354,15263984,8019199,2763320,16738858,3800954],c=new Ue(ev(),$t(16777215,{vertexColors:!0,selfLit:.12}),r.length),u=new Ue(nv(),new pe({vertexColors:!0,toneMapped:!1}),r.length),d=new te,h=new Bn,f=new P,p=new P(1,1,1),_=new Ht,g=new P(0,1,0);r.forEach((A,D)=>c.setColorAt(D,_.set(l[Math.floor(n()*l.length)])));const m=(A,D)=>{const I=A.parked?A.x:A.alongZ?A.lane:A.s,G=A.parked?A.z:A.alongZ?A.s:A.lane;A.px=I,A.pz=G;const W=A.alongZ?A.dir>0?0:Math.PI:A.dir>0?Math.PI/2:-Math.PI/2;d.compose(f.set(I,0,G),h.setFromAxisAngle(g,W),p),c.setMatrixAt(D,d),u.setMatrixAt(D,d)};r.forEach(m),c.userData.dynamic=u.userData.dynamic=!0,i.add(c,u);const M=[],R=[];for(const A of rs)for(const D of rs)for(const I of["x","z"]){const G=A+(I==="z"?6.2:-6.2),W=D+(I==="z"?6.2:-6.2);R.push(new Je(.1,.12,5.2,6).translate(G,2.6,W));const B=I==="z"?G-2.4:G,Y=I==="z"?W:W+2.4;R.push(new ae(I==="z"?2.6:.12,.12,I==="z"?.12:2.6).translate((G+B)/2,5.1,(W+Y)/2)),R.push(new ae(.42,1.25,.42).translate(B,4.4,Y)),M.push({axis:I,x:B,z:Y})}const S=new Ft(fn(R.map(A=>(delete A.attributes.uv,A))),$t(1841700));i.add(S);const b=new Ue(new ye(.14,8,6),new pe({toneMapped:!1}),M.length*3);M.forEach((A,D)=>{for(let I=0;I<3;I++)d.compose(f.set(A.x,4.8-I*.38,A.z),h.identity(),p),b.setMatrixAt(D*3+I,d)}),b.userData.dynamic=!0,i.add(b);const w=new Ht(1710618),C=new Ht(16719936),v=new Ht(16760864),T=new Ht(3211136),L=2*(Rs.green+Rs.yellow),F=(A,D)=>{const I=D%L,G=Rs.green+Rs.yellow;return(A==="x"?I<G:I>=G)?I%G<Rs.green?"g":"y":"r"};let z="";const U={cars:r,signal:F,stops:0,honks:0};return U.update=(A,D,I)=>{const G=F("x",D),W=F("z",D);G+W!==z&&(z=G+W,M.forEach((B,Y)=>{const q=B.axis==="x"?G:W;b.setColorAt(Y*3,q==="r"?C:w),b.setColorAt(Y*3+1,q==="y"?v:w),b.setColorAt(Y*3+2,q==="g"?T:w)}),b.instanceColor.needsUpdate=!0),r.forEach((B,Y)=>{if(B.parked)return;const q=B.alongZ?W:G;let ot=Lr.cruise;for(const yt of rs){const Tt=(yt-B.s)*B.dir;Tt>6&&Tt<6+Lr.stopGap&&q!=="g"&&(ot=0)}const mt=B.alongZ?0:B.dir,Kt=B.alongZ?B.dir:0;for(const yt of I){const Tt=yt.x-B.px,$=yt.z-B.pz,tt=Tt*mt+$*Kt,dt=Math.abs(Tt*Kt-$*mt);tt>0&&tt<7.5&&dt<1.8+(yt.r||.5)&&(ot=0,yt.player&&!B.honked&&(B.honked=!0,U.honks++))}for(const yt of r){if(yt===B||yt.parked||yt.alongZ!==B.alongZ||yt.lane!==B.lane)continue;const Tt=(yt.s-B.s)*B.dir;Tt>0&&Tt<7&&(ot=0)}ot===0&&B.v>.5&&U.stops++,ot>0&&(B.honked=!1),B.v+=(ot-B.v)*Math.min(1,A*(ot<B.v?4:1.2)),B.s+=B.v*B.dir*A,B.s>97&&(B.s=-97),B.s<-97&&(B.s=97),m(B,Y)}),c.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0},U.pushOut=(A,D)=>{for(const I of r){if(I.parked)continue;const G=(I.alongZ?Ln:hn)/2+D,W=(I.alongZ?hn:Ln)/2+D,B=A.x-I.px,Y=A.z-I.pz;if(Math.abs(B)<G&&Math.abs(Y)<W&&A.y<1.5){const q=G-Math.abs(B),ot=W-Math.abs(Y);q<ot?A.x+=Math.sign(B||1)*q:A.z+=Math.sign(Y||1)*ot}}},U.counts={parked:r.filter(A=>A.parked).length,moving:o,trafficLights:M.length},U}function sv(i){const t=[];i.traverse(n=>{n.isInstancedMesh&&!n.userData.dynamic&&t.push(n)});let e=0;for(const n of t){const s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(const _ of Object.keys(s.attributes))["position","normal","uv","color"].includes(_)||s.deleteAttribute(_);const r=s.attributes.position.count,a=new te,o=new Ht,l=[],c=!!n.instanceColor,u=!!s.attributes.color;for(let _=0;_<n.count;_++){if(n.getMatrixAt(_,a),a.elements[0]===0&&a.elements[5]===0&&a.elements[10]===0)continue;const g=s.clone();if(g.applyMatrix4(a),c||u){c?n.getColorAt(_,o):o.setRGB(1,1,1);const m=new Float32Array(r*3);for(let M=0;M<r;M++){const R=u?s.attributes.color.getX(M):1,S=u?s.attributes.color.getY(M):1,b=u?s.attributes.color.getZ(M):1;m[M*3]=R*o.r,m[M*3+1]=S*o.g,m[M*3+2]=b*o.b}g.setAttribute("color",new Qe(m,3))}l.push(g)}if(!l.length){n.parent?.remove(n);continue}const d=fn(l);d.computeBoundingSphere();const h=n.material;(c||u)&&(h.vertexColors=!0,h.needsUpdate=!0);const f=new Ft(d,h);f.position.copy(n.position),f.quaternion.copy(n.quaternion),f.scale.copy(n.scale),f.renderOrder=n.renderOrder,f.frustumCulled=!1,f.name=n.name,f.userData={...n.userData,baked:!0};const p=n.parent;p.add(f),p.remove(n),n.dispose?.(),e++}return e}const pu=[["STAY CHILL","#39ff7a","#062a14","leaf"],["HYPE CORP","#ff2bd6","#2a0624","bolt"],["NOODLES 24/7","#22e6ff","#06202a","bowl"],["AMP ENERGY","#ff2bd6","#1a0430","bolt"],["LOFI RADIO","#22e6ff","#120a2e","wave"],["BREATHE","#39ff7a","#04201a","wave"],["OVERDRIVE","#ff4ae0","#22041e","bolt"],["NEON TEA","#22e6ff","#041a24","bowl"]];function rv(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");pu.forEach(([r,a,o,l],c)=>{const u=c%4*256,d=Math.floor(c/4)*256,h=n.createLinearGradient(u,d,u,d+256);if(h.addColorStop(0,o),h.addColorStop(1,"rgba(0,0,0,0.25)"),n.fillStyle=h,n.fillRect(u+4,d+4,248,248),n.strokeStyle=a,n.lineWidth=6,n.strokeRect(u+8,d+8,240,240),n.save(),n.translate(u+128,d+100),n.strokeStyle=a,n.fillStyle=a,n.lineWidth=7,n.shadowColor=a,n.shadowBlur=14,l==="bolt")n.beginPath(),n.moveTo(10,-60),n.lineTo(-30,8),n.lineTo(0,8),n.lineTo(-12,60),n.lineTo(32,-12),n.lineTo(2,-12),n.closePath(),n.fill();else if(l==="bowl"){n.beginPath(),n.arc(0,0,48,0,Math.PI),n.closePath(),n.stroke();for(const f of[-20,0,20])n.beginPath(),n.moveTo(f,-12),n.quadraticCurveTo(f+10,-40,f,-62),n.stroke()}else if(l==="wave"){n.beginPath();for(let f=-70;f<=70;f+=4)n.lineTo(f,Math.sin(f*.12)*26*Math.cos(f*.02));n.stroke()}else{n.beginPath(),n.ellipse(0,0,22,58,0,0,Math.PI*2),n.stroke();for(const f of[-1,1])n.save(),n.rotate(f*.9),n.beginPath(),n.ellipse(0,-10,14,44,0,0,Math.PI*2),n.stroke(),n.restore()}n.restore(),n.fillStyle=a,n.shadowColor=a,n.shadowBlur=12,n.font=`900 ${r.length>9?30:38}px system-ui, sans-serif`,n.textAlign="center",n.fillText(r,u+128,d+215),n.shadowBlur=0});const s=new Zr(e);return s.colorSpace=Ne,s.anisotropy=2,s}function av(i){const t=bl.merge([xt.fog,{t:{value:0}}]);return t.map={value:i},new je({uniforms:t,transparent:!0,depthWrite:!1,blending:Pe,side:Ve,fog:!0,vertexShader:`attribute float seed; varying vec2 vUv; varying float vSeed;
#include <fog_pars_vertex>
void main(){ vUv = uv; vSeed = seed; vec4 mvPosition = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; uniform float t; varying vec2 vUv; varying float vSeed;
#include <fog_pars_fragment>
void main(){ float g = step(0.985, fract(sin(floor(t*6.0 + vSeed*13.0))*43758.5)); vec2 uv = vUv + vec2(g*0.01*sin(vUv.y*80.0), 0.0);
  vec4 c = texture2D(map, uv); float scan = 0.78 + 0.22*sin(vUv.y*900.0 - t*12.0); float flick = 0.88 + 0.12*sin(t*23.0 + vSeed*7.0);
  gl_FragColor = vec4(c.rgb * scan * flick * 1.25, c.a * 0.9);
#include <fog_fragment>
}`})}function ov(i,t,e,n,s){const r=new te,a=new Bn,o=new P,l=new P(1,1,1);new Ht;const c=e.filter(U=>U.h>16&&!U.noDeco),u=e.filter(U=>!U.noDeco&&U.h>7),d=n===0?14:24,h=[];for(let U=0;U<d&&c.length;U++){const A=c[Math.floor(s()*c.length)],D=Math.floor(s()*pu.length),I=Math.min(A.w,A.d)*(.45+s()*.25),G=I*(.55+s()*.35),W=new Te(I,G),B=W.attributes.uv,Y=D%4/4,q=1-(Math.floor(D/4)+1)/2;for(let yt=0;yt<B.count;yt++)B.setXY(yt,Y+B.getX(yt)/4,q+B.getY(yt)/2);const ot=Math.floor(s()*4),mt=Math.max(8,A.h*(.45+s()*.4));if(U%5===4)W.translate(0,A.h+G/2+1.2,0),W.rotateY(s()*Math.PI),W.translate(A.cx,0,A.cz);else{const yt=[0,Math.PI,Math.PI/2,-Math.PI/2][ot];W.rotateY(yt);const Tt=[[0,A.d/2+.35],[0,-A.d/2-.35],[A.w/2+.35,0],[-A.w/2-.35,0]][ot];W.translate(A.cx+Tt[0],mt,A.cz+Tt[1])}const Kt=new Float32Array(W.attributes.position.count).fill(s());W.setAttribute("seed",new Qe(Kt,1)),h.push(W)}if(h.length){const U=new Ft(fn(h),av(rv()));U.renderOrder=2,i.add(U),t.animated.push(A=>{U.material.uniforms.t.value=A}),t.holo=U}const f=[],p=[];for(const U of u){const A=U.w>9?1+Math.floor(s()*3):s()<.5?1:0;for(let D=0;D<A;D++)f.push([U.cx+(s()-.5)*U.w*.6,U.h,U.cz+(s()-.5)*U.d*.6,1.4+s()*1.4,.9+s()*.8,1.2+s()*1.2]);U.h>20&&(U.spire||s()<.45)&&p.push([U.cx+(s()-.5)*U.w*.3,U.h,U.cz+(s()-.5)*U.d*.3,4+s()*(U.spire?12:6)])}const _=new ae(1,1,1).translate(0,.5,0),g=new Ue(_,$t(3816012,{selfLit:.15}),f.length);f.forEach(([U,A,D,I,G,W],B)=>{r.compose(o.set(U,A,D),a.identity(),l.set(I,G,W)),g.setMatrixAt(B,r)}),i.add(g);const m=fn([new Je(.06,.12,1,5).translate(0,.5,0),new ae(.9,.05,.05).translate(0,.7,0),new ae(.6,.05,.05).translate(0,.85,0)]),M=new Ue(m,$t(2763318),p.length),R=[];p.forEach(([U,A,D,I],G)=>{r.compose(o.set(U,A,D),a.identity(),l.set(1,I,1)),M.setMatrixAt(G,r),R.push(U,A+I+.1,D)}),i.add(M);const S=new Se;S.setAttribute("position",new qt(R,3));const b=new vl(S,new Qh({color:16724821,size:2.2,map:ci(),transparent:!0,depthWrite:!1,blending:Pe,sizeAttenuation:!0}));i.add(b),t.animated.push(U=>{b.material.opacity=Math.sin(U*3)>0?1:.15});const w=[],C=[],v=(U,A)=>{let D=0;for(const I of e)Math.abs(U-I.cx)<=I.w/2+.5&&Math.abs(A-I.cz)<=I.d/2+.5&&(D=Math.max(D,I.h));return D},T=n===0?26:44;for(let U=0;U<T;U++){const A=s()<.5,D=[-50,0,50][Math.floor(s()*3)],I=(s()-.5)*180,G=A?new P(D-8.2,0,I):new P(I,0,D-8.2),W=A?new P(D+8.2,0,I+(s()-.5)*4):new P(I+(s()-.5)*4,0,D+8.2),B=Math.min(v(G.x-(A?1:0),G.z-(A?0:1)),v(W.x+(A?1:0),W.z+(A?0:1)));if(B<9)continue;G.y=7+s()*Math.min(10,B-8),W.y=G.y+(s()-.5)*2;const Y=G.clone().lerp(W,.5);Y.y-=1.2+s()*1.5;const q=new Sl(new Ml(G,Y,W),10,.05,3,!1);delete q.attributes.uv,(s()<.25?C:w).push(q)}w.length&&i.add(new Ft(fn(w),new pe({color:789010}))),C.length&&i.add(new Ft(fn(C),new pe({color:2287359,toneMapped:!1})));const L=[];for(let U=0;U<(n===0?8:12);U++){const A=s()<.5,D=[-50,0,50][Math.floor(s()*3)],I=[-75,-25,25,75][Math.floor(s()*4)]+(s()-.5)*16,G=v(A?D-9:I,A?I:D-9),W=v(A?D+9:I,A?I:D+9),B=Math.min(G,W);if(B<16)continue;const Y=11+s()*Math.min(10,B-14);L.push({alongX:A,s:D,p:I,y:Y})}const F=new ae(1,1,1),z=new Ue(F,$t(2761792,{selfLit:.1}),L.length*2);return L.forEach((U,A)=>{const I=U.alongX?U.s:U.p,G=U.alongX?U.p:U.s;r.compose(o.set(I,U.y,G),a.identity(),U.alongX?l.set(16.6,2.2,3):l.set(3,2.2,16.6)),z.setMatrixAt(A*2,r),r.compose(o.set(I,U.y+1.3,G),a.identity(),U.alongX?l.set(16.6,.3,3.4):l.set(3.4,.3,16.6)),z.setMatrixAt(A*2+1,r);const W=A%2?2287359:16722902;t.trimAdd(I,U.y-1.12,G,U.alongX?16.6:.25,.08,U.alongX?.25:16.6,W),t.trimAdd(I,U.y+.2,G+(U.alongX?1.52:0),U.alongX?16.6:.06,.5,U.alongX?.06:16.6,10483455)}),i.add(z),{billboards:h.length,acs:f.length,antennas:p.length,cables:w.length+C.length,walkways:L.length}}const Cs={cyberdeck:[.00390625,.75390625,.2421875,.16015625,2.016260162601626],synapse:[.25390625,.75,.2421875,.16666666666666666,1.9375],neo:[.50390625,.7083333333333333,.2421875,.25,1.2916666666666667],bar:[.75390625,.7447916666666667,.2421875,.17708333333333334,1.8235294117647058],hotel:[.0439453125,.33854166666666663,.162109375,.3229166666666667,.6693548387096774],ramen:[.2958984375,.33854166666666663,.1572265625,.3229166666666667,.6491935483870968],"open-24-hours":[.50390625,.41927083333333337,.2421875,.16145833333333334,2],vacancy:[.8037109375,.33854166666666663,.1416015625,.3229166666666667,.5846774193548387],"future-city":[.00390625,.07552083333333337,.2421875,.18229166666666666,1.7714285714285714],"chill-zone":[.25390625,.07421875,.2421875,.18489583333333334,1.7464788732394365],overdrive:[.50390625,.078125,.2421875,.17708333333333334,1.8235294117647058],"amp-tower":[.7724609375,.00520833333333337,.2041015625,.3229166666666667,.842741935483871]},ph={"holo-face":[.0166015625,.00390625,.298828125,.9921875,.6023622047244095],"holo-chill-zone":[.35546875,.005859375,.2880859375,.990234375,.5818540433925049],"holo-overdrive":[.68359375,.00390625,.2978515625,.9921875,.6003937007874016]},lv=""+new URL("signs-atlas-OiKJRqLS.webp",import.meta.url).href,cv=""+new URL("holo-atlas-Cd4475eH.webp",import.meta.url).href,hv=new Gd,mh=i=>{const t=hv.load(i);return t.colorSpace=Ne,t.anisotropy=4,t},uv={cyberdeck:16722902,synapse:16730848,neo:2287359,bar:16722902,hotel:16722902,ramen:16722902,"open-24-hours":2287359,vacancy:16722902,"future-city":2287359,"chill-zone":3800954,overdrive:16722902,"amp-tower":16722902},li=[-50,0,50];function gh(i,t,e,n,s,r,a=.3){const o=new Te(e,n),l=[0,Math.PI,Math.PI/2,-Math.PI/2][t];o.rotateY(l);const c=[[r*i.w,i.d/2+a],[r*i.w,-i.d/2-a],[i.w/2+a,r*i.d],[-i.w/2-a,r*i.d]][t];return o.translate(i.cx+c[0],s,i.cz+c[1]),{g:o,x:i.cx+c[0],z:i.cz+c[1],rotY:l}}function eo(i,t){const e=i.attributes.uv;for(let n=0;n<e.count;n++)e.setXY(n,t[0]+e.getX(n)*t[2],t[1]+e.getY(n)*t[3])}function no(i){const t=Math.min(...li.map(s=>Math.abs(i.cx-s))),e=Math.min(...li.map(s=>Math.abs(i.cz-s)));return t<e?li.reduce((r,a)=>Math.abs(i.cx-a)<Math.abs(i.cx-r)?a:r)>i.cx?2:3:li.reduce((s,r)=>Math.abs(i.cz-r)<Math.abs(i.cz-s)?r:s)>i.cz?0:1}function io(i,t,e,n,s){const r=[[0,1],[0,-1],[1,0],[-1,0]][e],a=e<2?s*t.w:e===2?t.w/2:-t.w/2,o=e<2?e===0?t.d/2:-t.d/2:s*t.d;for(const l of[1,4,8]){const c=t.cx+a+r[0]*l,u=t.cz+o+r[1]*l;for(const d of i)if(d!==t&&d.h>n-2&&Math.abs(c-d.cx)<d.w/2&&Math.abs(u-d.cz)<d.d/2)return!0}return!1}function fv(i,t,e,n,s){const r={};for(const K of e)if(K.base=0,K.tier)for(const st of e)st!==K&&st.tier===0&&Math.abs(st.cx-K.cx)<st.w/2&&Math.abs(st.cz-K.cz)<st.d/2&&(K.base=Math.max(K.base,st.h));const a=e.filter(K=>!K.noDeco&&K.h>9),o=a.filter(K=>!K.tier),l=e.filter(K=>!K.noDeco&&K.h-K.base>14),c=Object.keys(Cs),u=[],d=[],h=n===0?70:110,f=c.filter(K=>Cs[K][4]<.9),p=c.filter(K=>Cs[K][4]>=.9),_={big:n===0?26:42,small:n===0?40:64},g={big:0,small:0};for(let K=0;K<h*5&&(g.big<_.big||g.small<_.small);K++){const st=g.big<_.big&&(K%2===0||g.small>=_.small);if(!st&&g.small>=_.small)continue;const lt=st?l:o,vt=lt[Math.floor(s()*lt.length)],Lt=st&&K%4===0?f[(K>>2)%f.length]:st?p[(K>>1)%p.length]:c[K%c.length],O=Cs[Lt],Gt=s()<.75?no(vt):Math.floor(s()*4),At=st?O[4]<.9?12+s()*10:6+s()*6:2.6+s()*2.4,y=At*O[4],x=Gt<2?vt.w:vt.d;if(y>x*.9)continue;const N=st?vt.base+At/2+2+s()*Math.max(0,vt.h-vt.base-At-4):Math.min(vt.h-At/2-.5,3.4+s()*4+At/2),k=(s()-.5)*.5;if(io(e,vt,Gt,N,k))continue;const{g:X,x:rt,z:at}=gh(vt,Gt,y,At,N,k,.25+K*.002);eo(X,O),u.push(X),g[st?"big":"small"]++,st||d.push({x:rt,z:at,w:y,c:uv[Lt],face:Gt})}const m=new pe({map:mh(lv),transparent:!0,depthWrite:!1,toneMapped:!1,side:Ve,color:16777215});m.color.setScalar(1.35);const M=new Ft(fn(u),m);M.renderOrder=2,i.add(M),r.signBoards=u.length;const R=[],S=n===0?40:90,b=K=>Math.min(...li.map(st=>Math.abs(K-st)));for(let K=0;K<S*8&&R.length<S*2;K++){const st=a[Math.floor(s()*a.length)],lt=no(st),vt=lt===2?st.cx+st.w/2:lt===3?st.cx-st.w/2:lt===0?st.cz+st.d/2:st.cz-st.d/2;if(b(vt)>13)continue;const Lt=f[K%f.length],O=Cs[Lt],Gt=7+s()*9,At=Gt*O[4],y=Math.max(st.base,0)+Gt/2+4+s()*Math.max(0,st.h-Math.max(st.base,0)-Gt-6);if(y+Gt/2>st.h-1)continue;const x=(s()-.5)*.8;if(io(e,st,lt,y,x))continue;const N=lt===2?1:lt===3?-1:0,k=lt===0?1:lt===1?-1:0,X=At/2+.5,rt=lt<2?st.cx+x*st.w:vt+N*X,at=lt<2?vt+k*X:st.cz+x*st.d;for(const j of[0,1]){const et=new Te(At,Gt);et.rotateY((lt<2?Math.PI/2:0)+j*Math.PI);const ht=lt<2?[j?-.06:.06,0]:[0,j?-.06:.06];et.translate(rt+ht[0],y,at+ht[1]),eo(et,O),R.push(et)}}if(R.length){const K=new pe({map:m.map,transparent:!0,depthWrite:!1,toneMapped:!1,color:16777215});K.color.setScalar(1.35);const st=new Ft(fn(R),K);st.renderOrder=2,i.add(st)}r.bladeSigns=R.length/2;const w=[],C=Object.keys(ph),v=l.filter(K=>K.h-K.base>24);for(let K=0,st=0;K<120&&st<(n===0?10:16)&&v.length;K++){const lt=v[Math.floor(s()*v.length)],vt=ph[C[K%C.length]],Lt=no(lt),O=10+s()*10,Gt=O*vt[4];if(Gt>(Lt<2?lt.w:lt.d)*.95)continue;const At=lt.base+O/2+2+s()*Math.max(0,lt.h-lt.base-O-4),y=(s()-.5)*.3;if(io(e,lt,Lt,At,y))continue;const{g:x}=gh(lt,Lt,Gt,O,At,y,.6);eo(x,vt),x.setAttribute("seed",new Qe(new Float32Array(x.attributes.position.count).fill(s()),1)),w.push(x),st++}if(w.length){const K=bl.merge([xt.fog,{t:{value:0}}]);K.map={value:mh(cv)};const st=new Ft(fn(w),new je({uniforms:K,transparent:!0,depthWrite:!1,blending:Pe,side:Ve,fog:!0,vertexShader:`attribute float seed; varying vec2 vUv; varying float vS;
#include <fog_pars_vertex>
void main(){ vUv = uv; vS = seed; vec4 mvPosition = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; uniform float t; varying vec2 vUv; varying float vS;
#include <fog_pars_fragment>
void main(){ float gl = step(0.97, fract(sin(floor(t*5.0+vS*17.0))*43758.5)); vec2 uv = vUv + vec2(gl*0.004*sin(vUv.y*300.0),0.0); vec4 c = texture2D(map, uv); float scan = 0.75+0.25*sin(vUv.y*1400.0 - t*10.0); float fl = 0.85+0.15*sin(t*17.0+vS*9.0); gl_FragColor = vec4(c.rgb*scan*fl*1.4, c.a);
#include <fog_fragment>
}`}));st.renderOrder=3,i.add(st),t.animated.push(lt=>{st.material.uniforms.t.value=lt}),r.holoPortraits=w.length}const T=new Te(1,1).rotateX(-Math.PI/2),L=(()=>{const K=document.createElement("canvas");K.width=64,K.height=256;const st=K.getContext("2d"),lt=st.createLinearGradient(0,0,0,256);lt.addColorStop(0,"rgba(255,255,255,0)"),lt.addColorStop(.2,"rgba(255,255,255,.9)"),lt.addColorStop(1,"rgba(255,255,255,0)"),st.fillStyle=lt,st.fillRect(0,0,64,256),st.globalCompositeOperation="destination-in";const vt=st.createLinearGradient(0,0,64,0);return vt.addColorStop(0,"rgba(0,0,0,0)"),vt.addColorStop(.5,"#000"),vt.addColorStop(1,"rgba(0,0,0,0)"),st.fillStyle=vt,st.fillRect(0,0,64,256),new Zr(K)})(),F=new Ue(T,new pe({map:L,transparent:!0,depthWrite:!1,blending:Pe,opacity:n===2?.55:.4,toneMapped:!1}),d.length),z=new te,U=new Bn,A=new P,D=new P,I=new Ht,G=new P(0,1,0);d.forEach((K,st)=>{const lt=[[0,1],[0,-1],[1,0],[-1,0]][K.face],vt=4.6,Lt=K.face<2?K.z:K.x,O=li.reduce((x,N)=>Math.abs(Lt-N)<Math.abs(Lt-x)?N:x),Gt=O+(Lt<O?-5.4:5.4),At=K.face<2?lt[1]:lt[0],y=Gt+At*(vt/2);z.compose(A.set(K.face<2?K.x:y,.012+st*2e-4,K.face<2?y:K.z),U.setFromAxisAngle(G,K.face<2?0:Math.PI/2),D.set(K.w*.8,1,vt)),F.setMatrixAt(st,z),F.setColorAt(st,I.set(K.c))}),i.add(F),r.wetReflections=d.length;const W=[];for(let K=0;K<(n===0?8:14);K++){const st=s()<.5,lt=li[Math.floor(s()*3)],vt=-85+s()*170;li.some(Lt=>Math.abs(vt-Lt)<8)||W.push(st?[lt+(s()-.5)*6,vt]:[vt,lt+(s()-.5)*6])}const B=14,Y=[],q=[];W.forEach(([K,st])=>{for(let lt=0;lt<B;lt++)Y.push(K,0,st),q.push(lt/B,s())});const ot=new Se;ot.setAttribute("position",new qt(Y,3)),ot.setAttribute("ph",new qt(q,2));const mt=new vl(ot,new je({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},map:{value:ci()}},vertexShader:"attribute vec2 ph; uniform float t; varying float vA; void main(){ float k = fract(t*0.25 + ph.x); vec3 p = position + vec3(sin(ph.y*30.0+t)*0.6*k, k*7.0, cos(ph.y*20.0)*0.6*k); vA = (1.0-k)*smoothstep(0.0,0.1,k); vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = (90.0 + 260.0*k) / -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(0.62,0.6,0.85, a*vA*0.35); }"}));mt.frustumCulled=!1,i.add(mt),t.animated.push(K=>{mt.material.uniforms.t.value=K}),r.steamVents=W.length;const Kt=new Ue(new Te(1.6,1.6).rotateX(-Math.PI/2),new pe({color:1709096}),W.length);W.forEach(([K,st],lt)=>{z.compose(A.set(K,.2,st),U.identity(),D.set(1,1,1)),Kt.setMatrixAt(lt,z)}),i.add(Kt);const yt=[],Tt=e.filter(K=>K.h<16&&!K.noDeco).slice(0,n===0?30:60);t.relayLot&&Tt.unshift(t.relayLot);for(const K of Tt)for(const[st,lt,vt,Lt]of[[-1,-1,1,-1],[1,-1,1,1],[1,1,-1,1],[-1,1,-1,-1]]){const O=K.cx+st*K.w/2,Gt=K.cz+lt*K.d/2,At=K.cx+vt*K.w/2,y=K.cz+Lt*K.d/2,x=Math.hypot(At-O,y-Gt),N=Math.max(2,Math.round(x/2.5));for(let k=0;k<=N;k++){const X=k/N;yt.push(new ae(.07,1,.07).translate(O+(At-O)*X,K.h+.5,Gt+(y-Gt)*X))}for(const k of[.5,1])yt.push(new ae(Math.abs(At-O)+.07,.05,Math.abs(y-Gt)+.07).translate((O+At)/2,K.h+k,(Gt+y)/2))}yt.forEach(K=>{delete K.attributes.uv,delete K.attributes.normal});const $=fn(yt);$.computeVertexNormals(),i.add(new Ft($,$t(2894394,{selfLit:.25}))),r.railedRoofs=Tt.length;const tt=n===0?8:14,dt=[];for(let K=0;K<tt;K++)dt.push({cx:(s()-.5)*160,cz:-40+(s()-.5)*200,r:30+s()*60,y:32+s()*40,sp:(.05+s()*.06)*(s()<.5?1:-1),a:s()*6.28,bob:s()*6});const It=fn([new ye(1,10,6).scale(1.3,.45,2.6),new ae(4.2,.12,.8).translate(0,0,-.6)].map(K=>(delete K.attributes.uv,K))),ct=new Ue(It,$t(2763322,{selfLit:.2}),tt),zt=new Ue(new Te(1,1),new pe({map:ci(),transparent:!0,depthWrite:!1,blending:Pe,toneMapped:!1}),tt*2);for(let K=0;K<tt;K++)zt.setColorAt(K*2,I.set(2287359)),zt.setColorAt(K*2+1,I.set(16722902));ct.userData.dynamic=zt.userData.dynamic=!0,i.add(ct,zt),t.animated.push((K,st)=>{dt.forEach((lt,vt)=>{const Lt=lt.a+K*lt.sp,O=lt.cx+Math.cos(Lt)*lt.r,Gt=lt.cz+Math.sin(Lt)*lt.r,At=lt.y+Math.sin(K*.5+lt.bob)*2,y=Math.atan2(-Math.sin(Lt)*Math.sign(lt.sp),Math.cos(Lt)*Math.sign(lt.sp));z.compose(A.set(O,At,Gt),U.setFromAxisAngle(G,y),D.set(1,1,1)),ct.setMatrixAt(vt,z);const x=st?st.quaternion:U;z.compose(A.set(O+Math.sin(y)*2.6,At,Gt+Math.cos(y)*2.6),x,D.set(3,3,3)),zt.setMatrixAt(vt*2,z),z.compose(A.set(O-Math.sin(y)*2.6,At,Gt-Math.cos(y)*2.6),x,D.set(2.2,2.2,2.2)),zt.setMatrixAt(vt*2+1,z)}),ct.instanceMatrix.needsUpdate=!0,zt.instanceMatrix.needsUpdate=!0}),r.flyingVehicles=tt;const ce=(()=>{const K=document.createElement("canvas");K.width=128,K.height=512;const st=K.getContext("2d");st.fillStyle="#0b0a1c",st.fillRect(0,0,128,512);for(let vt=8;vt<512;vt+=9)for(let Lt=6;Lt<122;Lt+=8){const O=Math.random();O<.5||(st.fillStyle=O>.93?"#ff4ae0":O>.8?"#3ae8ff":O>.7?"#ffd28a":"#2a3a6a",st.fillRect(Lt,vt,4,5))}st.fillStyle="#ff2bd6",st.fillRect(0,0,128,3);const lt=new Zr(K);return lt.colorSpace=Ne,lt})(),Bt=n===0?50:120,jt=new Ue(new Te(1,1).translate(0,.5,0),new pe({map:ce,fog:!0,toneMapped:!1}),Bt);for(let K=0;K<Bt;K++){const st=K/Bt*Math.PI*2+s()*.05,lt=150+K%3*30+s()*20,vt=Math.cos(st)*lt,Lt=Math.sin(st)*lt-35,O=14+s()*22,Gt=50+s()*120;z.compose(A.set(vt,0,Lt),U.setFromAxisAngle(G,Math.atan2(-vt,-(Lt+35))),D.set(O,Gt,1)),jt.setMatrixAt(K,z);const At=.55+s()*.45;jt.setColorAt(K,I.setRGB(At,At,At*1.1))}if(i.add(jt),r.farCards=Bt,n===0)return r;const le=ci();for(const[K,st,lt]of[[14,.12,3820799],[38,.08,11545304]]){const vt=new Ft(new Te(420,420).rotateX(-Math.PI/2),new pe({map:le,color:lt,transparent:!0,opacity:st,depthWrite:!1,blending:Pe,fog:!1,side:Ve}));vt.position.set(0,K,-35),vt.renderOrder=4,i.add(vt)}const Wt=new Ft(new Je(135,135,70,32,1,!0),new pe({color:2764912,transparent:!0,opacity:.22,depthWrite:!1,side:$e,fog:!1}));return Wt.position.set(0,25,-35),i.add(Wt),r}const so=new P(-.12,.6,-.8).normalize();function dv(i,t,e){const n=new Ft(new ye(1,24,12),new je({side:$e,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = position; vec4 p = projectionMatrix*viewMatrix*vec4(cameraPosition + position*400.0,1.0); gl_Position = p.xyww; gl_Position.z = p.w*0.99999; }",fragmentShader:"varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 c = mix(vec3(0.07,0.10,0.30), vec3(0.005,0.01,0.06), smoothstep(-0.05,0.55,h)); c += vec3(0.25,0.06,0.35)*pow(1.0-abs(h),10.0); c += vec3(0.02,0.08,0.2)*pow(1.0-abs(h),3.0); gl_FragColor = vec4(c,1.0); }"}));n.renderOrder=-3,n.frustumCulled=!1,i.add(n);const s=t===0?450:t===1?700:950,r=[],a=[];for(let u=0;u<s;u++){const d=e()*Math.PI*2,h=.04+Math.pow(e(),.8)*.96,f=Math.sqrt(1-h*h),p=new P(Math.cos(d)*f,h,Math.sin(d)*f);if(p.angleTo(so)<.16){u--;continue}const _=e()<.07;r.push(p.x,p.y,p.z),a.push(_?3.6+e()*1.8:1.6+e()*1.6,_?1:.45+e()*.55,e()*6.28,e())}const o=new Se;o.setAttribute("position",new qt(r,3)),o.setAttribute("a",new qt(a,4));const l=new vl(o,new je({transparent:!0,depthWrite:!1,fog:!1,blending:Pe,uniforms:{t:{value:0},px:{value:1}},vertexShader:`attribute vec4 a; uniform float t, px; varying float vB; varying vec3 vC;
      void main(){ vec4 p = projectionMatrix*viewMatrix*vec4(cameraPosition + position*380.0,1.0); gl_Position = p; gl_Position.z = p.w*0.99998;
        float tw = 0.72 + 0.28*sin(t*(0.8 + a.w*2.2) + a.z);
        float fade = smoothstep(0.05, 0.38, position.y); // horizon haze / neon glow band
        vB = a.y*tw*fade; vC = mix(vec3(0.75,0.88,1.0), a.w > 0.8 ? vec3(1.0,0.75,0.95) : vec3(0.85,1.0,0.98), fract(a.w*7.0));
        gl_PointSize = a.x*px*(0.85 + 0.15*tw); }`,fragmentShader:"varying float vB; varying vec3 vC; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d)*2.0; float k = smoothstep(1.0, 0.0, r); k *= k; if (vB*k < 0.01) discard; gl_FragColor = vec4(vC*vB*k, 1.0); }"}));l.renderOrder=-2,l.frustumCulled=!1,i.add(l);const c=new Ft(new Te(2,2),new je({side:Ve,transparent:!0,depthWrite:!1,fog:!1,blending:Pe,uniforms:{dir:{value:so},t:{value:0}},vertexShader:`uniform vec3 dir; varying vec2 vU;
      void main(){ vU = position.xy; vec3 f = normalize(dir); vec3 r = normalize(cross(vec3(0.0,1.0,0.0), f)); vec3 u = cross(f, r);
        vec3 w = cameraPosition + f*360.0 + (r*position.x + u*position.y)*125.0; vec4 p = projectionMatrix*viewMatrix*vec4(w,1.0); gl_Position = p; gl_Position.z = p.w*0.99997; }`,fragmentShader:`varying vec2 vU; uniform float t;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){ float R = 0.3; vec2 p = vU; float d = length(p);
        vec3 col = vec3(0.0);
        // halo (outside + over the disc)
        float halo = exp(-max(d - R, 0.0)*5.0)*0.30 + exp(-max(d - R, 0.0)*18.0)*0.45; col += vec3(0.55,0.75,1.0)*halo*smoothstep(1.0, 0.6, d);
        if (d < R) { vec2 q = p / R; float z = sqrt(max(0.0, 1.0 - dot(q,q)));
          vec2 s = q / (0.6 + z*0.4); // fake sphere mapping
          float mar = smoothstep(0.4, 0.8, n(s*2.1 + 3.1))*0.22 + smoothstep(0.5, 0.85, n(s*3.7 + 7.7))*0.12; // dark maria
          float cr = 0.0; for (int k = 0; k < 9; k++) { vec2 c = vec2(h(vec2(float(k),1.3)), h(vec2(float(k),7.9)))*1.6 - 0.8; float rr = 0.05 + h(vec2(float(k),4.2))*0.13; float e = length(s - c)/rr; cr += (smoothstep(1.0,0.6,e)*0.12 - smoothstep(1.15,1.0,e)*smoothstep(0.85,1.0,e)*0.08); }
          float grain = n(s*18.0)*0.05;
          float lum = (1.0 - mar - cr + grain) * (0.55 + 0.45*pow(z, 0.5)); // limb darkening
          vec3 tint = mix(vec3(0.80,0.86,1.0), vec3(0.92,0.84,1.0), q.x*0.5 + 0.5);
          col = mix(col, tint*lum*1.05 + vec3(0.04,0.08,0.12), smoothstep(R, R - 0.008, d)); }
        gl_FragColor = vec4(col, 1.0); }`}));return c.renderOrder=-1,c.frustumCulled=!1,i.add(c),{dome:n,stars:l,moon:c,dir:so,update(u,d){l.material.uniforms.t.value=u,l.material.uniforms.px.value=d?d.getPixelRatio():1}}}const re={spawn:new P(0,0,88),blocksX:[-75,-25,25,75],blocksZ:[75,25,-25,-75],half:18,park:{x:25,z:-25},roofBlock:{x:-75,z:-25},towerPlaza:new P(0,0,-132),tower:new P(0,0,-156),hotspots:[{id:"h1",name:"Noodle Row",pos:new P(-50,0,50),kind:"street"},{id:"h2",name:"Bass Alley",pos:new P(50,0,0),kind:"street"},{id:"h3",name:"Rooftop Relay",pos:new P(-75,9,-25),kind:"roof"}]};function pv(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function mv(){const i=new di({color:16777215});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 
#ifdef USE_INSTANCING
 vec4 wp4 = modelMatrix * instanceMatrix * vec4(transformed,1.0); vWN = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);
#else
 vec4 wp4 = modelMatrix * vec4(transformed,1.0); vWN = normalize(mat3(modelMatrix) * objectNormal);
#endif
 vWP = wp4.xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }`).replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive;
      if (abs(vWN.y) < 0.5) {
        float u = abs(vWN.x) > 0.5 ? vWP.z : vWP.x;
        // dense emissive window grid (1.3 m x 1.6 m cells); filtered to average coverage at distance to avoid shimmer
        vec2 gc = vec2(u/0.7, vWP.y/1.0); vec2 cell = floor(gc); vec2 f = fract(gc);
        float win = step(0.22,f.x)*step(f.x,0.78)*step(0.3,f.y)*step(f.y,0.78)*step(3.0, vWP.y);
        float aa = clamp(1.0 - max(fwidth(gc.x), fwidth(gc.y))*1.2, 0.0, 1.0); win = mix(0.24, win, aa) * step(3.0, vWP.y);
        float hs = h21(cell + floor(vWN.xz*3.0) + floor(vWP.xz/40.0)*7.0);
        float bh = h21(floor(vWP.xz/16.0) + 3.1);
        vec3 wc = hs > 0.95 ? vec3(1.0,0.25,0.8) : (hs > 0.86 ? vec3(0.3,0.85,1.0) : vec3(1.0,0.78,0.5));
        float lit = step(0.72, hs) * (0.35 + 0.65*h21(cell*0.37));
        totalEmissiveRadiance += win * (lit * wc * 0.55 + (1.0-lit) * vec3(0.02,0.04,0.09));
        // horizontal neon floor bands on some towers (cyan / magenta)
        float band = step(0.93, fract(vWP.y/12.0)) * step(0.55, bh) * step(6.0, vWP.y);
        totalEmissiveRadiance += band * (bh > 0.8 ? vec3(1.0,0.15,0.75) : vec3(0.1,0.8,1.0)) * 0.55;
        float store = step(vWP.y,2.6)*step(0.6,vWP.y)*step(0.1,f.x)*step(f.x,0.9);
        totalEmissiveRadiance += store * (h21(cell*1.3)>0.5 ? vec3(0.1,0.5,0.6) : vec3(0.5,0.15,0.45)) * 0.16;
      }`)},i}function gv(i,t,e){const n=pv(7),s={animated:[],signs:[],mapRects:[],tower:null,core:null,sprout:null},r=e==="low"?0:e==="medium"?1:2,a=dv(i,r,n);s.sky=a,s.animated.push(y=>a.update(y,s.renderer));const o=jx();o.repeat.set(60,70);const l=new Ft(new Te(260,300),new di({map:o,color:10130096}));l.rotation.x=-Math.PI/2,l.position.set(0,0,-35),i.add(l);const c=new Te(.25,2.6);c.rotateX(-Math.PI/2);const u=[];for(const y of[-100,-50,0,50,100])for(let x=-100;x<=100;x+=6)u.push([y,x,0]);for(const y of[-100,-50,0,50,100])for(let x=-100;x<=100;x+=6)u.push([x,y,Math.PI/2]);const d=new Ue(c,new pe({color:9075264}),u.length),h=new te,f=new Bn,p=new P,_=new P(1,1,1);u.forEach(([y,x,N],k)=>{f.setFromAxisAngle(new P(0,1,0),N),h.compose(p.set(y,.02,x),f,_),d.setMatrixAt(k,h)}),i.add(d);const g=[],m=[],M=(y,x,N,k,X,rt,at={})=>{g.push({cx:y,cz:x,w:N,d:k,h:X,color:rt,...at}),t.add(y-N/2,y+N/2,x-k/2,x+k/2,X),s.mapRects.push([y-N/2,x-k/2,N,k,X])},R=[2498624,2893392,1907251,3352655,1713728,2629436,1450042];for(const y of re.blocksX)for(const x of re.blocksZ){const N=re.half;if(m.push([y,x,N*2+3,N*2+3]),!(y===re.park.x&&x===re.park.z)){if(y===re.roofBlock.x&&x===re.roofBlock.z){M(y-4,x,24,26,9,2959940),M(y+12.5,x+6,9,12,4.6,3485773),M(y+12.5,x-8,9,10,14,2498872);continue}for(const[k,X]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const rt=15+n()*2,at=15+n()*2,j=n()<.15,et=j?5+n()*1.5:10+n()*(Math.abs(x)>60?14:20),ht=y+k*8.6,Dt=x+X*8.6,pt=R[Math.floor(n()*R.length)];if(M(ht,Dt,rt,at,et,pt,{tier:0}),!j&&n()<.8){const ut=rt*(.55+n()*.25),Rt=at*(.55+n()*.25),kt=ht+(n()-.5)*(rt-ut)*.6,Zt=Dt+(n()-.5)*(at-Rt)*.6,H=et+12+n()*34;if(M(kt,Zt,ut,Rt,H,R[Math.floor(n()*R.length)],{tier:1}),n()<.6){const ft=ut*(.45+n()*.25),nt=Rt*(.45+n()*.25);M(kt+(n()-.5)*(ut-ft)*.5,Zt+(n()-.5)*(Rt-nt)*.5,ft,nt,H+14+n()*34,pt,{tier:2,spire:!0})}}}}}for(const y of[-1,1])for(let x=-112;x>-170;x-=18){const N=y*(52+n()*6),k=18+n()*24;M(N,x,22,16,k,R[Math.floor(n()*R.length)],{tier:0}),M(N+y*2,x,13,10,k+12+n()*20,R[Math.floor(n()*R.length)],{tier:1,spire:n()<.5})}const S=new ae(1,1,1);S.translate(0,.5,0);const b=new Ue(S,mv(),g.length),w=new Ht;g.forEach((y,x)=>{h.compose(p.set(y.cx,0,y.cz),f.identity(),_.set(y.w,y.h,y.d)),b.setMatrixAt(x,h),b.setColorAt(x,w.set(y.color))}),i.add(b),s.buildings=b,s.lots=g;const C=[];g.forEach(y=>{n()<.75&&C.push(y)});const v=g.filter(y=>y.h>14&&n()<.5),T=[2287359,16722902,2287359,16722902,3800954],L=new Ue(new ae(1,1,1),new pe({color:16777215,toneMapped:!1}),C.length*4+v.length*4+64);let F=0;_.set(1,1,1);for(const y of C){const x=T[Math.floor(n()*T.length)];for(const[N,k,X,rt]of[[y.cx,y.cz-y.d/2,y.w,.2],[y.cx,y.cz+y.d/2,y.w,.2],[y.cx-y.w/2,y.cz,.2,y.d],[y.cx+y.w/2,y.cz,.2,y.d]])h.compose(p.set(N,y.h+.1,k),f.identity(),_.set(X,.2,rt)),L.setMatrixAt(F,h),L.setColorAt(F++,w.set(x))}for(const y of v){const x=T[Math.floor(n()*T.length)],N=y.tier?g.find(k=>k.tier===0&&Math.abs(k.cx-y.cx)<10&&Math.abs(k.cz-y.cz)<10)?.h||0:3;for(const[k,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])h.compose(p.set(y.cx+k*(y.w/2+.05),(N+y.h)/2,y.cz+X*(y.d/2+.05)),f.identity(),_.set(.16,y.h-N,.16)),L.setMatrixAt(F,h),L.setColorAt(F++,w.set(x))}s.trimMesh=L,s.trimNext=()=>F,s.trimAdd=(y,x,N,k,X,rt,at)=>{F>=L.count||(h.compose(p.set(y,x,N),f.identity(),_.set(k,X,rt)),L.setMatrixAt(F,h),L.setColorAt(F++,w.set(at)))},i.add(L);const z=new Ue(new ae(1,1,1),$t(3880272),m.length);m.forEach(([y,x,N,k],X)=>{h.compose(p.set(y,.09,x),f.identity(),_.set(N,.18,k)),z.setMatrixAt(X,h),t.add(y-N/2,y+N/2,x-k/2,x+k/2,.18)}),i.add(z);const U=[],A=(y,x,N,k,X,rt=4147802)=>{U.push({x:y,z:x,w:N,d:k,h:X,c:rt}),t.add(y-N/2,y+N/2,x-k/2,x+k/2,X),s.mapRects.push([y-N/2,x-k/2,N,k,X])};A(-75+12.5,-25+13.3,4,2.4,1.7,3107402),A(-75+12.5,-25+16.2,2,2,.9,5917234),A(-75+11.5,-25+2.5,2.4,2.4,6.8,4868698);for(let y=0;y<14;y++){const x=re.blocksX[y%4],N=re.blocksZ[y*3%4];x===re.park.x&&N===re.park.z||A(x+(n()-.5)*30,N+19.6,1.4,1.4,1.1,5917234)}const D=new Ue(new ae(1,1,1),$t(16777215),U.length);U.forEach((y,x)=>{h.compose(p.set(y.x,y.h/2,y.z),f.identity(),_.set(y.w,y.h,y.d)),D.setMatrixAt(x,h),D.setColorAt(x,w.set(y.c))}),i.add(D);const I=new Fe;I.position.copy(re.hotspots[2].pos).setY(9),i.add(I);const G=new Ft(new Je(.15,.3,6,6),$t(2761270));G.position.y=3,I.add(G);const W=new Ft(new Ui(.9,.08,6,18),He(16722902));W.position.y=5.2,I.add(W),t.add(I.position.x-.35,I.position.x+.35,I.position.z-.35,I.position.z+.35,15),s.relay={group:I,dish:W},s.animated.push(y=>{W.rotation.y=y*2,W.rotation.x=Math.sin(y)*.4});const B=re.park,Y=new Ft(new Jr(17,40),$t(2767412));Y.rotation.x=-Math.PI/2,Y.position.set(B.x,.2,B.z),i.add(Y);const q=new Ft(new Kr(16.6,17,48),He(2287359));q.rotation.x=-Math.PI/2,q.position.set(B.x,.22,B.z),i.add(q);for(let y=0;y<6;y++){const x=y/6*Math.PI*2,N=B.x+Math.cos(x)*12,k=B.z+Math.sin(x)*12,X=new Ft(new ae(2.4,.5,.8),$t(4864554));X.position.set(N,.45,k),X.rotation.y=-x,i.add(X)}const ot=[];for(const y of[-50,0,50])for(let x=-90;x<=90;x+=30)ot.push([y+6.5,x],[y-6.5,x+15]);const mt=new Je(.08,.12,6,5);mt.translate(0,3,0);const Kt=new Ue(mt,$t(2236458),ot.length),yt=new Ue(new ye(.3,8,6),new pe({color:16777215,toneMapped:!1}),ot.length),Tt=new Ue(new Te(9,9).rotateX(-Math.PI/2),new pe({map:ci(),color:16777215,transparent:!0,opacity:.22,blending:Pe,depthWrite:!1}),ot.length);ot.forEach(([y,x],N)=>{h.compose(p.set(y,0,x),f.identity(),_.set(1,1,1)),Kt.setMatrixAt(N,h),h.compose(p.set(y,6,x),f.identity(),_.set(1,1,1)),yt.setMatrixAt(N,h),h.compose(p.set(y,.21+N*5e-4,x),f.identity(),_.set(1,1,1)),Tt.setMatrixAt(N,h);const k=N%3===0?16734944:5958399;yt.setColorAt(N,w.set(k)),Tt.setColorAt(N,w.set(k))}),i.add(Kt,yt,Tt);const $=new Fe;$.position.set(0,0,96),i.add($);const tt=new Ft(new Je(1.2,1.4,.8,10),$t(2761270));tt.position.y=.4,$.add(tt),t.add(-1.3,1.3,94.7,97.3,.8);for(let y=0;y<7;y++){const x=-1.3+y*.43,N=new Ft(new fi(.18,1.6,4),He(3800954));N.position.set(Math.sin(x)*.5,1.5+Math.cos(x)*.4,0),N.rotation.z=-x,$.add(N)}const dt=tn(3800954,6,.5);dt.position.y=1.6,$.add(dt),s.sprout=$,s.animated.push(y=>{dt.material.opacity=.4+Math.sin(y*2)*.12});const It=re.tower,ct=re.towerPlaza,zt=new Ft(new Jr(26,48),$t(2365998));zt.rotation.x=-Math.PI/2,zt.position.set(ct.x,.03,ct.z),i.add(zt);const ce=new Ft(new Kr(25.4,26,64),He(16722902));ce.rotation.x=-Math.PI/2,ce.position.set(ct.x,.05,ct.z),i.add(ce),s.plazaRing=ce;const Bt=new Fe;Bt.position.copy(It),i.add(Bt);const jt=$t(1708580),le=[[9,7,10],[7,5.5,14],[5.5,4,16],[4,2.5,18],[2.5,1.2,14]];let Wt=0;const K=[];for(const[y,x,N]of le){const k=new Ft(new Je(x,y,N,8),jt);k.position.y=Wt+N/2,Bt.add(k);const X=new Ft(new Ui(x+.4,.18,6,32),He(16722902));X.rotation.x=Math.PI/2,X.position.y=Wt+N,Bt.add(X),K.push(X),Wt+=N}const st=new Ft(new Je(.1,.4,12,6),jt);st.position.y=Wt+6,Bt.add(st);const lt=new Ft(new ye(1.8,16,12),He(16722902));lt.position.y=Wt+12,Bt.add(lt);const vt=tn(16722902,22,.6);vt.position.y=Wt+12,vt.material.fog=!1,Bt.add(vt),t.add(It.x-9,It.x+9,It.z-9,It.z+9,10);const Lt=new Fe;Lt.position.set(It.x,0,It.z+11),i.add(Lt);const O=new Ft(new Je(1.4,1.8,1.2,10),jt);O.position.y=.6,Lt.add(O),t.add(Lt.position.x-1.6,Lt.position.x+1.6,Lt.position.z-1.6,Lt.position.z+1.6,1.2);const Gt=new Ft(new ia(1.1,1),He(16722902));Gt.position.y=2.6,Lt.add(Gt);const At=tn(16722902,6,.6);return At.position.y=2.6,Lt.add(At),s.core={group:Lt,orb:Gt,glow:At},s.tower={group:Bt,rings:K,beacon:lt,bglow:vt,top:Wt+12},s.setTowerCalm=y=>{const x=new Ht(16722902).lerp(new Ht(3800954),y);for(const N of K)N.material.color.copy(x);lt.material.color.copy(x),vt.material.color.copy(x),ce.material.color.copy(x),Gt.material.color.copy(x),At.material.color.copy(x)},s.animated.push(y=>{K.forEach((x,N)=>{x.rotation.z=y*(.5+N*.2),x.position.y+=0}),vt.scale.setScalar(20+Math.sin(y*3)*3),Gt.rotation.y=y,Gt.rotation.x=y*.7}),s.traffic=iv(i,t,r,n,[{x:-50,z:50,r:16},{x:50,z:0,r:16},{x:-62.5,z:-10,r:14},{x:0,z:88,r:9}]),s.relayLot=g.find(y=>y.h===9),s.cyber=ov(i,s,g,r,n),s.neon=fv(i,s,g,r,n),s.baked=sv(i),s.update=(y,x)=>{for(const N of s.animated)N(y,x)},s}function xv(i,t){const e=document.createElement("canvas"),n=2,s=t.bounds;e.width=(s.maxX-s.minX)*n,e.height=(s.maxZ-s.minZ)*n;const r=e.getContext("2d");r.fillStyle="#120c22",r.fillRect(0,0,e.width,e.height);for(const[a,o,l,c,u]of i.mapRects)r.fillStyle=u>8?"#3a3260":"#4e4580",r.fillRect((a-s.minX)*n,(o-s.minZ)*n,l*n,c*n);return r.strokeStyle="#ff2bd6",r.lineWidth=3,r.beginPath(),r.arc((re.towerPlaza.x-s.minX)*n,(re.towerPlaza.z-s.minZ)*n,26*n,0,Math.PI*2),r.stroke(),r.strokeStyle="#22e6ff",r.beginPath(),r.arc((re.park.x-s.minX)*n,(re.park.z-s.minZ)*n,17*n,0,Math.PI*2),r.stroke(),{canvas:e,scale:n}}class vv{constructor(t,e){this.scene=t,this.parts=[],this.max=e==="low"?60:140,this.pool=[];for(let n=0;n<this.max;n++){const s=new ta(new $s({map:ci(),transparent:!0,blending:Pe,depthWrite:!1,toneMapped:!1}));s.visible=!1,t.add(s),this.pool.push({s,life:0,v:new P,max:1,size:1})}this.rings=[]}burst(t,e,n=12,s=4,r=.5,a=.6,o=2){for(let l=0;l<n;l++){const c=this.pool.find(u=>u.life<=0);if(!c)return;c.s.visible=!0,c.s.position.copy(t),c.s.material.color.set(e),c.life=c.max=a*(.6+Math.random()*.6),c.size=r*(.6+Math.random()*.8),c.v.set((Math.random()-.5)*2,Math.random()*o/Math.max(s,.01)+.2,(Math.random()-.5)*2).normalize().multiplyScalar(s*(.5+Math.random()))}}ring(t,e,n,s,r,a=.15){const o=new Ft(new Te(1,1).rotateX(-Math.PI/2),new pe({map:Al(),color:e,transparent:!0,blending:Pe,depthWrite:!1,toneMapped:!1}));o.position.copy(t),o.position.y=t.y+a,this.scene.add(o),this.rings.push({m:o,r0:n,r1:s,t:0,dur:r})}update(t){for(const e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.s.visible=!1;continue}e.s.position.addScaledVector(e.v,t),e.v.multiplyScalar(1-2*t),e.v.y+=1.5*t;const n=e.life/e.max;e.s.material.opacity=n,e.s.scale.setScalar(e.size*(.5+n*.5))}for(let e=this.rings.length-1;e>=0;e--){const n=this.rings[e];n.t+=t;const s=n.t/n.dur,r=(n.r0+(n.r1-n.r0)*s)*2;n.m.scale.set(r,1,r),n.m.material.opacity=1-s,s>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.rings.splice(e,1))}}}class _v{constructor(t){this.scene=t,this.list=[],this.geo=new ye(1,10,8)}spawn(t){const e=new Ft(this.geo,He(t.color));e.scale.setScalar(t.size||.3);const n=new ta(new $s({map:ci(),color:t.color,transparent:!0,blending:Pe,depthWrite:!1,toneMapped:!1}));n.scale.setScalar((t.size||.3)*6),e.add(n),n.scale.divideScalar(t.size||.3),e.position.copy(t.pos),this.scene.add(e);const s={...t,mesh:e,vel:t.dir.clone().multiplyScalar(t.speed),age:0,dead:!1};return this.list.push(s),s}kill(t){t.dead=!0,this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.children[0].material.dispose()}clear(){for(const t of this.list)t.dead||this.kill(t);this.list=[]}}function Mv(i){const t=new Fe,e=new Ft(new ye(1,20,10,0,Math.PI*2,0,Math.PI/2),new pe({color:i,transparent:!0,opacity:.16,blending:Pe,depthWrite:!1,side:Ve,toneMapped:!1})),n=new Ft(new Te(2,2).rotateX(-Math.PI/2),new pe({map:Al(),color:i,transparent:!0,blending:Pe,depthWrite:!1,toneMapped:!1}));return n.position.y=.12,t.add(e,n),t.visible=!1,t.userData={dome:e,ring:n},t}const Xn=new P,yv={meleeCombo(i,t,e){const n={idx:-1,t:0,active:!1,queued:!1,sinceEnd:9,hitDone:!1};return n.press=()=>{if(!(t.busy()&&!n.active)){if(n.active){n.queued=!0;return}n.start(n.sinceEnd<i.comboWindow?(n.idx+1)%i.hits.length:0)}},n.start=s=>{n.idx=s,e.stats.comboSeq=(e.stats.comboSeq||"").slice(-8)+(s+1),n.t=0,n.active=!0,n.queued=!1,n.hitDone=!1,t.faceTarget();const r=i.hits[s];t.action={pose:r.pose,k:0},e.sfx.play("whoosh")},n.update=s=>{if(n.sinceEnd+=s,!n.active)return;const r=i.hits[n.idx];if(n.t+=s,t.action.k=n.t/r.dur,n.t<r.at){const a=t.aimTarget(4.5);if(a){Xn.subVectors(a.pos,t.pos).setY(0);const o=Xn.length()-a.radius-t.radius-.6;o>0&&t.pushVel(Xn.normalize(),Math.min(r.lunge,o/s))}}if(!n.hitDone&&n.t>=r.at){n.hitDone=!0;let a=!1;for(const o of e.targets()){Xn.subVectors(o.pos,t.pos);const l=Math.abs(o.pos.y+(o.centerY||1)-(t.pos.y+1));Xn.y=0;const c=Xn.length();c>r.range+o.radius||l>(o.reachY||1.8)||Math.abs(hi(Math.atan2(Xn.x,Xn.z),t.facing))>r.arc/2&&c>o.radius+.6||(o.calmHit(r.stress,{knock:r.knock||1.5,stagger:r.stagger||.18,dir:Xn.normalize(),kind:"melee"}),a=!0,e.fx.burst(o.pos.clone().setY(o.pos.y+(o.centerY||1)),8257418,8,5,.5))}a&&(t.addChill(i.chillGain),e.panic=Math.max(0,e.panic-(i.panicRelief||0)),e.sfx.play(r.sfx),e.hitstop(.04),r.whoosh&&e.popup("WHOOSH!",t.pos,!0))}n.t>=r.dur&&(n.active=!1,n.sinceEnd=0,t.action=null,n.queued&&n.start((n.idx+1)%i.hits.length))},n.cancel=()=>{n.active=!1,n.queued=!1,t.action&&i.hits.some(s=>s.pose===t.action.pose)&&(t.action=null)},n.busy=()=>n.active,n},projectile(i,t,e){const n={cd:0,t:0,active:!1};return n.press=()=>{if(n.cd>0||t.busy())return;if(t.chill<i.cost){e.flashButton("blast");return}t.chill-=i.cost,n.cd=i.cooldown,n.active=!0,n.t=0,t.faceTarget(),t.action={pose:i.pose,k:0};const s=new P(Math.sin(t.facing),0,Math.cos(t.facing)),r=t.aimTarget(40),a=t.pos.clone().add(new P(0,1.4,0)).addScaledVector(s,.8);r?s.subVectors(r.pos.clone().setY(r.pos.y+(r.centerY||1)),a).normalize():(s.y=Math.sin(-e.cam.pitch*.5)*.3,s.normalize()),e.proj.spawn({pos:a,dir:s,speed:i.speed,color:i.color,size:.32,owner:"player",stress:i.stress,splash:i.splash,life:i.life,homing:i.homing,target:r,stagger:i.stagger}),e.sfx.play("blast")},n.update=s=>{n.cd=Math.max(0,n.cd-s),n.active&&(n.t+=s,t.action.k=n.t/.3,n.t>.3&&(n.active=!1,t.action=null))},n.cancel=()=>{n.active=!1},n.busy=()=>n.active,n.cdFrac=()=>n.cd/i.cooldown,n},aura(i,t,e){const n={on:!1,t:0,mesh:Mv(i.color)};return e.scene.add(n.mesh),n.press=()=>{if(t.kit.strike.cancel(),t.kit.blast.cancel(),!(t.hitT>0&&!n.on)){if(t.chill<i.minCost){e.flashButton("field");return}n.on=!0,n.t=0,e.sfx.play("field"),e.popup("WHOOSH!",t.pos),e.fx.ring(t.pos,i.color,.5,i.radius,.4)}},n.release=()=>{n.on&&(n.on=!1,n.mesh.visible=!1,t.action=null)},n.update=(s,r)=>{if(!n.on)return;if(!r){n.release();return}if(n.t+=s,t.chill-=i.drain*s,e.panic=Math.max(0,e.panic-(i.panicPerSec||0)*s),t.chill<=0){t.chill=0,n.release();return}t.action={pose:i.pose,k:0};const a=i.radius*Math.min(1,n.t*5);n.mesh.visible=!0,n.mesh.position.copy(t.pos),n.mesh.userData.dome.scale.set(a,a*.6,a),n.mesh.userData.ring.scale.setScalar(a),n.mesh.userData.dome.material.opacity=.12+Math.sin(n.t*10)*.04;for(const o of e.targets())o.pos.distanceTo(t.pos)<a+o.radius&&o.fieldTick(i.stressPerSec*s,s)},n.cancel=n.release,n.busy=()=>n.on,n.blocks=()=>n.on&&i.blocksPulses,n},multiJump(i,t,e){return{press:()=>t.tryJump(),update(){},cancel(){},busy:()=>!1}},lockOn(i,t,e){return{press:()=>e.cycleLock(i.range),update(){},cancel(){},busy:()=>!1}}};function hi(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Sv(i,t,e){const n={};for(const[s,r]of Object.entries(i)){const a=yv[r.type];if(!a)throw new Error("Unknown ability type "+r.type);n[s]=a(r,t,e),n[s].cfg=r}return n}class bv{constructor(t,e){this.hero=t,this.game=e,this.st=t.stats,this.rig=t.model(),this.anim=new ms(this.rig),e.scene.add(this.rig.root),this.pos=new P,this.vel=new P,this.facing=Math.PI,this.radius=this.st.radius,this.height=this.st.height,this.grounded=!0,this.airJumps=this.st.airJumps,this.chill=this.st.startChill,this.action=null,this.hitT=0,this.invuln=0,this.t=0,this.lungeV=null,this.speedK=0,this.jumpCount=0,this.kit=Sv(t.kit,this,e);const n=new Ft(new Te(1.4,1.4).rotateX(-Math.PI/2),new pe({map:du(),transparent:!0,depthWrite:!1}));e.scene.add(n),this.shadow=n}get maxChill(){return this.st.maxChill}addChill(t){this.chill=Math.min(this.maxChill,this.chill+t)}busy(){const t=this.kit;return t.strike.busy()||t.blast.busy()||t.field.busy()||this.hitT>0}pushVel(t,e){this.lungeV=t.clone().multiplyScalar(e)}aimTarget(t){const e=this.game;if(e.lock&&!e.lock.calmed&&e.lock.pos.distanceTo(this.pos)<t)return e.lock;let n=null,s=1e9;for(const r of e.targets()){const a=r.pos.distanceTo(this.pos);if(a>t)continue;const o=Math.abs(hi(Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z),this.facing)),l=a+o*4;o<1.2&&l<s&&(s=l,n=r)}return n}faceTarget(){const t=this.aimTarget(wv());t&&(this.facing=Math.atan2(t.pos.x-this.pos.x,t.pos.z-this.pos.z))}tryJump(){this.hitT>0||(this.grounded?(this.vel.y=this.st.jumpV,this.grounded=!1,this.airJumps=this.st.airJumps,this.game.sfx.play("jump"),this.jumpCount++):this.airJumps>0&&(this.airJumps--,this.vel.y=this.st.airJumpV,this.game.sfx.play("jump"),this.game.fx.ring(this.pos,3800954,.2,1.6,.35,0),this.game.popup("WHOOSH!",this.pos),this.jumpCount++))}hurt(t,e,n=6){return this.invuln>0?!1:(this.game.addPanic(t),this.invuln=.7,this.hitT=.3,this.lastHurtT=this.t,this.kit.strike.cancel(),e&&(this.vel.x=e.x*n,this.vel.z=e.z*n),this.vel.y=Math.max(this.vel.y,3),this.grounded=!1,this.game.sfx.play("hit"),this.game.fx.burst(this.pos.clone().setY(this.pos.y+1.2),16722902,10,5,.5),this.game.shake(.3),!0)}update(t,e,n){const s=this.st,r=this.game,a=this.kit;this.t+=t,this.hitT=Math.max(0,this.hitT-t),this.invuln=Math.max(0,this.invuln-t);for(const R of["field"])e.released.has(R)&&a[R].release?.(!1);for(const R of["jump","strike","blast","field","lock"])e.pressed.has(R)&&a[R].press();for(const R of Object.keys(a))a[R].update(t,e.held[R]);const o=new P(-Math.sin(n),0,-Math.cos(n)),l=new P(Math.cos(n),0,-Math.sin(n)),c=o.multiplyScalar(e.move.y).addScaledVector(l,e.move.x),u=Math.min(1,c.length());let d=s.speed*u;a.field.busy()?d*=.45:(a.strike.busy()||a.blast.busy())&&(d*=.25),this.hitT>0&&(d=0);const h=u>.01?c.normalize().multiplyScalar(d):new P,f=(this.grounded?s.accel:s.accel*.45)*t;if(this.hitT<=0){const R=h.x-this.vel.x,S=h.z-this.vel.z,b=Math.hypot(R,S);b>f?(this.vel.x+=R/b*f,this.vel.z+=S/b*f):(this.vel.x=h.x,this.vel.z=h.z)}else this.vel.x*=1-4*t,this.vel.z*=1-4*t;this.lungeV&&(this.vel.x=this.lungeV.x,this.vel.z=this.lungeV.z,this.lungeV=null),u>.1&&!this.busy()&&(this.facing=Ev(this.facing,Math.atan2(c.x,c.z),1-Math.exp(-14*t))),r.lock&&(a.field.busy()||a.blast.busy())&&(this.facing=Math.atan2(r.lock.pos.x-this.pos.x,r.lock.pos.z-this.pos.z));const p=a.field.busy();this.vel.y-=s.gravity*t*(p&&this.vel.y<0?.25:1),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vel.y*t,r.col.resolve(this.pos,this.radius,this.height);const _=r.col.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.pos.y<=_?(this.pos.y=_,this.vel.y<0&&(this.vel.y=0),this.grounded||(this.grounded=!0,this.airJumps=s.airJumps)):this.pos.y>_+.05&&(this.grounded=!1),this.pos.y<-5&&(this.pos.copy(r.checkpointPos()),this.vel.set(0,0,0)),this.speedK=Math.hypot(this.vel.x,this.vel.z)/s.speed;const g=this.hitT>0||this.busy()?0:Math.min(1,this.speedK);g>.05&&this.addChill(s.moveChillPerSec*g*t);let m;this.hitT>0?m=Xt.hit(this.t,1-this.hitT/.3):this.action?m=Xt[this.action.pose](this.t,Math.min(1,this.action.k)):this.grounded?this.speedK>.08?m=Xt.run(this.t,Math.min(1,this.speedK)):m=Xt.idle(this.t):m=Xt.jump(this.t,this.vel.y),this.anim.apply(m,t,this.action?22:14),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.facing,this.shadow.position.set(this.pos.x,_+.03,this.pos.z),this.shadow.material.opacity=Math.max(.15,1-(this.pos.y-_)*.2);const M=a.field.busy()?.55:0;this.rig.aura.material.opacity+=(M-this.rig.aura.material.opacity)*Math.min(1,t*6),this.rig.emblemGlow.material.opacity=.12+this.chill/this.maxChill*.2+Math.sin(this.t*3)*.04,this.rig.root.visible=!(this.invuln>0&&Math.floor(this.t*20)%2===0&&this.hitT<=0)}}function wv(){return 5}function Ev(i,t,e){return i+hi(t,i)*e}const Ge={selfLit:.22},mu=["#e0b08c","#c68a62","#9a6643","#6e472e","#f1c9a5"],Tv=[3894952,11031867,9079354,5979018,3115651,10104650,7039856],Av=[2237754,3812898,1973794,2898474],Rv=[2759184,1118481,6965792,10123840,3811882],Ds=(i,t)=>i[Math.floor(t*i.length)%i.length];let $r=1;const ri=()=>($r=$r*16807%2147483647)/2147483647;function Cv(i){$r=1e3+i*77;const t=Ds(mu,ri()),e=$t(t,Ge),n=$t(Ds(Tv,ri())),s=$t(Ds(Av,ri())),r=$t(Ds(Rv,ri()));return aa({selfLit:Ge.selfLit,scale:.92+ri()*.12,bulk:.95+ri()*.15,colors:{torso:n,pelvis:s,shoulder:n,upperArm:n,glove:e,thigh:s,shin:s,boot:$t(1381658,Ge),skin:e,skinMat:e},head:{tex:Cl(t),scaleY:1.1},extras(o){Yt(new ye(o.headR*1.06,12,8,0,Math.PI*2,0,.45*Math.PI),r,0,.01,-.01,o.head),ri()>.5&&Yt(new ae(.3,.24,.1),$t(3355460,Ge),0,.1,-.17,o.j.chest)}})}function gu(i){$r=5e3+i*31;const t=Ds(mu,ri()),e=$t(t,Ge),n=$t(1446428,Ge),s=$t(1776420,Ge),r=He(16722902);return aa({selfLit:Ge.selfLit,scale:1.02,bulk:1.15,colors:{torso:n,pelvis:s,shoulder:n,upperArm:n,glove:$t(2236962,Ge),thigh:s,shin:s,boot:$t(789518,Ge),skin:e,skinMat:e},head:{tex:Cl(t),scaleY:1.1},extras(o){Yt(new ye(o.headR*1.18,12,10,Math.PI-1.2,Math.PI+2.4,0,.7*Math.PI),n,0,0,-.01,o.head);const l=Yt(new ae(.2,.035,.05),r,0,.012,.125,o.head);for(const c of[-1,1])Yt(new ae(.02,.3,.02),r,c*.12,.12,.15,o.j.chest);Yt(new ae(.4,.02,.02),r,0,-.02,.16,o.j.chest),o.visor=l}})}function Pv(i){const t=gu(i+900),e=He(2287359);for(const r of[-1,1])Yt(new ae(.03,.03,.3),e,r*.2,.2,0,t.j.chest);Yt(new Ui(.12,.012,6,16),e,0,.3,0,t.head).rotation.x=Math.PI/2;const n=Yt(new ia(.09,1),He(16722902),0,-.12,.06,t.j.handR),s=tn(16722902,.55,.7);return n.add(s),t.orb=n,t}function Lv(){const i=$t(8015924,Ge),t=$t(1709088,Ge),e=$t(1380890,Ge),n=He(16722902),s=$t(3024440,Ge),r=aa({selfLit:Ge.selfLit,scale:1.9,bulk:1.45,colors:{torso:t,pelvis:e,shoulder:s,upperArm:t,glove:s,thigh:e,shin:s,boot:$t(657932,Ge),skin:i,skinMat:i},head:{tex:Cl("#7a5034"),scaleY:1.05},extras(o){for(const l of[-1,1]){const c=Yt(new ae(.26,.12,.26),s,0,.08,0,o.j["arm"+(l>0?"L":"R")]);c.rotation.z=l*.35,Yt(new ae(.2,.03,.03),n,0,.14,.12,o.j["arm"+(l>0?"L":"R")]),Yt(new ye(.1,8,6),s,0,-.07,.01,o.j["hand"+(l>0?"L":"R")]).scale.set(1,1.1,1),Yt(new ye(.03,6,4),n,0,-.12,.08,o.j["hand"+(l>0?"L":"R")])}o.visor=Yt(new ae(.24,.045,.06),n,0,.015,.12,o.head),Yt(new ae(.34,.28,.06),s,0,.14,.15,o.j.chest),Yt(new Ui(.07,.015,6,16),n,0,.15,.185,o.j.chest),Yt(new ye(o.headR*1.04,10,8,0,Math.PI*2,0,.35*Math.PI),$t(1118481,Ge),0,.01,0,o.head)}}),a=tn(16722902,5,.18);return a.position.y=2.2,r.root.add(a),r.aura=a,r}function Iv(){const i=new Fe,t=new Fe;i.add(t),Yt(new yl(.45,0),$t(2366510,{flatShading:!0,selfLit:.2}),0,0,0,t).scale.set(1,.7,1);const n=Yt(new Ui(.62,.05,6,20),He(16722902),0,0,0,t);n.rotation.x=Math.PI/2;const s=Yt(new ye(.14,10,8),He(16722902),0,0,.36,t);for(const a of[-1,1]){const o=Yt(new ae(.5,.04,.16),$t(3813444,Ge),a*.62,.1,0,t);o.rotation.z=a*.3}const r=tn(16722902,1.6,.5);return t.add(r),{root:i,body:t,ring:n,eye:s,glow:r,isDrone:!0}}const Cn={selfLit:.28},xh=`
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
}`,Dv=`
vec3 suitColor(vec3 p){
  vec3 J = vec3(0.03,0.025,0.035); vec3 M = vec3(1.0,0.12,0.75);
  return J;
}
vec3 suitGlow(vec3 p){ float l = 1.0 - smoothstep(0.0,0.008, abs(p.x + p.y*0.15)); return l*vec3(1.0,0.12,0.75)*0.9; }`;function Uv(i=1.18){const t=$t(9066038,Cn),e=$t(1182996,Cn),n=$t(1710112,Cn),s=$t(657932,Cn),r=$t(1839128,Cn),a=$t(2762032,Cn),o=He(16722902),l=ja(Dv,Cn),c=aa({selfLit:Cn.selfLit,scale:i,bulk:1.12,colors:{torso:ja(xh,Cn),pelvis:n,shoulder:l,neck:t,upperArm:l,glove:t,thigh:n,shin:n,boot:s,skin:t,skinMat:t},head:{tex:Qx(),scaleY:1.1},extras(d){const{j:h,head:f,headR:p,parts:_}=d;_.abdomen.material=ja(xh,Cn);for(const M of[-1,1])Yt(new ae(.12,.13,.02),e,M*.11,.33,.02,h.chest).rotation.set(-.2,M*.5,M*.3);h.foreL.children[0].material=l;for(let M=0;M<4;M++)Yt(new Je(.07-M*.003,.068-M*.003,.055,10),a,0,-.04-M*.06,0,h.foreR);h.foreR.children[0].material=a,h.handR.children.forEach(M=>M.material=a),d.knuckles=[];for(let M=0;M<3;M++){const R=Yt(new ye(.014,6,4),o,-.03+M*.03,-.1,.03,h.handR);d.knuckles.push(R)}const g=tn(16722902,.5,.7);g.position.set(0,-.08,.04),h.handR.add(g),d.handGlow=g;for(const M of[-1,1]){const R=new Ft(new ye(.02,8,6),o);R.position.copy(Ko(p*.99,.47*Math.PI,M*.36)),R.scale.set(1.2,.6,.5),f.add(R);const S=tn(16726745,.1,.9);S.position.copy(R.position).multiplyScalar(1.04),f.add(S)}Yt(new ye(p*1.05,16,8,0,Math.PI*2,0,.36*Math.PI),r,0,.005,-.01,f),Yt(new ye(p*1.06,16,8,Math.PI-.4,Math.PI+.8,0,.6*Math.PI),r,0,0,-.01,f);const m=He(13639600);for(let M=0;M<16;M++){const R=.05+M%3*.12+Math.random()*.05,S=M/16*Math.PI*2,b=new P(Math.cos(S)*Math.sin(R*Math.PI),Math.cos(R*Math.PI),Math.sin(S)*Math.sin(R*Math.PI)).multiplyScalar(p);if(b.z>.06&&b.y<p*.8)continue;const w=.1+Math.random()*.05,C=new Fe;C.position.copy(b),f.add(C),C.quaternion.setFromUnitVectors(new P(0,1,0),b.clone().normalize().add(new P(0,.6,-.25)).normalize()),Yt(new fi(.04,w,5),r,0,w/2,0,C),Yt(new fi(.018,w*.38,5),m,0,w*.86,0,C)}}}),u=tn(16722902,3.2,.25);return u.position.y=1.2*i,c.root.add(u),c.aura=u,c}const Me=new P,pi={chase:60,homeRadius:70,returnSpeed:1.6,droneHome:100,hotspotReset:120},Pl={caster:{tele:.75,cdMin:2.4,cdMax:3.2,speed:15,panic:6,spread:.025,range:24},drone:{tele:.45,cdMin:2.2,cdMax:3.2,speed:13,panic:6,spread:.08,range:24}},Nv=new P(0,1,0),Ks={follow:75,giveUp:115};function xu(i,t){const e=i.game.col.bounds,n=3;i.pos.x=Math.min(e.maxX-n,Math.max(e.minX+n,i.pos.x)),i.pos.z=Math.min(e.maxZ-n,Math.max(e.minZ+n,i.pos.z)),(i.pos.y<-3||i.pos.y>30)&&(i.pos.copy(i.arena).setY(0),i.vel.set(0,0,0));const s=i.game,r=Math.hypot(i.pos.x-i.arena.x,i.pos.z-i.arena.z);if(s.stats.bossMaxOut=Math.max(s.stats.bossMaxOut||0,+r.toFixed(1)),i._stT=(i._stT||0)+t,i._stP||(i._stP=i.pos.clone()),i._stT>1.5){const a=i._stP.distanceTo(i.pos);i.wantMove&&a<.6&&(i.sidestep=1,i.sideSign=-(i.sideSign||1),s.stats.bossUnstuck=(s.stats.bossUnstuck||0)+1),i._stT=0,i._stP.copy(i.pos)}i.sidestep=Math.max(0,(i.sidestep||0)-t)}function $o(i,t){if(!(i.sidestep>0))return t;const e=t.clone().sub(i.pos).setY(0).normalize();return i.pos.clone().add(new P(e.z*i.sideSign,0,-e.x*i.sideSign).multiplyScalar(6)).addScaledVector(e,2)}function vu(i,t,e){const n=i.col.bounds;return t>n.minX+3&&t<n.maxX-3&&e>n.minZ+3&&e<n.maxZ-3&&i.col.groundAt(t,e,.8,20)<.3}function _u(i,t,e,n,s){const r=e.clone().sub(t).normalize().applyAxisAngle(Nv,(Math.random()-.5)*2*n.spread);i.proj.spawn({pos:t,dir:r,speed:n.speed,color:16722902,size:.26,owner:"enemy",panic:i.boss?4:n.panic,life:2.6,src:s}),i.stats.boltsFired=(i.stats.boltsFired||0)+1,i.sfx.play("hype")}function Mu(i,t){return t<pi.chase&&i.pos.distanceTo(i.home)<pi.homeRadius}let Fv=0;function Ov(){const i=new Fe,t=(s,r)=>new ta(new $s({color:s,transparent:!0,opacity:r,depthTest:!1,toneMapped:!1})),e=t(1050648,.7);e.scale.set(1,.12,1);const n=t(16722902,1);return n.center.set(0,.5),n.position.x=-.48,n.scale.set(.96,.08,1),e.renderOrder=n.renderOrder=10,i.add(e,n),i.userData.fill=n,i}class vi{constructor(t,e,n,s={}){this.game=t,this.kind=e,this.id=++Fv,this.pos=n.clone(),this.vel=new P,this.home=n.clone(),this.radius=.45,this.height=1.8,this.centerY=1,this.facing=Math.random()*6.28,this.t=Math.random()*10,this.seed=Math.random()*10,this.calmed=!1,this.calmT=0,this.stun=0,this.stagger=0,this.cd=1+Math.random(),this.state="idle",this.stateT=0,this.boss=!1,this.removed=!1,this.hotspot=s.hotspot||null,this.grounded=!0,this.flying=!1}attach(t){if(this.root=t,this.game.scene.add(t),this.boss||(this.bar=Ov(),this.bar.position.y=this.height*(this.barY||1.15),t.add(this.bar)),this.calmGlow=tn(3800954,this.height*1.6,0),this.calmGlow.position.y=this.height*.5,t.add(this.calmGlow),this.stressGlow=tn(16722902,this.height*1.2,.18),this.stressGlow.position.y=this.height*.55,t.add(this.stressGlow),!this.flying){const e=new Ft(new Te(1,1).rotateX(-Math.PI/2),new pe({map:du(),transparent:!0,depthWrite:!1}));e.scale.setScalar(this.radius*3.2),e.position.y=.04,t.add(e)}}get stressK(){return this.stress/this.maxStress}calmHit(t,e={}){if(this.calmed||this.invuln>0)return;const n=this.dazed>0?1.6:1;this.stress=Math.max(0,this.stress-t*n*(this.resist||1)),this.flashT=.12,e.stagger&&!this.boss&&(this.stagger=Math.max(this.stagger,e.stagger),this.state==="windup"&&this.setState("idle")),e.knock&&e.dir&&!this.boss&&(this.vel.x+=e.dir.x*e.knock,this.vel.z+=e.dir.z*e.knock),e.dir&&this.boss&&(this.bossHitDir=e.dir),this.onHit?.(t,e),this.stress<=0&&this.becomeCalm()}fieldTick(t,e){this.calmed||(this.calmHit(t*(this.boss?.6:1),{}),this.boss?this.stun=Math.max(this.stun,this.stunResistT?0:.2):this.stun=Math.max(this.stun,.35))}becomeCalm(){if(this.calmed)return;this.calmed=!0,this.calmT=0,this.state="calm";const t=this.game;t.onCalmed(this),t.fx.burst(this.pos.clone().setY(this.pos.y+this.centerY),3800954,22,5,.7,.9,4),t.fx.ring(this.pos,3800954,.2,3,.6),t.popup("WHOOSH!",this.pos.clone().setY(this.pos.y+this.height),!0),t.sfx.play("calm"),this.bar&&(this.bar.visible=!1),this.stressGlow.visible=!1}setState(t){this.state=t,this.stateT=0}moveToward(t,e,n,s=30){Me.subVectors(t,this.pos).setY(0);const r=Me.length();if(r<.05)return r;Me.multiplyScalar(e/r);const a=Me.x-this.vel.x,o=Me.z-this.vel.z,l=Math.hypot(a,o),c=s*n;return l>c?(this.vel.x+=a/l*c,this.vel.z+=o/l*c):(this.vel.x=Me.x,this.vel.z=Me.z),this.facing=vh(this.facing,Math.atan2(Me.x,Me.z),1-Math.exp(-10*n)),r}physics(t,e=8){if(this.flying){this.pos.addScaledVector(this.vel,t);return}this.vel.y-=30*t,this.pos.addScaledVector(this.vel,t);const n=this.game.col.resolve(this.pos,this.radius,this.height),s=this.game.col.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y);return this.pos.y<=s?(this.pos.y=s,this.vel.y=0,this.grounded=!0):this.grounded=!1,n}damp(t,e=8){this.vel.x*=Math.exp(-e*t),this.vel.z*=Math.exp(-e*t)}faceDir(t,e,n=10){this.facing=vh(this.facing,Math.atan2(t.x-this.pos.x,t.z-this.pos.z),1-Math.exp(-n*e))}commonUpdate(t){if(this.t+=t,this.stateT+=t,this.stun=Math.max(0,this.stun-t),this.stagger=Math.max(0,this.stagger-t),this.cd-=t,this.flashT=Math.max(0,(this.flashT||0)-t),this.invuln=Math.max(0,(this.invuln||0)-t),this.dazed=Math.max(0,(this.dazed||0)-t),this.bar){const e=this.bar.userData.fill;e.scale.x=.96*this.stressK,e.material.color.setHSL(.86-(1-this.stressK)*.5,1,.55),this.bar.visible=!this.calmed&&this.pos.distanceTo(this.game.player.pos)<30}this.calmed?(this.calmT+=t,this.calmGlow.material.opacity=Math.max(.15,.6-this.calmT*.1)):(this.stressGlow.material.opacity=.1+this.stressK*.25+(this.flashT>0?.5:0),this.stressGlow.material.color.set(this.flashT>0?10354586:16722902))}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing}playerInFront(t,e=1.2){const n=this.game.player;Me.subVectors(n.pos,this.pos);const s=Math.abs(Me.y);return Me.y=0,Me.length()<t&&s<1.6&&Math.abs(hi(Math.atan2(Me.x,Me.z),this.facing))<e}remove(){this.removed||(this.removed=!0,this.game.scene.remove(this.root))}}const vh=(i,t,e)=>i+hi(t,i)*e;class yu extends vi{constructor(t,e,n){super(t,"citizen",e,n),this.maxStress=this.stress=40,this.rig=Cv(this.id),this.anim=new ms(this.rig),this.attach(this.rig.root),this.wander=e.clone(),this.sync()}update(t){this.commonUpdate(t);const e=this.game.player;let n;this.calmed?(this.damp(t),this.physics(t),n=Xt.sit(this.t)):this.stun>0||this.stagger>0?(this.damp(t),this.physics(t),n=Xt.dazed(this.t)):this.state==="windup"?(this.damp(t),this.physics(t),this.faceDir(e.pos,t),n=Xt.windup(this.t,this.stateT),this.stateT>.55&&(this.playerInFront(2.4)&&e.hurt(6,e.pos.clone().sub(this.pos).setY(0).normalize(),6),this.setState("recover"),this.cd=2.2)):this.state==="recover"?(this.damp(t),this.physics(t),n=Xt.punch(this.t,1),this.stateT>.35&&this.setState("idle")):e.pos.distanceTo(this.pos)<2.2&&this.cd<=0?(this.setState("windup"),n=Xt.windup(this.t,0)):((this.wander.distanceTo(this.pos)<1||this.stateT>3)&&(this.wander.set(this.home.x+(Math.random()-.5)*14,0,this.home.z+(Math.random()-.5)*14),this.stateT=0),Math.sin(this.t*.9+this.seed)>-.3?(this.moveToward(this.wander,4.2,t),n=Xt.run(this.t,.7)):(this.damp(t),this.faceDir(e.pos,t,4),n=Xt.stressed(this.t,0,this.seed)),this.physics(t)),this.anim.apply(n,t),this.sync()}}class Su extends vi{constructor(t,e,n){super(t,"goon",e,n),this.maxStress=this.stress=75,this.rig=gu(this.id),this.anim=new ms(this.rig),this.attach(this.rig.root),this.sync()}update(t){this.commonUpdate(t);const e=this.game.player;let n;if(this.calmed)this.calmT<4?(Me.subVectors(this.pos,e.pos).setY(0).normalize().multiplyScalar(5).add(this.pos),this.moveToward(Me.clone(),2.2,t),n=Xt.run(this.t*.6,.25)):(this.damp(t),n=Xt.sit(this.t)),this.physics(t),this.rig.visor&&this.rig.visor.material.color.set(3800954);else if(this.stun>0||this.stagger>0)this.damp(t),this.physics(t),n=Xt.dazed(this.t);else if(this.state==="windup")this.damp(t),this.physics(t),this.faceDir(e.pos,t,6),n=Xt.windup(this.t,this.stateT),this.stressGlow.material.opacity=.6,this.stateT>.6&&(this.playerInFront(2.6)&&e.hurt(11,e.pos.clone().sub(this.pos).setY(0).normalize(),8),this.setState("recover"),this.cd=1.5);else if(this.state==="recover")this.damp(t),this.physics(t),n=Xt.punch(this.t,1),this.stateT>.45&&this.setState("idle");else{const s=e.pos.distanceTo(this.pos);s<2.2&&this.cd<=0?(this.setState("windup"),n=Xt.windup(this.t,0),this.physics(t)):!this.returning&&Mu(this,s)?(s>1.8?this.moveToward(e.pos,5.2,t):(this.damp(t),this.faceDir(e.pos,t)),n=this.vel.length()>.5?Xt.run(this.t,.8):Xt.stressed(this.t,0,this.seed),this.physics(t)):(this.returning=this.pos.distanceTo(this.home)>4,this.moveToward(this.home,pi.returnSpeed,t),n=Xt.run(this.t*.6,.3),this.physics(t),s<12&&(this.returning=!1))}this.anim.apply(n,t),this.sync()}}class Ll extends vi{constructor(t,e,n){super(t,"drone",e,n),this.flying=!0,this.maxStress=this.stress=45,this.radius=.7,this.height=1.2,this.centerY=0,this.barY=1.1,this.reachY=3.2,this.m=Iv(),this.attach(this.m.root),this.calmGlow.position.y=0,this.stressGlow.position.y=0,this.hoverY=e.y,this.orbitA=Math.random()*6.28,this.cd=1.5+Math.random()*1.5,this.sync()}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;if(this.calmed){const s=n.col.groundAt(this.pos.x,this.pos.z,.5,this.pos.y)+.5;this.pos.y=Math.max(s,this.pos.y-t*1.5),this.vel.multiplyScalar(Math.exp(-3*t)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.m.ring.material.color.set(3800954),this.m.eye.material.color.set(3800954),this.m.glow.material.color.set(3800954),this.m.body.rotation.y+=t*.5}else if(this.stun>0||this.stagger>0)this.aimT=0,this.m.eye.scale.setScalar(1),this.vel.multiplyScalar(Math.exp(-4*t)),this.pos.addScaledVector(this.vel,t),this.m.body.rotation.z=Math.sin(this.t*12)*.3;else{this.orbitA+=t*.6;const s=9,r=e.pos.x+Math.cos(this.orbitA)*s,a=e.pos.z+Math.sin(this.orbitA)*s,o=e.pos.distanceTo(this.home),l=o<pi.droneHome?new P(r,Math.max(e.pos.y+3.2,this.hoverY-2),a):this.home.clone();Me.subVectors(l,this.pos);const c=Math.min(o<pi.droneHome?6:2.5,Me.length()*2);Me.normalize().multiplyScalar(c),this.vel.lerp(Me,1-Math.exp(-2*t)),this.pos.addScaledVector(this.vel,t),this.facing=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z),this.m.body.rotation.z=Math.sin(this.t*2)*.1;const u=Pl.drone;if(this.aimT>0){this.aimT-=t;const d=1-this.aimT/u.tele;this.m.eye.scale.setScalar(1+d*1.2),this.m.glow.scale.setScalar(1.6*(1+d)),this.aimT<=0&&(this.m.eye.scale.setScalar(1),this.m.glow.scale.setScalar(1.6),_u(n,this.pos.clone(),e.pos.clone().setY(e.pos.y+1),u,this),this.cd=u.cdMin+Math.random()*(u.cdMax-u.cdMin))}else this.cd<=0&&this.pos.distanceTo(e.pos)<u.range&&(this.aimT=u.tele,this.telegraphs=(this.telegraphs||0)+1,n.stats.telegraphs=(n.stats.telegraphs||0)+1)}this.m.body.position.y=Math.sin(this.t*3)*.12,this.m.ring.rotation.z+=t*3,n.col.resolve(this.pos,.5,.6),this.sync()}}class Il extends vi{constructor(t,e,n){super(t,"caster",e,n),this.maxStress=this.stress=55,this.rig=Pv(this.id),this.anim=new ms(this.rig),this.attach(this.rig.root),this.cd=1.5+Math.random()*1.5,this.strafe=Math.random()<.5?1:-1,this.aimLine=new Ft(new Te(.18,1).translate(0,.5,0).rotateX(-Math.PI/2),new pe({color:16722902,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1,blending:Pe})),this.aimLine.visible=!1,t.scene.add(this.aimLine),this.aimAt=new P,this.sync()}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos),a=Pl.caster,o=this.rig.orb;if(this.aimLine.visible=!1,this.calmed)o.material.color.set(3800954),o.scale.setScalar(.6),this.rig.visor&&this.rig.visor.material.color.set(3800954),this.calmT<4?(Me.subVectors(this.pos,e.pos).setY(0).normalize().multiplyScalar(5).add(this.pos),this.moveToward(Me.clone(),2.2,t),s=Xt.run(this.t*.6,.25)):(this.damp(t),s=Xt.sit(this.t)),this.physics(t);else if(this.stun>0||this.stagger>0)this.state==="aim"&&this.setState("idle"),this.damp(t),this.physics(t),s=Xt.dazed(this.t),o.scale.setScalar(1);else if(this.state==="aim"){this.damp(t),this.physics(t),this.faceDir(e.pos,t,8);const l=this.stateT/a.tele;s=Xt.hype(this.t,Math.min(.29,l*.3)),this.stateT<a.tele-.15&&this.aimAt.copy(e.pos).setY(e.pos.y+1),o.scale.setScalar(1+l*1.4),this.stressGlow.material.opacity=.3+l*.5;const c=Math.min(a.range,this.pos.distanceTo(this.aimAt));if(this.aimLine.visible=!0,this.aimLine.position.copy(this.pos).setY(this.pos.y+.06),this.aimLine.rotation.y=Math.atan2(this.aimAt.x-this.pos.x,this.aimAt.z-this.pos.z),this.aimLine.scale.set(1,1,c),this.aimLine.material.opacity=.25+.35*Math.abs(Math.sin(this.stateT*18)),this.stateT>=a.tele){const u=this.pos.clone().add(new P(Math.sin(this.facing)*.5,1.45,Math.cos(this.facing)*.5));_u(n,u,this.aimAt,a,this),o.scale.setScalar(1),this.setState("recover"),this.cd=a.cdMin+Math.random()*(a.cdMax-a.cdMin)}}else if(this.state==="recover")this.damp(t),this.physics(t),s=Xt.hype(this.t,.5),this.stateT>.4&&this.setState("idle");else{o.scale.setScalar(1+Math.sin(this.t*6)*.08);const l=()=>n.col.raycast(this.pos.x,this.pos.y+1.5,this.pos.z,e.pos.x,e.pos.y+1,e.pos.z)>=1;if(!this.returning&&Mu(this,r))if(this.cd<=0&&r<a.range&&r>3&&l())this.setState("aim"),this.aimAt.copy(e.pos).setY(e.pos.y+1),n.stats.telegraphs=(n.stats.telegraphs||0)+1,s=Xt.hype(this.t,0),this.physics(t);else{Me.subVectors(e.pos,this.pos).setY(0).normalize();const c=new P(Me.z,0,-Me.x).multiplyScalar(this.strafe);let u;r>13?u=e.pos:r<6?u=this.pos.clone().addScaledVector(Me,-4):u=this.pos.clone().addScaledVector(c,3),Math.random()<t*.3&&(this.strafe*=-1),this.moveToward(u,r<6?4.4:3.6,t),this.faceDir(e.pos,t,6),this.physics(t),s=this.vel.length()>.5?Xt.run(this.t,.6):Xt.stressed(this.t,0,this.seed)}else this.returning=this.pos.distanceTo(this.home)>4,this.moveToward(this.home,pi.returnSpeed,t),this.physics(t),s=Xt.run(this.t*.6,.3),r<12&&(this.returning=!1)}this.anim.apply(s,t),this.sync()}remove(){super.remove(),this.game.scene.remove(this.aimLine)}}class bu extends vi{constructor(t,e,n){super(t,"enforcer",e),this.boss=!0,this.name="AMP ENFORCER",this.maxStress=this.stress=700,this.radius=1.1,this.height=3.4,this.centerY=1.9,this.reachY=2.6,this.arena=n,this.resist=1,this.rig=Lv(),this.anim=new ms(this.rig),this.attach(this.rig.root),this.cd=2,this.chargeDir=new P,this.sync(),this.tele=new Ft(new Te(2.2,1).translate(0,.5,0).rotateX(-Math.PI/2),new pe({color:16722902,transparent:!0,opacity:.35,depthWrite:!1,toneMapped:!1})),this.tele.visible=!1,t.scene.add(this.tele),this.slams=0}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos);if(this.calmed)this.damp(t),this.physics(t),s=Xt.sit(this.t),this.tele.visible=!1,this.rig.visor&&this.rig.visor.material.color.set(3800954),this.rig.aura.material.color.set(3800954);else if(this.dazed>0)this.damp(t,4),this.physics(t),s=Xt.dazed(this.t),Math.random()<t*6&&n.fx.burst(this.pos.clone().setY(3.6),2287359,1,1.5,.5,.6,2);else if(this.state==="tele")this.damp(t),this.physics(t),this.faceDir(e.pos,t,4),this.chargeDir.set(Math.sin(this.facing),0,Math.cos(this.facing)),s=Xt.windup(this.t,this.stateT),this.tele.visible=!0,this.tele.position.copy(this.pos).setY(.25),this.tele.rotation.y=this.facing,this.tele.scale.set(1,1,22),this.tele.material.opacity=.2+Math.sin(this.stateT*20)*.15,this.stateT>.9&&(this.setState("charge"),n.sfx.play("charge"),this.tele.visible=!1);else if(this.state==="charge"){this.vel.x=this.chargeDir.x*22,this.vel.z=this.chargeDir.z*22,s=Xt.charge(this.t,0);const a=this.physics(t);r<this.radius+e.radius+.4&&e.hurt(16,this.chargeDir.clone(),14),(a||this.stateT>1.3)&&(this.vel.set(0,0,0),a?(this.dazed=2.6,n.shake(.5),n.sfx.play("slam"),n.showToast("DAZED! CALM HIM!")):(this.dazed=1.1,n.showToast("WINDED!",.8)),this.setState("idle"),this.cd=1.4),Math.random()<t*20&&n.fx.burst(this.pos.clone().setY(.3),16722902,1,2,.6)}else if(this.state==="slam"){if(this.damp(t),this.physics(t),s=Xt.slam(this.t,this.stateT/.9),this.stateT>.55&&!this.slamDone){this.slamDone=!0,n.sfx.play("slam"),n.shake(.4);const a=this.pos.clone().addScaledVector(new P(Math.sin(this.facing),0,Math.cos(this.facing)),1.5);n.fx.ring(a,16722902,.5,5,.5),e.pos.distanceTo(a)<5&&e.pos.y-a.y<1.2&&!n.player.kit.field.blocks()&&e.hurt(14,e.pos.clone().sub(a).setY(0).normalize(),10)}this.stateT>.95&&(this.setState("idle"),this.cd=1.2)}else this.tele.visible=!1,this.wantMove=!1,Math.hypot(e.pos.x-this.arena.x,e.pos.z-this.arena.z)>Ks.follow?(this.wantMove=!0,this.moveToward($o(this,this.arena),3.2,t,10),this.physics(t),s=Xt.run(this.t*.6,.4)):this.cd<=0&&r<4.5?(this.setState("slam"),this.slamDone=!1,s=Xt.slam(this.t,0),this.physics(t)):this.cd<=0&&r>6&&r<30?(this.setState("tele"),s=Xt.windup(this.t,0),this.physics(t)):(r>3?(this.wantMove=!0,this.moveToward($o(this,e.pos),4.6,t,10)):(this.damp(t),this.faceDir(e.pos,t)),this.physics(t),s=this.vel.length()>.5?Xt.run(this.t*.7,.5):Xt.taunt(this.t));if(!this.calledBackup&&!this.calmed&&this.stressK<.5){this.calledBackup=!0,n.showToast("HE CALLED HYPE CASTERS!");for(const a of[.6,2.6]){let o=this.pos.x+Math.cos(a)*10,l=this.pos.z+Math.sin(a)*10;vu(n,o,l)||(o=this.pos.x,l=this.pos.z),n.addEnemy(new Il(n,new P(o,0,l),{}))}}xu(this,t),this.anim.apply(s,t,12),this.sync()}remove(){super.remove(),this.game.scene.remove(this.tele)}}class wu extends vi{constructor(t,e,n){super(t,"amp",e),this.boss=!0,this.name="THE AMP",this.maxStress=this.stress=1200,this.radius=.7,this.height=2.2,this.centerY=1.3,this.reachY=2.4,this.arena=n,this.rig=Uv(),this.anim=new ms(this.rig),this.attach(this.rig.root),this.phase=1,this.cd=2,this.pulseCd=4,this.summonCd=0,this.strafeA=0,this.closeT=0,this.volley=0,this.sync()}onHit(){this.state==="overdrive"&&this.game.player.pos.distanceTo(this.pos)<3}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos),a=this.stressK,o=a>.66?1:a>.33?2:3;if(o!==this.phase&&!this.calmed&&(this.phase=o,this.invuln=1.2,this.setState("taunt"),n.showToast(o===2?"PHASE 2: OVERDRIVE!":"PHASE 3: DRONE SWARM!"),n.sfx.play("pulse"),n.flash(),o===3&&this.summon(2),this.pulseCd=2.5),this.calmed){this.damp(t),this.physics(t),s=Xt.sit(this.t),this.rig.aura.material.color.set(3800954),this.rig.handGlow.material.color.set(3800954);for(const l of this.rig.knuckles)l.material.color.set(3800954)}else if(this.stagger>0&&this.state!=="overdrive")this.damp(t),this.physics(t),s=Xt.hit(this.t,.5);else if(this.state==="taunt")this.damp(t),this.physics(t),this.faceDir(e.pos,t),s=Xt.taunt(this.t),this.stateT>1.2&&this.setState("idle");else if(this.state==="hype")this.damp(t),this.physics(t),this.faceDir(e.pos,t,8),s=Xt.hype(this.t,this.stateT/.5),this.stateT>.35&&this.volley>0&&(this.volley--,this.stateT=.2,this.fireHype()),this.volley<=0&&this.stateT>.5&&(this.setState("idle"),this.cd=o===1?1.6:2);else if(this.state==="overdrive")this.damp(t),this.physics(t),s=Xt.overdrive(this.t),this.rig.aura.material.opacity=.3+this.stateT*.5,this.stateT>1&&(this.rig.aura.material.opacity=.25,n.spawnPulse(this.pos,o===3?16:13),this.setState("idle"),this.cd=1,this.pulseCd=o===3?5.2:6.5,o===3&&Math.random()<.25&&(this.doublePulse=.9));else if(this.state==="blink"){if(s=Xt.taunt(this.t),this.rig.root.visible=this.stateT>.25,this.stateT>.25&&!this.blinked){this.blinked=!0;for(let l=0;l<10;l++){const c=Math.random()*6.28,u=e.pos.x+Math.cos(c)*11,d=e.pos.z+Math.sin(c)*11;if(vu(n,u,d)){this.pos.set(u,0,d);break}}n.fx.burst(this.pos.clone().setY(1.2),16722902,16,5,.6)}this.stateT>.5&&(this.rig.root.visible=!0,this.setState("idle"),this.cd=.6)}else{this.pulseCd-=t,this.summonCd-=t,this.doublePulse&&(this.doublePulse-=t,this.doublePulse<=0&&(this.doublePulse=0,n.spawnPulse(this.pos,16))),this.closeT=r<3?this.closeT+t:Math.max(0,this.closeT-t),this.closeT>2.6?(this.closeT=0,this.blinked=!1,this.setState("blink"),n.fx.burst(this.pos.clone().setY(1.2),16722902,16,5,.6),n.sfx.play("hype")):o>=2&&this.pulseCd<=0?(this.setState("overdrive"),n.sfx.play("charge"),n.showToast("OVERDRIVE PULSE! JUMP or CALM FIELD!",1.2)):o===3&&this.summonCd<=0&&n.enemies.filter(h=>h.kind==="drone"&&!h.calmed).length<2?this.summon(2):this.cd<=0&&r<34&&(this.setState("hype"),this.volley=o===1?3:4,this.fireHype()),this.strafeA+=t*.35*(o===3?1.5:1);const l=10;this.wantMove=!0;const c=Math.hypot(e.pos.x-this.arena.x,e.pos.z-this.arena.z),u=c>Ks.follow?this.arena:e.pos,d=new P(u.x+Math.cos(this.strafeA)*l,0,u.z+Math.sin(this.strafeA)*l);this.moveToward($o(this,d),c>Ks.follow?3.5:5.2,t,12),this.faceDir(e.pos,t,8),this.physics(t),s=Xt.run(this.t*.6,.35)}xu(this,t),this.rig.handGlow.scale.setScalar(.5+Math.sin(this.t*8)*.1),this.anim.apply(s,t,14),this.sync()}fireHype(){const t=this.game,e=t.player,n=this.pos.clone().add(new P(Math.sin(this.facing)*.8,1.6,Math.cos(this.facing)*.8)),s=e.pos.clone().setY(e.pos.y+1).sub(n).normalize(),r=this.phase===1?0:(Math.random()-.5)*.3,a=s.applyAxisAngle(new P(0,1,0),r);t.proj.spawn({pos:n,dir:a,speed:14,color:16722902,size:.38,owner:"enemy",panic:4,life:2.6}),t.sfx.play("hype")}summon(t){this.summonCd=16;const e=this.game;for(let n=0;n<t;n++){const s=Math.random()*6.28;e.addEnemy(new Ll(e,new P(this.pos.x+Math.cos(s)*4,5,this.pos.z+Math.sin(s)*4),{}))}e.fx.burst(this.pos.clone().setY(2),16722902,20,6,.7)}}class Eu extends vi{constructor(t,e){super(t,"core",e.group.position.clone()),this.boss=!0,this.name="AMP TOWER CORE",this.maxStress=this.stress=160,this.radius=1.6,this.height=3.6,this.centerY=2.6,this.reachY=3.2,this.obj=e,this.root=new Fe,this.root.position.copy(this.pos),t.scene.add(this.root),this.calmGlow=tn(3800954,1,0),this.stressGlow=tn(16722902,1,0),this.root.add(this.calmGlow,this.stressGlow)}update(t){this.commonUpdate(t),this.obj.orb.scale.setScalar(1+(this.flashT>0?.15:0)+Math.sin(this.t*6)*.04),this.game.city.setTowerCalm(1-this.stressK)}}const zv=Object.freeze(Object.defineProperty({__proto__:null,Amp:wu,BOLT:Pl,BOSS_LEASH:Ks,Caster:Il,Citizen:yu,Drone:Ll,Enemy:vi,Enforcer:bu,Goon:Su,LEASH:pi,TowerCore:Eu},Symbol.toStringTag,{value:"Module"})),Ai={torso:0,neck:1,arm:2,hand:3,leg:4,foot:5},Us=.252,Br=.095,_h=1.04,Ir=.72,Mh=i=>i>=1.26?i:1.26-(1.26-i)*.837,ro=i=>.05+(i-.05)*(.95/.89);function Bv(i,t,e,n,s){const r=s*s,a=r*s;return .5*(2*t+(-i+e)*s+(2*i-5*t+4*e-n)*r+(-i+3*t-3*e+n)*a)}function Ns(i,t){let e=0;for(;e<i.length-2&&t>i[e+1][0];)e++;const n=i[Math.max(0,e-1)],s=i[e],r=i[e+1],a=i[Math.min(i.length-1,e+2)],o=Math.min(1,Math.max(0,(t-s[0])/(r[0]-s[0])));return s.map((l,c)=>c===0?t:Bv(n[c],s[c],r[c],a[c],o))}const cs=(i,t)=>Math.sign(i)*Math.pow(Math.abs(i),t);function yh(i,t){if(t<=i[0][0])return[[i[0][1],1]];const e=i[i.length-1];if(t>=e[0])return[[e[1],1]];for(let n=0;n<i.length-1;n++){const[s,r]=i[n],[a,o]=i[n+1];if(t>=s&&t<=a){if(r===o)return[[r,1]];const l=(t-s)/(a-s),c=l*l*(3-2*l);return[[r,1-c],[o,c]]}}return[[e[1],1]]}class kv{constructor(t){this.pos=[],this.idx=[],this.si=[],this.sw=[],this.part=[],this.bi=t}v(t,e,n,s,r){this.pos.push(t,e,n);const a=s.slice(0,4);for(;a.length<4;)a.push([null,0]);let o=0;for(const[,l]of a)o+=l;for(const[l,c]of a)this.si.push(l?this.bi[l]:0),this.sw.push(l?c/o:0);return this.part.push(r),this.pos.length/3-1}loftY({keys:t,y0:e,y1:n,rings:s,segs:r,e:a=2,wts:o,part:l,side:c=1,bulge:u,capTop:d=!0,capBot:h=!0}){const f=this.pos.length/3;for(let _=0;_<=s;_++){const g=n-(n-e)*(_/s),[,m,M,R,S]=Ns(t,g),b=yh(o,g);for(let w=0;w<r;w++){const C=w/r*Math.PI*2,v=Math.cos(C),T=Math.sin(C);let L=m*cs(v,2/a),F=M*cs(T,2/a);if(u){const z=u(g,C,v*c,T);L*=z[0],F*=z[1]}this.v(R*c+L,g,S+F,b,l)}}for(let _=0;_<s;_++)for(let g=0;g<r;g++){const m=f+_*r+g,M=f+_*r+(g+1)%r,R=m+r,S=M+r;this.idx.push(m,M,R,M,S,R)}const p=(_,g,m)=>{const[,,,M,R]=Ns(t,g),S=this.v(M*c,g+(m?-.004:.004),R,yh(o,g),l);for(let b=0;b<r;b++){const w=f+_*r+b,C=f+_*r+(b+1)%r;m?this.idx.push(w,C,S):this.idx.push(C,w,S)}};d&&p(0,n,!1),h&&p(s,e,!0)}loftZ({keys:t,z0:e,z1:n,rings:s,segs:r,e:a=3,cx:o,wts:l,part:c}){const u=this.pos.length/3;for(let h=0;h<=s;h++){const f=e+(n-e)*(h/s),[,p,_,g]=Ns(t,f);for(let m=0;m<r;m++){const M=m/r*Math.PI*2,R=Math.cos(M),S=Math.sin(M);let b=g+_*cs(S,2/a);b=Math.max(b,.004),this.v(o+p*cs(R,2/a),b,f,l,c)}}for(let h=0;h<s;h++)for(let f=0;f<r;f++){const p=u+h*r+f,_=u+h*r+(f+1)%r,g=p+r,m=_+r;this.idx.push(p,_,g,_,m,g)}const d=(h,f,p)=>{const[,,,_]=Ns(t,f),g=this.v(o,_,f+(p?.004:-.004),l,c);for(let m=0;m<r;m++){const M=u+h*r+m,R=u+h*r+(m+1)%r;p?this.idx.push(R,M,g):this.idx.push(M,R,g)}};d(0,e,!1),d(s,n,!0)}geometry(){const t=new Se;return t.setAttribute("position",new qt(this.pos,3)),t.setAttribute("skinIndex",new dl(this.si,4)),t.setAttribute("skinWeight",new qt(this.sw,4)),t.setAttribute("part",new qt(this.part,1)),t.setIndex(this.idx),t.computeVertexNormals(),t}}const Gv=[[.83,.066,.05,0,0],[.87,.12,.084,0,0],[.93,.132,.096,0,-.006],[1,.128,.094,0,-.006],[1.07,.116,.086,0,0],[1.13,.112,.085,0,.004],[1.2,.13,.096,0,.008],[1.28,.168,.112,0,.01],[1.36,.198,.124,0,.012],[1.42,.212,.12,0,.006],[1.465,.206,.104,0,-.004],[1.5,.165,.086,0,-.006],[1.535,.1,.068,0,-.004],[1.575,.062,.058,0,0]],Sh=(i,t,e,n)=>{const s=Math.max(0,n),r=Math.max(0,-n),a=Math.abs(e),o=1+.15*s*Math.exp(-((i-1.34)**2)/.003)*Math.exp(-((a-.5)**2)/.08),l=1+.05*r*Math.exp(-((i-1.36)**2)/.004),c=1+.1*r*Math.exp(-((i-.93)**2)/.003)*Math.exp(-((a-.45)**2)/.08);return[1,o*l*c]},Vv=[[.915,.02,.02,0,0],[.935,.034,.032,0,0],[.97,.037,.035,0,0],[1.03,.044,.043,0,0],[1.085,.053,.052,0,0],[1.1,.054,.053,0,0],[1.115,.047,.047,0,0],[1.15,.047,.047,0,0],[1.2,.046,.048,0,-.004],[1.28,.054,.056,.002,0],[1.36,.058,.058,.004,0],[1.41,.07,.066,.006,0],[1.45,.069,.066,0,0],[1.48,.054,.054,-.014,0],[1.5,.026,.026,-.024,0]],Hv=[[.75,.008,.016,-.006,.014],[.765,.014,.03,-.006,.012],[.79,.017,.037,-.004,.008],[.83,.02,.043,-.002,.004],[.87,.024,.046,0,0],[.9,.026,.042,0,0],[.93,.028,.034,0,0],[.945,.022,.026,0,0]],Wv=[[.845,.009,.009,-.016,.042],[.86,.012,.012,-.014,.04],[.89,.014,.014,-.01,.032],[.915,.014,.016,-.006,.022]],Xv=[[.04,.03,.034,0,.004],[.07,.04,.046,0,0],[.12,.045,.05,0,-.002],[.22,.054,.058,0,-.006],[.33,.062,.068,0,-.01],[.41,.06,.064,0,-.004],[.49,.053,.056,0,.004],[.55,.057,.06,0,.004],[.65,.07,.074,.002,.004],[.76,.083,.086,.004,.002],[.86,.092,.092,.006,0],[.94,.096,.094,.004,-.004],[1,.085,.085,0,-.004]],Yv=i=>1+.07*(1-Sn.smoothstep(i,.46,.52)),qv=[[-.07,.026,.032,.042],[-.055,.04,.048,.052],[-.01,.045,.058,.056],[.06,.047,.042,.044],[.13,.045,.031,.034],[.18,.035,.023,.027],[.205,.016,.013,.024]],Zv=[[1.5,.066,.062,0,-.004],[1.57,.054,.054,0,.004],[1.64,.05,.05,0,.012],[1.7,.047,.046,0,.016],[1.73,.034,.034,0,.016]],Jv=`
varying vec3 vObjP; varying float vPart;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
vec3 G = vec3(0.035,0.30,0.05); vec3 G2 = vec3(0.07,0.48,0.1); vec3 K = vec3(0.012,0.013,0.016);
float aa(float d){ return 1.0 - smoothstep(-0.0025, 0.0025, d); } // inside when d < 0
vec3 blackTex(vec3 p){ vec2 q = vec2(p.x*90.0 + p.z*70.0 + p.y*60.0, p.y*90.0 - p.x*60.0 - p.z*50.0); vec2 f = abs(fract(q) - 0.5); float l = smoothstep(0.42, 0.5, max(f.x, f.y)); return K * (1.0 + 0.9*l) + vec3(0.004,0.005,0.006)*h21(floor(q)); }
vec3 suitColor(vec3 p){
  float part = floor(vPart + 0.5); float ax = abs(p.x);
  vec3 blk = blackTex(p);
  if (part < 0.5) { // torso
    float front = smoothstep(-0.02, 0.03, p.z);
    float hw = 0.06 + clamp(p.y - 1.03, 0.0, 0.4) * 0.3;
    float panel = max(aa(ax - hw), aa(1.405 - p.y));
    float vy = 1.015 + ax*0.55; float band = aa(abs(p.y - vy - 0.016) - 0.016);
    vec3 fc = p.y < vy ? blk : mix(blk, G, panel); fc = mix(fc, G2, band);
    float thr = mix(1.445, 1.5, smoothstep(0.0, 0.1, ax)); thr = mix(thr, 1.41, smoothstep(0.14, 0.19, ax));
    float yoke = aa(thr - p.y);
    float sx = mix(0.105, 0.15, smoothstep(1.11, 1.4, p.y)); float stripe = aa(abs(ax - sx) - 0.014) * step(1.115, p.y) * step(p.y, 1.41);
    float belt = aa(abs(p.y - 1.09) - 0.02);
    vec3 bc = mix(blk, G, max(yoke, stripe)); bc = mix(bc, G2, belt);
    return mix(bc, fc, front);
  }
  if (part < 1.5) return G; // neck: green high collar
  if (part < 2.5) { // arm
    float ox = ax - ${Us.toFixed(3)};
    float thr = 1.395 - 0.055*max(0.0, 1.0 - abs(p.z)/0.05)*smoothstep(0.0, 0.05, ox);
    float cap = aa(thr - p.y);
    float glove = aa(p.y - (1.1 - 0.014*smoothstep(-0.05, 0.05, p.z)));
    float rim = aa(abs(p.y - (1.1 - 0.012*smoothstep(-0.05, 0.05, p.z))) - 0.006);
    vec3 c = mix(blk, G, max(cap, glove)); return mix(c, G2, rim * 0.7);
  }
  if (part < 3.5) return G * 0.95; // gloves
  if (part < 4.5) { // legs
    float u = ax - ${Br.toFixed(3)}, v = p.z; float ang = atan(v, u);
    float dia = aa(abs(p.y - 0.785)/0.15 + abs(ang)/1.0 - 1.0);
    float afb = min(abs(ang - 1.5708), abs(ang + 1.5708));
    float top = 0.44 + 0.075*smoothstep(0.0, 1.2, afb);
    float boot = aa(p.y - top); float rim = aa(abs(p.y - top) - 0.006);
    vec3 c = mix(blk, G, max(dia, boot)); return mix(c, G2, rim * 0.8);
  }
  return p.y < 0.024 ? vec3(0.01) : G; // feet: green boot, black sole
}
vec3 suitGlow(vec3 p){ return vec3(0.0); }
`,Tu=`{ float facing = clamp(abs(normal.z), 0.0, 1.0); outgoingLight *= mix(0.25, 1.15, pow(facing, 0.8)) * (0.85 + 0.25 * normal.y); outgoingLight += diffuseColor.rgb * 0.35 * pow(1.0 - facing, 3.0) * vec3(0.6, 1.0, 0.8); }
`;function Kv(i){const t=i.onBeforeCompile;return i.onBeforeCompile=(e,n)=>{t?.(e,n),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",Tu+"#include <opaque_fragment>")},i}function $v(i){const t=new di({color:16777215});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float part; varying vec3 vObjP; varying float vPart;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjP = position; vPart = part;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
`+Jv).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec3 suitC = suitColor(vObjP); vec4 diffuseColor = vec4( diffuse * suitC, opacity );").replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive + suitC * ${i.toFixed(3)};`).replace("#include <opaque_fragment>",Tu+"#include <opaque_fragment>")},t.customProgramCacheKey=()=>"cb-suit-v2",t}function Qv(i,t){const e=[],n=[],s=[];let o=7;const l=()=>(o=o*16807%2147483647)/2147483647,c=30;for(let d=0;d<c;d++){const h=1.25+d/(c-1)*(Math.PI*2-2.5)+(l()-.5)*.08,f=Math.sin(h),p=Math.cos(h),_=.15+l()*.04,g=t+i*(.2+l()*.25),m=i*(1.16+l()*.05),M=.012+l()*.01,R=l()*6,S=(l()-.3)*.05,b=.011+l()*.006,w=e.length/3,C=[];for(let v=0;v<=8;v++){const T=v/8,L=m+i*.22*Math.sin(Math.min(1,T*1.25)*Math.PI*.5)+S*T*T,F=Math.sin(T*9+R)*M*T;C.push(new P(f*L+p*F,g-_*T*1.25,p*L-.012*T-f*F))}for(let v=0;v<=8;v++){const T=C[v],L=C[Math.min(8,v+1)],F=C[Math.max(0,v-1)],z=L.clone().sub(F).normalize(),U=new P(f,0,p),A=z.clone().cross(U).normalize(),D=v/8,I=b*(1-.75*D*D);for(let G=0;G<4;G++){const W=G/4*Math.PI*2,B=T.clone().addScaledVector(U,Math.cos(W)*I*.6).addScaledVector(A,Math.sin(W)*I*1.6);e.push(B.x,B.y,B.z);const Y=.85+.25*Math.sin(d*2.3+G)-.15*D,q=new Ht().setRGB(.3*Y,.21*Y,.14*Y,Ne);n.push(q.r,q.g,q.b)}}for(let v=0;v<8;v++)for(let T=0;T<4;T++){const L=w+v*4+T,F=w+v*4+(T+1)%4,z=L+4,U=F+4;s.push(L,z,F,F,z,U)}}const u=new Se;return u.setAttribute("position",new qt(e,3)),u.setAttribute("color",new qt(n,3)),u.setIndex(s),u.computeVertexNormals(),u}function jv(i,t,e){const r=[],a=[],o=[],l=new P(0,t,-.004);for(let u=0;u<=56;u++){const d=u/56*Math.PI*2,h=Math.abs(Math.atan2(Math.sin(d),Math.cos(d))),f=1-Sn.smoothstep(h,1,1.32),p=Sn.lerp(1,.3,f);for(let _=0;_<=16;_++){const g=_/16*p,m=g*Math.PI*.62,M=Math.sin(d*9+g*7)*.016*g+Math.sin(d*23+1.3)*.005+Math.sin(d*5-g*4)*.008*g+Math.max(0,Math.sin(d*14+Math.sin(g*5)*1.2))*.012*g*g,R=-.012*Math.exp(-((d%(Math.PI*2))**2)/.02)*(1-g)-.012*Math.exp(-((d-Math.PI*2)**2)/.02)*(1-g);let S=i*(1.13+.06*Math.sin(Math.PI*Math.min(1,g*1.3)))+M+R,b=Math.sin(d)*Math.sin(m)*S*.97,w=l.y+Math.cos(m)*S*1.12,C=Math.cos(d)*Math.sin(m)*S+l.z;const v=Sn.smoothstep(g,.55,1);if(v>0){const z=e+Math.sin(d*11+.7)*.016+Math.sin(d*4)*.01-Math.max(0,Math.sin(d*7+2))*.02,U=1+.32*v+.07*Math.sin(d*6+1)*v,A=Math.sin(d)*i*1.2*U,D=Math.cos(d)*i*1.12*U+l.z-.012*v;b=Sn.lerp(b,A+M*Math.sin(d),v),C=Sn.lerp(C,D+M*Math.cos(d),v),w=Sn.lerp(w,Sn.lerp(l.y-.02,z,(g-.55)/.45),v)}f>0&&_===16&&(w+=.004),r.push(b,w,C);const L=(.82+.18*Math.sin(d*57+Math.sin(g*9)*2)+.06*Math.sin(d*131))*(.75+.35*(1-g))*(.8+.2*Math.cos(h)),F=new Ht().setRGB(.3*L,.21*L,.14*L,Ne);a.push(F.r,F.g,F.b)}}for(let u=0;u<56;u++)for(let d=0;d<16;d++){const h=u*17+d,f=(u+1)*17+d;o.push(h,f,h+1,f,f+1,h+1)}const c=new Se;return c.setAttribute("position",new qt(r,3)),c.setAttribute("color",new qt(a,3)),c.setIndex(o),c.computeVertexNormals(),c}function t_(){const e=new Fe,n=new Fe;n.scale.setScalar(1.02),e.add(n);const s={},r=[],a={},o=(D,I,G,W,B)=>{const Y=new $h;return Y.name=D,Y.position.set(G,W,B),(I||n).add(Y),s[D]=Y,a[D]=r.length,r.push(Y),Y};o("hips",null,0,_h,0),o("spine",s.hips,0,.06,0),o("chest",s.spine,0,.16,0),o("neck",s.chest,0,.3,0),o("head",s.neck,0,.1,0);for(const[D,I]of[[1,"L"],[-1,"R"]])o("arm"+I,s.chest,D*Us,.22,0),o("fore"+I,s["arm"+I],0,-.3,0),o("hand"+I,s["fore"+I],0,-.27,0);for(const[D,I]of[[1,"L"],[-1,"R"]])o("leg"+I,s.hips,D*Br,-.04,0),o("shin"+I,s["leg"+I],0,-.48,0),o("foot"+I,s["shin"+I],0,-.47,0);const l=Gv.map(D=>[Mh(D[0]),...D.slice(1)]),c=Xv.map(D=>[ro(D[0]),D[1]*.92,D[2]*.93,...D.slice(3)]),u=new kv(a);u.loftY({keys:l,y0:Mh(.83),y1:1.575,rings:34,segs:28,e:2.3,part:Ai.torso,bulge:(D,I,G,W)=>Sh(D<1.26?1.26-(1.26-D)/.837:D,I,G,W),wts:[[1.03,"hips"],[1.12,"spine"],[1.2,"spine"],[1.28,"chest"],[1.54,"chest"],[1.6,"neck"]]}),u.loftY({keys:Zv,y0:1.5,y1:1.74,rings:8,segs:20,part:Ai.neck,wts:[[1.53,"chest"],[1.6,"neck"],[1.66,"neck"],[1.71,"head"]]});for(const[D,I]of[[1,"L"],[-1,"R"]]){const G=Vv.map(q=>[q[0],q[1],q[2],Us+q[3],q[4]]);u.loftY({keys:G,y0:.915,y1:1.5,rings:28,segs:16,part:Ai.arm,side:D,wts:[[.935,"hand"+I],[.965,"fore"+I],[1.13,"fore"+I],[1.25,"arm"+I],[1.45,"arm"+I],[1.51,"chest"]].map(([q,ot])=>[q,ot])});const W=Hv.map(q=>[q[0],q[1],q[2],Us+q[3],q[4]]);u.loftY({keys:W,y0:.75,y1:.945,rings:11,segs:12,part:Ai.hand,side:D,wts:[[0,"hand"+I],[1,"hand"+I]]});const B=Wv.map(q=>[q[0],q[1],q[2],Us+q[3],q[4]]);u.loftY({keys:B,y0:.845,y1:.915,rings:4,segs:8,part:Ai.hand,side:D,wts:[[0,"hand"+I],[1,"hand"+I]]});const Y=c.map(q=>[q[0],q[1],q[2],Br+q[3],q[4]]);u.loftY({keys:Y,y0:ro(.04),y1:ro(1),rings:38,segs:20,part:Ai.leg,side:D,bulge:(q,ot,mt,Kt)=>{const yt=Yv(q),Tt=1+.07*Math.max(0,-Kt)*Math.exp(-((q-.35)**2)/.006);return[yt,yt*Tt]},wts:[[.08,"foot"+I],[.12,"shin"+I],[.47,"shin"+I],[.57,"leg"+I],[.96,"leg"+I],[1.06,"hips"]]}),u.loftZ({keys:qv,z0:-.07,z1:.205,rings:16,segs:16,cx:D*Br,part:Ai.foot,wts:[["foot"+I,1]]})}const d=u.geometry(),h=new ud(d,$v(.16));h.name="suit",h.frustumCulled=!1,n.add(h),n.updateMatrixWorld(!0),h.bind(new gl(r));{const Y=[],q=[],ot=[];for(let Tt=0;Tt<=12;Tt++){const $=1.12+Tt/12*.5,[,tt,dt,,It]=Ns(l,$);for(let ct=0;ct<=12;ct++){const zt=-.25+ct/12*.5;let ce=0,Bt=1e9;for(let le=0;le<=90;le++){const Wt=le/90*Math.PI,K=tt*cs(Math.cos(Wt),2/2.3);Math.abs(K-zt)<Bt&&(Bt=Math.abs(K-zt),ce=Wt)}const jt=It+dt*cs(Math.sin(ce),2/2.3)*Sh($<1.26?1.26-(1.26-$)/.837:$,ce,Math.cos(ce),Math.sin(ce))[1];Y.push(zt,$-1.26,jt+.003),q.push(ct/12,Tt/12)}}for(let Tt=0;Tt<12;Tt++)for(let $=0;$<12;$++){const tt=Tt*13+$,dt=tt+1,It=tt+12+1,ct=It+1;ot.push(tt,dt,It,dt,ct,It)}const mt=new Se;mt.setAttribute("position",new qt(Y,3)),mt.setAttribute("uv",new qt(q,2)),mt.setIndex(ot);const Kt=Jx();Kt.wrapS=Kt.wrapT=In;const yt=new Ft(mt,new pe({map:Kt,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));yt.name="emblem",yt.renderOrder=1,s.chest.add(yt)}const f=tn(6160234,.3,.18);f.position.set(0,.1,.1),s.chest.add(f);const p=.135,_=$t(14262908,{selfLit:.32}),g=new ye(p,30,22);{const D=g.attributes.position;for(let I=0;I<D.count;I++){const G=D.getX(I),W=D.getY(I),B=D.getZ(I),Y=W/p,q=Math.max(0,B/p);let ot=Y>-.55?1-.06*Math.max(0,-Y):.967-1.05*(-Y-.55)**1.25;ot=Math.max(ot,.36),ot*=1+.05*Math.exp(-((Y+.12)**2)/.02)*q;let mt=1+(B>0?.09*Math.exp(-((Y+.82)**2)/.02)+.05*Math.exp(-((Y-.28)**2)/.01):-.05*Math.max(0,-Y));Y<-.2&&(mt*=1-.1*(1-q)*Math.min(1,(-Y-.2)*2)),D.setXYZ(I,G*ot,W,B*mt)}g.computeVertexNormals()}const m=new di({map:$x()});m.emissive.set(16777215).multiplyScalar(.32*.9),m.emissiveMap=m.map;const M=Yt(g,m,0,.115*Ir+.02,.012,s.head);M.scale.set(.88,1.2,1).multiplyScalar(Ir),M.name="headMesh";const R=Yt(new fi(.022,.06,10),_,0,-.018,.138,M);R.rotation.x=Math.PI/2-.42,R.scale.set(.95,1,.85),Yt(new ye(.016,8,6),_,0,-.04,.152,M).scale.set(1.2,.85,.9);for(const D of[-1,1])Yt(new ye(.028,8,6),_,D*.127,0,-.004,M).scale.set(.45,1,.75);const b=[];for(const D of[-1,1]){const I=new Ft(new ye(.026,10,6),He(10354554));I.position.copy(Ko(p*.985,.468*Math.PI,D*.37)),I.scale.set(1.05,.55,.5),I.lookAt(I.position.clone().multiplyScalar(2)),M.add(I),b.push(I);const G=tn(7208794,.07,.55);G.position.copy(I.position).multiplyScalar(1.05),M.add(G)}const w=$t(4860438,{selfLit:.32}),C=Yt(new fi(.036,.085,10),w,0,0,0,M);C.position.copy(Ko(p*.9,.82*Math.PI,0)),C.rotation.x=Math.PI+.45,C.scale.set(1,1,.55);const v=Kv(new di({vertexColors:!0,side:Ve}));v.customProgramCacheKey=()=>"cb-hair",v.emissive.set(3810322).multiplyScalar(.32*.6);const T=.115*Ir+.02,L=p*Ir*1.04,F=new Ft(jv(L,T,-.085),v);F.scale.set(.95,1.14,1),F.position.set(0,-T*.14,.01),F.name="hair",s.head.add(F);const z=new Ft(Qv(L,T),v);z.scale.copy(F.scale),z.position.copy(F.position),z.name="hairLocks",s.head.add(z);const U={hipBase:_h,root:e,body:n,j:s,head:M,headR:p,parts:{torso:h},S:1.02,eyes:b,emblemGlow:f,hair:[F,z],skinned:h},A=tn(3800954,2.2,0);return A.position.y=1.1,e.add(A),U.aura=A,U}const e_=""+new URL("portrait-71rFsCbQ.jpg",import.meta.url).href,bh={chillblazer:{id:"chillblazer",name:"ChillBlazer",title:"Calm the storm.",color:3800954,portrait:e_,model:t_,stats:{speed:8.5,accel:60,jumpV:13,airJumps:1,airJumpV:11.5,gravity:32,radius:.45,height:1.85,maxChill:100,startChill:50,moveChillPerSec:9,panicRegenPerSec:.35,panicRegenDelay:5},kit:{strike:{type:"meleeCombo",label:"Calm Strike",chillGain:3,panicRelief:.1,comboWindow:.5,hits:[{pose:"strike1",dur:.3,at:.1,stress:14,range:2.4,arc:2,lunge:4,sfx:"strike"},{pose:"strike2",dur:.3,at:.1,stress:14,range:2.4,arc:2,lunge:4,sfx:"strike"},{pose:"strike3",dur:.5,at:.22,stress:28,range:3,arc:2.8,lunge:5,knock:5,stagger:.6,sfx:"strike3",whoosh:!0}]},blast:{type:"projectile",label:"Chill Blast",cost:16,cooldown:.38,speed:30,stress:20,splash:2.2,homing:5,life:1.4,color:3800954,pose:"blast",stagger:.3},field:{type:"aura",label:"Calm Field",minCost:14,drain:28,radius:6.5,stressPerSec:18,panicPerSec:1,stun:!0,blocksPulses:!0,color:3800954,pose:"field"},jump:{type:"multiJump",label:"Jump"},lock:{type:"lockOn",label:"Lock-on",range:30}}}};function n_(i){return bh[i]||bh.chillblazer}const ke=i=>document.getElementById(i),as=new P;class i_{constructor(t){this.g=t,this.el={hud:ke("hud"),chill:ke("chill-fill"),panic:ke("panic-fill"),obj:ke("objective"),boss:ke("bossbar"),bossFill:ke("boss-fill"),bossName:ke("boss-name"),bossSub:ke("boss-sub"),reticle:ke("lock-reticle"),popups:ke("popups"),flash:ke("flash"),toast:ke("toast"),fps:ke("fps"),strip:ke("compass-strip"),mini:ke("minimap")},this.mctx=this.el.mini.getContext("2d"),this.miniT=0,this.toastT=0,this.btn={};for(const e of document.querySelectorAll(".act"))this.btn[e.dataset.act]=e;this.el.fps.classList.toggle("hidden",!t.settings.showFps);{const e=ke("hud-portrait");if(e&&!e.querySelector(".emblem-badge")){const n=document.createElement("img");n.className="emblem-badge",n.alt="",n.src=Kx(),e.appendChild(n)}}}show(t){this.el.hud.classList.toggle("hidden",!t)}objective(t){this.el.obj.textContent!==t&&(this.el.obj.textContent=t)}fps(t){this.el.fps.textContent=t.toFixed(0)+" fps"}flash(t=.5){this.el.flash.style.opacity=t,clearTimeout(this._ft),this._ft=setTimeout(()=>this.el.flash.style.opacity=0,160)}bossIntro(t,e,n){const s=ke("boss-intro");s.querySelector(".bi-img").className="bi-img "+t,s.querySelector(".bi-name").textContent=e,s.querySelector(".bi-line").textContent=n,s.classList.add("show"),clearTimeout(this._bi),this._bi=setTimeout(()=>s.classList.remove("show"),2600)}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flashButton(t){const e=this.btn[t];e&&(e.classList.add("disabled"),setTimeout(()=>e.classList.remove("disabled"),250))}project(t){return as.copy(t).project(this.g.camera),as.z>1?null:{x:(as.x*.5+.5)*window.innerWidth,y:(-as.y*.5+.5)*window.innerHeight}}popup(t,e,n){const s=this.project(as.copy(e).setY(e.y+2));if(!s)return;this.el.popups.childElementCount>6&&this.el.popups.firstChild.remove();const r=document.createElement("div");r.className="pop"+(n?" big":""),r.textContent=t,r.style.left=s.x+(Math.random()-.5)*40+"px",r.style.top=s.y+"px",this.el.popups.appendChild(r),setTimeout(()=>r.remove(),900)}update(t){const e=this.g,n=e.player;this.el.chill.style.width=n.chill/n.maxChill*100+"%",this.el.panic.style.width=e.panic+"%",this.el.panic.parentElement.classList.toggle("danger",e.panic>70);const s=e.boss&&!e.boss.calmed?e.boss:null;if(this.el.boss.classList.toggle("hidden",!s),s){const a=ke("boss-portrait");a.className!==s.kind&&(a.className=s.kind),this.el.bossFill.style.width=s.stressK*100+"%",this.el.bossName.textContent=s.name,this.el.bossSub.textContent=s.kind==="amp"?`STRESS  -  PHASE ${s.phase}/3`:s.dazed>0?"DAZED! x1.6 CALM":"STRESS"}if(e.lock){const a=this.project(as.copy(e.lock.pos).setY(e.lock.pos.y+(e.lock.centerY||1)));a?(this.el.reticle.classList.remove("hidden"),this.el.reticle.style.left=a.x+"px",this.el.reticle.style.top=a.y+"px"):this.el.reticle.classList.add("hidden")}else this.el.reticle.classList.add("hidden");this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.el.toast.classList.remove("show"));const r=n.kit;this.btn.blast.classList.toggle("disabled",n.chill<r.blast.cfg.cost),this.btn.blast.querySelector(".cd").style.setProperty("--p",(r.blast.cdFrac()*100).toFixed(0)+"%"),this.btn.field.classList.toggle("disabled",n.chill<r.field.cfg.minCost&&!r.field.busy()),this.btn.lock.classList.toggle("pressed",!!e.lock),this.miniT-=t,this.miniT<=0&&(this.miniT=.1,this.drawMinimap(),this.drawCompass())}drawCompass(){const t=this.g,e=t.cam.yaw,n=this.el.strip.parentElement.clientWidth,s=Math.PI*.9,r=Math.atan2(-Math.sin(e),-Math.cos(e)),a=[["N",Math.PI],["E",Math.PI/2],["S",0],["W",-Math.PI/2]].map(([l,c])=>({t:l,a:c,c:"#9fd",mk:!1}));for(const l of t.objectives())a.push({t:"◆",a:Math.atan2(l.pos.x-t.player.pos.x,l.pos.z-t.player.pos.z),c:l.id==="core"||l.id==="tower"||l.id==="park"?"#ff2bd6":"#ff6fe6",mk:!0});let o="";for(const l of a){let c=l.a-r;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;if(Math.abs(c)>s/2)continue;const u=n/2-c/(s/2)*(n/2);o+=`<span class="${l.mk?"mk":""}" style="left:${u.toFixed(0)}px;color:${l.c}">${l.t}</span>`}this.el.strip.innerHTML=o}drawMinimap(){const t=this.g,e=this.mctx,n=220,s=n/2,r=1.6,a=t.col.bounds,o=t.map,l=t.player.pos;e.clearRect(0,0,n,n),e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),e.fillStyle="#0b0718",e.fillRect(0,0,n,n),e.translate(s,s),e.rotate(t.cam.yaw);const c=r/o.scale;e.drawImage(o.canvas,-(l.x-a.minX)*r,-(l.z-a.minZ)*r,o.canvas.width*c,o.canvas.height*c);const u=(d,h)=>[(d-l.x)*r,(h-l.z)*r];for(const d of t.enemies){if(d.removed)continue;const[h,f]=u(d.pos.x,d.pos.z);e.fillStyle=d.calmed?"#39ff7a":"#ff2bd6",e.beginPath(),e.arc(h,f,d.boss?6:3.5,0,7),e.fill()}for(const d of t.objectives()){let[h,f]=u(d.pos.x,d.pos.z);const p=Math.hypot(h,f);p>s-10&&(h*=(s-10)/p,f*=(s-10)/p),e.fillStyle="#ff2bd6",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(h,f-8),e.lineTo(h+7,f),e.lineTo(h,f+8),e.lineTo(h-7,f),e.closePath(),e.fill(),e.stroke()}e.restore(),e.save(),e.translate(s,s),e.rotate(-(t.player.facing-Math.atan2(-Math.sin(t.cam.yaw),-Math.cos(t.cam.yaw)))),e.fillStyle="#39ff7a",e.shadowColor="#39ff7a",e.shadowBlur=8,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore()}}const s_={low:1,medium:1.5,high:2},kr={h1:[[["citizen",3],["caster",1]],[["goon",2],["citizen",2],["caster",1]],[["goon",3],["caster",2]]],h2:[[["goon",3],["caster",1]],[["goon",2],["caster",2],["drone",1]],[["goon",3],["caster",2],["drone",1]]],h3:[[["drone",2],["caster",1]],[["goon",2],["drone",2]],[["goon",2],["caster",2],["drone",1]]]};class Dl{constructor(t,e,n,s){this.canvas=t,this.input=e,this.sfx=n,this.settings=s;const r=s.quality;this.renderer=new Xx({canvas:t,antialias:r==="high",powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Ne,this.applyQuality(),this.scene=new ed,this.scene.fog=new fl(1450574,r==="low"?.015:.012),this.scene.background=new Ht(330274),this.camera=new cn(62,1,.1,600),this.scene.add(new Vd(8023295,2757176,1.25));const a=new Bc(11068671,1.1);a.position.set(-40,80,30),this.scene.add(a);const o=new Bc(16730840,.5);o.position.set(30,20,-60),this.scene.add(o),this.col=new Yx,this.city=gv(this.scene,this.col,r),this.city.renderer=this.renderer,this.map=xv(this.city,this.col),this.fx=new vv(this.scene,r),this.proj=new _v(this.scene),this.hero=n_("chillblazer"),this.player=new bv(this.hero,this),r!=="low"&&(this.pLight=new Wd(3800954,6,9,1.6),this.scene.add(this.pLight)),this.cam={yaw:0,pitch:.28,dist:5,userT:0,shake:0,pos:new P},this.enemies=[],this.pulses=[],this.markers={},this.hud=new i_(this),this.state="title",this.time=0,this.hitstopT=0,this.fps=60,this._fpsAcc=0,this._fpsN=0,this.frameTimes=[],this.makeMarkers(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.signalCd=12}applyQuality(){const t=Math.min(window.devicePixelRatio||1,s_[this.settings.quality]||1.5);this.renderer.setPixelRatio(t),this.pixelRatio=t,this.camera&&this.resize()}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera&&(this.camera.aspect=t/e,this.camera.fov=t/e<1.2?75:62,this.camera.updateProjectionMatrix())}startSession(t){this.progress=t,this.clearEnemies(),this.proj.clear(),this.pulses.forEach(e=>this.scene.remove(e.mesh)),this.pulses=[],this.panic=15,this.player.chill=this.hero.stats.startChill,this.lock=null,this.waveIdx={},this.activeHotspot=null,this.boss=null,this.sessionTime=0,this.city.setTowerCalm(0),this.city.relay.dish.material.color.set(t.cleared.includes("h3")?3800954:16722902),this.player.pos.copy(this.checkpointPos()),this.player.vel.set(0,0,0),this.player.facing=Math.PI,this.cam.yaw=0,this.progress.checkpoint==="tower"&&(this.player.facing=Math.PI),this.refreshMarkers(),this.state="play",this.hud.show(!0),this.updateObjective()}checkpointPos(){const t=this.progress?.checkpoint||"start";return t==="start"?re.spawn.clone():t==="h1"?new P(-50,0,62):t==="h2"?new P(50,0,12):t==="h3"?new P(-50,0,-25):t==="park"?new P(25,0,-2):t==="tower"?new P(0,0,-100):re.spawn.clone()}stage(){const t=this.progress;return t.cleared.length<3?"hotspots":t.enforcer?t.amp?"won":t.ampCalmed?"core":"amp":"enforcer"}clearEnemies(){for(const t of this.enemies)t.remove();this.enemies=[],this.boss=null}addEnemy(t){return this.enemies.push(t),t}targets(){return this.enemies.filter(t=>!t.calmed&&!t.removed)}makeMarkers(){const t=(e,n)=>{const s=new Fe;s.position.copy(e);const r=new Ft(new Je(.6,1.4,60,10,1,!0),new pe({color:n,transparent:!0,opacity:.22,blending:Pe,depthWrite:!1,side:Ve,toneMapped:!1,fog:!1}));r.position.y=30,s.add(r);const a=new Ft(new Te(10,10).rotateX(-Math.PI/2),new pe({map:Al(),color:n,transparent:!0,blending:Pe,depthWrite:!1,toneMapped:!1}));return a.position.y=.2,s.add(a),s.userData={beam:r,ring:a},this.scene.add(s),s};for(const e of re.hotspots)this.markers[e.id]=t(e.pos,16722902);this.markers.park=t(new P(re.park.x,0,re.park.z),16722902),this.markers.tower=t(re.towerPlaza.clone(),16722902)}refreshMarkers(){const t=this.stage(),e=this.nextHotspot();for(const n of re.hotspots){const s=this.markers[n.id],r=this.progress.cleared.includes(n.id);s.visible=!!e&&e.id===n.id,s.userData.beam.material.color.set(r?3800954:16722902),s.userData.ring.material.color.set(r?3800954:16722902),s.userData.beam.material.opacity=r?.08:.22}this.markers.park.visible=t==="enforcer"||this.progress.enforcer,this.markers.park.userData.beam.material.color.set(this.progress.enforcer?3800954:16722902),this.markers.tower.visible=t==="amp"||t==="core"}nextHotspot(){return this.stage()!=="hotspots"?null:re.hotspots.find(t=>!this.progress.cleared.includes(t.id))||null}objectives(){const t=this.stage(),e=[];if(t==="hotspots"){const n=this.nextHotspot();n&&e.push({id:n.id,name:n.name,pos:n.pos})}return t==="enforcer"&&e.push({id:"park",name:"Amp Enforcer",pos:new P(re.park.x,0,re.park.z)}),t==="amp"&&e.push({id:"tower",name:"The Amp",pos:re.towerPlaza.clone()}),t==="core"&&e.push({id:"core",name:"Tower Core",pos:this.city.core.group.position.clone()}),e}updateObjective(){const t=this.stage();let e;if(this.activeHotspot){const n=re.hotspots.find(r=>r.id===this.activeHotspot),s=this.targets().length;e=`Calm ${n.name}: ${s} stressed left (wave ${this.waveIdx[n.id]+1}/${kr[n.id].length})`}else t==="hotspots"?e=`Find the stress hotspot on your map (${3-(3-this.progress.cleared.length)}/3 calmed). Follow the magenta beam.`:t==="enforcer"?e=this.boss?"Calm the Amp Enforcer! Sidestep his charge so he hits a wall.":"Hotspots calm. The Amp Enforcer waits in the park plaza.":t==="amp"?e=this.boss?"Calm The Amp! Jump or Calm Field the pulses.":"Head north to the Amp Tower. End the OVERDRIVE signal.":t==="core"?e="The Amp is calm. Now calm the Amp Tower core!":e="The city is calm.";this.hud.objective(e)}spawnWave(t){const e=re.hotspots.find(a=>a.id===t),n=kr[t][this.waveIdx[t]];let s=0;const r=n.reduce((a,o)=>a+o[1],0);for(const[a,o]of n)for(let l=0;l<o;l++,s++){const c=s/r*Math.PI*2+Math.random()*.5,u=e.kind==="roof"?5+s%2*1.5:7+s%3*2,d=new P(e.pos.x+Math.cos(c)*u,e.pos.y,e.pos.z+Math.sin(c)*u);a==="drone"&&(d.y=e.pos.y+4);const h=a==="citizen"?yu:a==="goon"?Su:a==="caster"?Il:Ll;this.addEnemy(new h(this,d,{hotspot:t}))}this.fx.ring(e.pos,16722902,1,12,.8),this.sfx.play("pulse")}encounterUpdate(t){const e=this.player.pos,n=this.stage();if(n==="hotspots"&&!this.activeHotspot)for(const s of[this.nextHotspot()].filter(Boolean)){const r=Math.hypot(e.x-s.pos.x,e.z-s.pos.z);if(s.kind==="roof"?r<15&&e.y>7:r<20){this.activeHotspot=s.id,this.waveIdx[s.id]=0,this.spawnWave(s.id),this.showToast(s.name.toUpperCase()+": CALM THE STORM"),this.updateObjective();break}}if(this.activeHotspot){const s=this.activeHotspot,r=re.hotspots.find(o=>o.id===s);if(r&&r.kind==="roof"){for(const o of this.enemies)if(o.hotspot===s&&!(o.flying||o.calmed||o.removed))if(o.pos.y<r.pos.y-3){if(o.offRoofT=(o.offRoofT||0)+t,o.offRoofT>2.5){const l=Math.random()*6.28;o.pos.set(r.pos.x+Math.cos(l)*4,r.pos.y+.1,r.pos.z+Math.sin(l)*4),o.vel?.set(0,0,0),o.offRoofT=0,this.fx.burst(o.pos.clone().setY(o.pos.y+1),16722902,10,4,.5)}}else o.offRoofT=0}this.targets().length===0&&(this.waveDelay=(this.waveDelay??1.2)-t,this.waveDelay<=0&&(this.waveDelay=void 0,this.waveIdx[s]++,this.waveIdx[s]>=kr[s].length?(this.progress.cleared.push(s),this.progress.checkpoint=s,this.activeHotspot=null,this.lock=null,this.addPanic(-8),s==="h3"&&this.city.relay.dish.material.color.set(3800954),this.showToast(re.hotspots.find(o=>o.id===s).name.toUpperCase()+" CALMED"),this.sfx.play("win"),this.save(),this.refreshMarkers(),this.stage()==="enforcer"&&setTimeout(()=>this.showToast("THE AMP ENFORCER IS IN THE PARK"),1800)):this.spawnWave(s),this.updateObjective()));const a=re.hotspots.find(o=>o.id===s);this.activeHotspot&&Math.hypot(e.x-a.pos.x,e.z-a.pos.z)>pi.hotspotReset&&(this.clearEnemies(),this.activeHotspot=null,this.updateObjective())}if(n==="enforcer"&&!this.boss){const s=re.park;Math.hypot(e.x-s.x,e.z-s.z)<17&&(this.clearEnemies(),this.boss=this.addEnemy(new bu(this,new P(s.x,0,s.z-8),new P(s.x,0,s.z))),this.hud.bossIntro("enforcer","AMP ENFORCER","He chases you anywhere. Dodge his charge into a wall, then calm him."),this.sfx.play("slam"),this.updateObjective())}if(n==="amp"&&!this.boss){const s=re.towerPlaza;Math.hypot(e.x-s.x,e.z-s.z)<24&&(this.clearEnemies(),this.progress.checkpoint="tower",this.save(),this.boss=this.addEnemy(new wu(this,new P(s.x,0,s.z-8),s.clone())),this.hud.bossIntro("amp","THE AMP",'"Panic sells, hero. And business is BOOMING."'),this.sfx.play("pulse"),this.flash(),this.updateObjective())}if(this.boss&&(this.boss.kind==="enforcer"||this.boss.kind==="amp")&&!this.boss.calmed){const s=this.boss.arena;Math.hypot(e.x-s.x,e.z-s.z)>Ks.giveUp&&(this.clearEnemies(),this.pulses.forEach(r=>this.scene.remove(r.mesh)),this.pulses=[],this.showToast("THE BOSS WENT BACK TO ITS ARENA"),this.updateObjective())}n==="core"&&!this.boss&&(this.boss=this.addEnemy(new Eu(this,this.city.core)),this.updateObjective());for(const s of this.enemies)s.calmed&&s.calmT>25&&!s.boss&&s.remove();this.enemies=this.enemies.filter(s=>!s.removed)}onCalmed(t){if(this.addPanic(t.boss?-25:-3),this.player.addChill(t.boss?35:4),this.lock===t&&(this.lock=null,this.cycleLock(30,!0)),t.kind==="enforcer"){for(const e of this.enemies)e.kind==="caster"&&!e.calmed&&!e.hotspot&&e.becomeCalm();this.progress.enforcer=!0,this.progress.checkpoint="park",this.boss=null,this.showToast("AMP ENFORCER CALMED"),this.sfx.play("win"),this.save(),this.refreshMarkers(),setTimeout(()=>this.state==="play"&&this.showToast("NOW: THE AMP TOWER (NORTH)"),2e3)}if(t.kind==="amp"){this.progress.ampCalmed=!0,this.boss=null;for(const e of this.enemies)e.kind==="drone"&&!e.calmed&&e.becomeCalm();this.pulses.forEach(e=>this.scene.remove(e.mesh)),this.pulses=[],this.showToast("THE AMP IS CALM... NOW THE TOWER"),this.save()}t.kind==="core"&&(this.progress.amp=!0,this.win()),this.updateObjective()}spawnPulse(t,e){const n=new Ft(new Je(1,1,1.1,48,1,!0),new pe({color:16722902,transparent:!0,opacity:.55,blending:Pe,side:Ve,depthWrite:!1,toneMapped:!1}));n.position.set(t.x,.55,t.z),this.scene.add(n),this.pulses.push({c:t.clone(),r:.5,speed:e,max:30,mesh:n,hit:!1}),this.sfx.play("pulse"),this.flash(),this.shake(.25)}pulsesUpdate(t){const e=this.player;for(let n=this.pulses.length-1;n>=0;n--){const s=this.pulses[n];s.r+=s.speed*t,s.mesh.scale.set(s.r,1,s.r),s.mesh.material.opacity=.55*(1-s.r/s.max);const r=Math.hypot(e.pos.x-s.c.x,e.pos.z-s.c.z);if(!s.hit&&Math.abs(r-s.r)<.8){const a=this.col.groundAt(e.pos.x,e.pos.z,e.radius,e.pos.y);e.kit.field.blocks()?(s.hit=!0,this.popup("WHOOSH!",e.pos),this.fx.burst(e.pos.clone().setY(e.pos.y+1),3800954,10,4),this.stats.pulsesBlocked++):e.pos.y-a<.9?(s.hit=!0,e.hurt(14,new P(e.pos.x-s.c.x,0,e.pos.z-s.c.z).normalize(),9),this.stats.pulsesHit++):(s.hit=!0,this.stats.pulsesJumped++,this.popup("WHOOSH!",e.pos))}s.r>s.max&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),this.pulses.splice(n,1))}}projUpdate(t){const e=this.player;for(const n of this.proj.list){if(n.dead)continue;if(n.age+=t,n.homing&&n.target&&!n.target.calmed){const a=n.target.pos.clone().setY(n.target.pos.y+(n.target.centerY||1)).sub(n.mesh.position).normalize().multiplyScalar(n.speed);n.vel.lerp(a,Math.min(1,n.homing*t))}n.mesh.position.addScaledVector(n.vel,t);const s=n.mesh.position;let r=!1;if((n.age>n.life||s.y<.05||this.col.raycast(s.x,s.y,s.z,s.x+.01,s.y,s.z)<1)&&(r=!0),n.owner==="player"){for(const a of this.targets())if(a.pos.clone().setY(a.pos.y+(a.centerY||1)).distanceTo(s)<a.radius+.5+(a.boss?a.height*.3:.3)){r=!0;break}if(r){for(const a of this.targets()){const l=a.pos.clone().setY(a.pos.y+(a.centerY||1)).distanceTo(s);l<n.splash+a.radius+(a.boss?1:0)&&(a.calmHit(n.stress*(l<a.radius+1.2?1:.5),{stagger:n.stagger,knock:2,dir:n.vel.clone().setY(0).normalize(),kind:"blast"}),this.panic=Math.max(0,this.panic-.5))}this.fx.burst(s,8257418,12,5,.6),this.fx.ring(s.clone().setY(Math.max(0,s.y-1)),3800954,.3,n.splash,.35),this.popup("WHOOSH!",s)}}else{const o=e.pos.clone().setY(e.pos.y+1).distanceTo(s);e.kit.field.blocks()&&e.pos.distanceTo(s)<e.kit.field.cfg.radius?(r=!0,this.fx.burst(s,3800954,8,3,.5)):o<.65&&(r=!0,e.hurt(n.panic,n.vel.clone().setY(0).normalize(),5)&&this.stats.projHits++),r&&this.fx.burst(s,16722902,8,4,.5)}r&&this.proj.kill(n)}this.proj.list=this.proj.list.filter(n=>!n.dead)}addPanic(t){this.state==="play"&&(this.panic=Math.max(0,Math.min(100,this.panic+t)),this.panic>=100&&this.lose())}cycleLock(t=30,e=!1){const n=this.player,s=this.targets().filter(a=>a.pos.distanceTo(n.pos)<t);if(!s.length){this.lock=null;return}const r=Math.atan2(-Math.sin(this.cam.yaw),-Math.cos(this.cam.yaw));if(s.sort((a,o)=>Math.abs(hi(Math.atan2(a.pos.x-n.pos.x,a.pos.z-n.pos.z),r))*8+a.pos.distanceTo(n.pos)-(Math.abs(hi(Math.atan2(o.pos.x-n.pos.x,o.pos.z-n.pos.z),r))*8+o.pos.distanceTo(n.pos))),this.lock&&s.includes(this.lock)&&!e){const a=s.indexOf(this.lock);this.lock=s[(a+1)%s.length],s.length===1&&(this.lock=null)}else this.lock=s[0];e||this.sfx.play("lock")}update(t){this.time+=t,this.city.update(this.time,this.camera);{const a=this.city.traffic,o=this.player,l=[{x:o.pos.x,z:o.pos.z,r:o.radius,player:!0}];for(const c of this.enemies)!c.removed&&!c.flying&&l.push({x:c.pos.x,z:c.pos.z,r:c.radius});a.update(t,this.time,l),a.pushOut(o.pos,o.radius);for(const c of this.enemies)!c.removed&&!c.flying&&a.pushOut(c.pos,c.radius)}if(this.state!=="play"){this.titleCam(t);return}this.sessionTime+=t,this.progress.playTime+=t,this.hitstopT>0&&(this.hitstopT-=t,t*=.15);const e=this.input.sample(),n=this.settings.sens;if((e.look.x||e.look.y)&&(this.cam.yaw-=e.look.x*.0065*n,this.cam.pitch+=e.look.y*.005*n*(this.settings.invertY?-1:1),this.cam.userT=.8),this.cam.pitch=Math.max(-.3,Math.min(1.15,this.cam.pitch)),this.cam.userT-=t,this.lock&&(this.lock.calmed||this.lock.removed||this.lock.pos.distanceTo(this.player.pos)>40)&&(this.lock=null),this.music){const a=this.boss,o=this.player.pos;this.music.setBoss(!!(a&&!a.calmed&&!a.removed&&Math.hypot(a.pos.x-o.x,a.pos.z-o.z)<70))}this.player.update(t,e,this.cam.yaw);for(const a of this.enemies)a.removed||a.update(t);if(this.projUpdate(t),this.pulsesUpdate(t),this.fx.update(t),this.encounterUpdate(t),this.signalCd-=t,this.signalCd<=0&&this.stage()!=="won"&&!this.progress.ampCalmed){this.signalCd=15,this.flash(.35),this.sfx.play("pulse"),this.player.kit.field.blocks()||(this.addPanic(this.stage()==="amp"?2:4),this.stats.signal++);for(const o of this.targets())o.boss||(o.stress=Math.min(o.maxStress,o.stress+o.maxStress*.15));this.city.tower.bglow.scale.setScalar(40)}const s=this.hero.stats;!this.targets().some(a=>a.pos.distanceTo(this.player.pos)<18)&&this.player.t-(this.player.lastHurtT??-99)>s.panicRegenDelay&&(this.panic=Math.max(0,this.panic-s.panicRegenPerSec*t)),this.pLight&&(this.pLight.position.copy(this.player.pos).add(new P(0,1.6,0)),this.pLight.intensity=4+(this.player.kit.field.busy()?10:0)),this.updateCamera(t),this.hud.update(t),this._saveT=(this._saveT||0)+t,this._saveT>15&&(this._saveT=0,this.save())}updateCamera(t){const e=this.cam,n=this.player;if(this.lock&&e.userT<=0){const c=Math.atan2(-(this.lock.pos.x-n.pos.x),-(this.lock.pos.z-n.pos.z));e.yaw+=hi(c,e.yaw)*(1-Math.exp(-4*t))}const s=new P(n.pos.x,n.pos.y+1.55,n.pos.z),r=e.dist*(this.boss&&this.boss.kind!=="core"?1.25:1),a=new P(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch)),o=s.clone().addScaledVector(a,r),l=this.col.raycast(s.x,s.y,s.z,o.x,o.y,o.z,.3);if(l<1&&o.lerpVectors(s,o,Math.max(.15,l-.06)),o.y<.4&&(o.y=.4),e.pos.lerp(o,1-Math.exp(-18*t)),e.pos.distanceTo(o)>4&&e.pos.copy(o),this.camera.position.copy(e.pos),e.shake>0){e.shake=Math.max(0,e.shake-t);const c=e.shake*.5;this.camera.position.add(new P((Math.random()-.5)*c,(Math.random()-.5)*c,(Math.random()-.5)*c))}this.camera.lookAt(s)}titleCam(t){const e=this.player;if(this.state==="model"){const n=this.modelView;e.pos.set(3,0,70),e.facing=n.yaw;const s=n.pose?Xt[n.pose](this.time,.35):Xt.idle(this.time);if(e.anim.apply(s,t,30),e.rig.root.position.copy(e.pos),e.rig.root.rotation.y=e.facing,e.shadow.position.set(3,.03,70),n.cam){this.camera.position.set(...n.cam),this.camera.lookAt(...n.at);return}this.camera.position.set(3,n.h,70+n.dist),this.camera.lookAt(3,n.look,70);return}if(this.state==="title"&&(e.pos.set(0,0,70),e.facing=Math.PI+Math.sin(this.time*.3)*.5,e.anim.apply(r_(this.time),t),e.rig.root.position.copy(e.pos),e.rig.root.rotation.y=e.facing,e.shadow.position.set(e.pos.x,.03,e.pos.z)),this.state==="title"){const n=this.time*.08;this.camera.position.set(e.pos.x+Math.sin(n)*7-2,2.2,e.pos.z-6+Math.cos(n)*2),this.camera.lookAt(e.pos.x-1.6,1.7,e.pos.z-1)}}render(){this.renderer.render(this.scene,this.camera)}tick(t,e){this._fpsAcc+=e,this._fpsN++,this._fpsAcc>1&&(this.fps=this._fpsN/this._fpsAcc,this._fpsAcc=0,this._fpsN=0,this.hud.fps(this.fps)),this.frameTimes.push(e),this.frameTimes.length>600&&this.frameTimes.shift(),this.update(t),this.render()}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t){this.cam.shake=Math.max(this.cam.shake,t)}flash(t){this.hud.flash(t)}popup(t,e,n){this.hud.popup(t,e,n)}showToast(t,e){this.hud.toast(t,e)}flashButton(t){this.hud.flashButton(t)}win(){this.state="end",this.progress.wins++;const t=this.sessionTime;(!this.progress.bestTime||t<this.progress.bestTime)&&(this.progress.bestTime=t),this.city.setTowerCalm(1),this.sfx.play("win"),this.save(),this.onEnd?.("win")}lose(){this.state==="play"&&(this.state="end",this.sfx.play("lose"),this.save(),this.onEnd?.("lose"))}save(){this.onSave?.()}}const r_=i=>Xt.idle(i);Object.defineProperty(Dl.prototype,"stats",{get(){return this._stats||(this._stats={pulsesHit:0,pulsesJumped:0,pulsesBlocked:0,projHits:0,signal:0})}});const a_=Object.freeze(Object.defineProperty({__proto__:null,Game:Dl,WAVES:kr},Symbol.toStringTag,{value:"Module"})),ao=["jump","strike","blast","field","lock"];class o_{constructor(t){this.move={x:0,y:0},this.look={x:0,y:0},this.held=Object.fromEntries(ao.map(a=>[a,!1])),this.pressed=new Set,this.released=new Set,this.keys=new Set,this.joy=null,this.lookPtr=null,this.mouse=null,this.virtual=null,this.enabled=!0,this.usingTouch=!1,this.base=document.getElementById("joy-base"),this.knob=document.getElementById("joy-knob"),this._joyHome();const e=document.getElementById("joy-zone");e.addEventListener("pointerdown",a=>{if(a.preventDefault(),this.usingTouch||(this.usingTouch=a.pointerType==="touch"),this.joy)return;e.setPointerCapture?.(a.pointerId),this.joy={id:a.pointerId,ox:a.clientX,oy:a.clientY};const o=e.getBoundingClientRect();this.base.style.left=a.clientX-o.left+"px",this.base.style.top=a.clientY-o.top+"px",this._knob(0,0)}),e.addEventListener("pointermove",a=>{if(!this.joy||a.pointerId!==this.joy.id)return;a.preventDefault();let o=a.clientX-this.joy.ox,l=a.clientY-this.joy.oy;const c=46,u=Math.hypot(o,l);u>c&&(o*=c/u,l*=c/u),this._knob(o,l),this.move.x=o/c,this.move.y=-l/c});const n=a=>{!this.joy||a.pointerId!==this.joy.id||(this.joy=null,this.move.x=this.move.y=0,this._joyHome())};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),t.addEventListener("pointerdown",a=>{if(this.usingTouch||(this.usingTouch=a.pointerType==="touch"),a.pointerType==="mouse"){this.mouse={x:a.clientX,y:a.clientY,moved:0,btn:a.button},a.button===2&&this._press("blast");return}this.lookPtr||(this.lookPtr={id:a.pointerId,x:a.clientX,y:a.clientY},t.setPointerCapture?.(a.pointerId))}),t.addEventListener("pointermove",a=>{if(a.pointerType==="mouse"){if(this.mouse){const o=a.clientX-this.mouse.x,l=a.clientY-this.mouse.y;this.look.x+=o,this.look.y+=l,this.mouse.moved+=Math.abs(o)+Math.abs(l),this.mouse.x=a.clientX,this.mouse.y=a.clientY}return}!this.lookPtr||a.pointerId!==this.lookPtr.id||(this.look.x+=a.clientX-this.lookPtr.x,this.look.y+=a.clientY-this.lookPtr.y,this.lookPtr.x=a.clientX,this.lookPtr.y=a.clientY)});const s=a=>{if(a.pointerType==="mouse"){this.mouse&&this.mouse.btn===0&&this.mouse.moved<6&&this._press("strike"),this.mouse?.btn===2&&this._release("blast"),this.mouse=null;return}this.lookPtr&&a.pointerId===this.lookPtr.id&&(this.lookPtr=null)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("contextmenu",a=>a.preventDefault());for(const a of document.querySelectorAll(".act")){const o=a.dataset.act,l=document.createElement("div");l.className="cd",a.appendChild(l),a.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),this.usingTouch||(this.usingTouch=u.pointerType==="touch"),a.setPointerCapture?.(u.pointerId),a.classList.add("pressed"),this._press(o)});const c=u=>{u.preventDefault(),a.classList.remove("pressed"),this._release(o)};a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c)}const r={Space:"jump",KeyJ:"strike",KeyK:"blast",KeyQ:"field",KeyF:"lock",Tab:"lock"};window.addEventListener("keydown",a=>{if(a.repeat)return;this.keys.add(a.code);const o=r[a.code];o&&(a.preventDefault(),this._press(o)),(a.code==="Escape"||a.code==="KeyP")&&this.onPause?.()}),window.addEventListener("keyup",a=>{this.keys.delete(a.code);const o=r[a.code];o&&this._release(o)}),window.addEventListener("blur",()=>{this.keys.clear();for(const a of ao)this._release(a);this.move.x=this.move.y=0,this.joy=null,this._joyHome()})}_joyHome(){this.base.style.left="84px",this.base.style.top="calc(100% - 78px)",this._knob(0,0)}_knob(t,e){this.knob.style.transform=`translate(${t}px, ${e}px)`}_press(t){this.held[t]||this.pressed.add(t),this.held[t]=!0}_release(t){this.held[t]&&this.released.add(t),this.held[t]=!1}sample(){let t=this.move.x,e=this.move.y;const n=this.keys;n.has("KeyW")&&(e+=1),n.has("KeyS")&&(e-=1),n.has("KeyA")&&(t-=1),n.has("KeyD")&&(t+=1);let s=this.look.x,r=this.look.y;this.look.x=this.look.y=0,n.has("ArrowLeft")&&(s-=8),n.has("ArrowRight")&&(s+=8),n.has("ArrowUp")&&(r-=5),n.has("ArrowDown")&&(r+=5);const a={...this.held},o=new Set(this.pressed),l=new Set(this.released);if(this.pressed.clear(),this.released.clear(),this.virtual){const u=this.virtual;u.move&&(t+=u.move.x,e+=u.move.y),u.look&&(s+=u.look.x,r+=u.look.y,u.look=null);for(const d of ao){const h=!!u.held?.[d];h&&!u._prev?.[d]&&o.add(d),!h&&u._prev?.[d]&&l.add(d),a[d]=a[d]||h}u._prev={...u.held};for(const d of u.taps||[])o.add(d),l.add(d);u.taps=[]}const c=Math.hypot(t,e);return c>1&&(t/=c,e/=c),this.enabled?{move:{x:t,y:e},look:{x:s,y:r},held:a,pressed:o,released:l}:{move:{x:0,y:0},look:{x:0,y:0},held:{},pressed:new Set,released:new Set}}}class l_{constructor(){this.ctx=null,this.master=null,this.vol=.7,this.noiseBuf=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.vol,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*1;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=t)}_env(t,e,n,s,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+r)}tone(t,e,n,s,r=.2,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,n),o+s),this._env(c,o,.01,r,s),l.connect(c).connect(this.master),l.start(o),l.stop(o+s+.05)}noise(t,e,n,s=.25,r=1.2,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createBufferSource();l.buffer=this.noiseBuf;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.value=r,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(e,o+n);const u=this.ctx.createGain();this._env(u,o,.03,s,n),l.connect(c).connect(u).connect(this.master),l.start(o),l.stop(o+n+.05)}play(t){switch(t){case"whoosh":this.noise(400,2400,.35,.3);break;case"strike":this.noise(900,3e3,.12,.2,2),this.tone("triangle",520,300,.12,.12);break;case"strike3":this.noise(500,3200,.25,.3,1.5),this.tone("sine",330,660,.25,.18);break;case"blast":this.tone("sine",880,220,.3,.2),this.noise(1500,500,.25,.12);break;case"calm":[523,659,784,1047].forEach((e,n)=>this.tone("sine",e,e,.5,.12,n*.07));break;case"jump":this.tone("triangle",300,600,.15,.12);break;case"hit":this.tone("square",160,60,.2,.15),this.noise(300,120,.2,.2);break;case"field":this.tone("sine",196,392,.6,.12),this.tone("sine",294,588,.6,.08);break;case"pulse":this.tone("sawtooth",110,55,.6,.15),this.tone("square",220,880,.3,.05);break;case"hype":this.tone("sawtooth",660,990,.18,.08);break;case"charge":this.tone("sawtooth",80,240,.8,.15);break;case"slam":this.noise(200,60,.5,.4,.8),this.tone("sine",90,40,.5,.3);break;case"lock":this.tone("square",1200,1600,.06,.06);break;case"win":[523,659,784,1047,1319].forEach((e,n)=>this.tone("triangle",e,e,.7,.12,n*.12));break;case"lose":[392,330,262].forEach((e,n)=>this.tone("sawtooth",e,e*.9,.5,.08,n*.2));break;case"ui":this.tone("sine",700,900,.08,.08);break}}}const Ps=i=>440*Math.pow(2,(i-69)/12),wh={explore:[[45,[57,60,64]],[41,[53,57,60]],[48,[55,60,64]],[43,[55,59,62]]],boss:[[45,[57,60,64]],[41,[53,57,60]],[43,[55,59,62]],[40,[56,59,64]]]},c_=[0,12,7,12,0,12,15,12,0,12,7,19,0,12,10,12],h_=[[0,76],[6,74],[10,72],[24,69],[28,72],[40,76],[44,79],[46,76],[56,74]];class u_{constructor(t){this.sfx=t,this.started=!1,this.vol=.6,this.muted=!1,this.intensity=0,this.target=0,this.step=0,this.bpm=96,this.stats={notes:0,bossNotes:0,steps:0}}get ctx(){return this.sfx.ctx}setVolume(t,e){this.vol=t,this.muted=!!e,this.out&&this.out.gain.setTargetAtTime(this.muted?0:this.vol*.55,this.ctx.currentTime,.1)}start(){const t=this.ctx;if(!t||this.started)return;this.started=!0,this.out=t.createGain(),this.out.gain.value=0,this.out.connect(t.destination),this.setVolume(this.vol,this.muted);const e=t.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4,e.connect(this.out),this.bus=e,this.bassClean=t.createGain(),this.bassClean.connect(e);const n=t.createWaveShaper(),s=new Float32Array(1024);for(let p=0;p<1024;p++){const _=p/511.5-1;s[p]=Math.tanh(_*4.5)}n.curve=s,n.oversample="none",this.bassDist=t.createGain(),this.bassDist.gain.value=0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,n.connect(r).connect(this.bassDist).connect(e),this.bassDistIn=n;const a=t.createConvolver(),o=Math.floor(t.sampleRate*.9),l=t.createBuffer(2,o,t.sampleRate);for(let p=0;p<2;p++){const _=l.getChannelData(p);for(let g=0;g<o;g++)_[g]=(Math.random()*2-1)*Math.pow(1-g/o,1.6)}a.buffer=l,this.gate=t.createGain(),this.gate.gain.value=0,a.connect(this.gate).connect(e),this.verbIn=a;const c=t.createDelay(1);c.delayTime.value=60/this.bpm*.75;const u=t.createGain();u.gain.value=.38;const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=2200,c.connect(d).connect(u).connect(c),d.connect(e),this.delay=c,this.padF=t.createBiquadFilter(),this.padF.type="lowpass",this.padF.frequency.value=900,this.padF.Q.value=2,this.padG=t.createGain(),this.padG.gain.value=.05,this.padF.connect(this.padG).connect(e),this.pads=[];for(let p=0;p<6;p++){const _=t.createOscillator();_.type="sawtooth",_.detune.value=p<3?-9:9,_.frequency.value=220,_.connect(this.padF),_.start(),this.pads.push(_)}const h=t.createOscillator();h.frequency.value=.07;const f=t.createGain();f.gain.value=420,h.connect(f).connect(this.padF.frequency),h.start(),this.nextT=t.currentTime+.1,this.timer=setInterval(()=>this.schedule(),50)}setBoss(t){this.target=t?1:0}stop(){clearInterval(this.timer),this.timer=null}schedule(){const t=this.ctx;if(!t||t.state!=="running")return;const e=this.target-this.intensity;Math.abs(e)>.001&&(this.intensity+=Math.sign(e)*Math.min(Math.abs(e),.02));const n=this.intensity;for(this.bpm=96+20*n,this.bassClean.gain.setTargetAtTime(.9-.6*n,t.currentTime,.2),this.bassDist.gain.setTargetAtTime(.75*n,t.currentTime,.2),this.padF.frequency.setTargetAtTime(900+900*n,t.currentTime,.5);this.nextT<t.currentTime+.18;)this.play(this.step,this.nextT,n),this.nextT+=60/this.bpm/4,this.step=(this.step+1)%64}env(t,e,n,s,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+r)}osc(t,e,n,s,r,a,o=.005){const l=this.ctx,c=l.createOscillator(),u=l.createGain();return c.type=t,c.frequency.setValueAtTime(e,n),this.env(u,n,o,r,s),c.connect(u).connect(a),c.start(n),c.stop(n+s+.02),c}noise(t,e,n,s,r,a){const o=this.ctx,l=o.createBufferSource();l.buffer=this.sfx.noiseBuf;const c=o.createBiquadFilter();c.type=s,c.frequency.value=r;const u=o.createGain();return this.env(u,t,.002,n,e),l.connect(c).connect(u).connect(a),l.start(t,Math.random()*.5),l.stop(t+e+.02),u}play(t,e,n){const s=this.ctx;this.stats.steps++;const r=Math.floor(t/16)%4,a=t%16,o=n>.5,[l,c]=(o?wh.boss:wh.explore)[r];a===0&&c.forEach((u,d)=>{this.pads[d].frequency.setTargetAtTime(Ps(u),e,.08),this.pads[d+3].frequency.setTargetAtTime(Ps(u+(d===0?-12:0)),e,.08)});{const u=s.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(Ps(l-12+c_[a]),e);const d=s.createBiquadFilter();d.type="lowpass",d.Q.value=6,d.frequency.setValueAtTime(1600+1400*n,e),d.frequency.exponentialRampToValueAtTime(220,e+.12);const h=s.createGain();this.env(h,e,.004,.22,.16),u.connect(d).connect(h),h.connect(this.bassClean),h.connect(this.bassDistIn),u.start(e),u.stop(e+.18),this.stats.notes++}if(a%4===0||n>.3&&(a===14||a===7)){const u=s.createOscillator();u.frequency.setValueAtTime(140,e),u.frequency.exponentialRampToValueAtTime(42,e+.12);const d=s.createGain();this.env(d,e,.002,a%4?.45*n:.7,.28),u.connect(d).connect(this.bus),u.start(e),u.stop(e+.3),a%4&&this.stats.bossNotes++}(a===4||a===12)&&(this.noise(e,.2,.38,"bandpass",1800,this.bus).connect(this.verbIn),this.osc("triangle",190,e,.1,.18,this.bus),this.gate.gain.cancelScheduledValues(e),this.gate.gain.setValueAtTime(.85,e),this.gate.gain.setValueAtTime(.85,e+.17),this.gate.gain.linearRampToValueAtTime(0,e+.19)),a%2===0?this.noise(e,.04,.07,"highpass",7500,this.bus):n>.2&&(this.noise(e,.03,.05*n,"highpass",8500,this.bus),this.stats.bossNotes++);for(const[u,d]of h_)u===t&&(this.osc(o?"sawtooth":"square",Ps(d-(o?12:0)),e,.55,.06,this.delay,.02).detune.setValueAtTime(-6,e),this.osc("triangle",Ps(d),e,.5,.05,this.bus,.02))}}const Ul="chillblazer-brawler-save-v1",Eh={quality:"medium",sens:1,vol:.7,music:.6,mute:!1,invertY:!1,showFps:!1};function oa(){return{hero:"chillblazer",cleared:[],enforcer:!1,ampCalmed:!1,amp:!1,wins:0,bestTime:0,playTime:0,checkpoint:"start"}}function f_(){try{const i=JSON.parse(localStorage.getItem(Ul)||"null");if(i&&i.v===1)return{settings:{...Eh,...i.settings},progress:i.progress?{...oa(),...i.progress}:null}}catch{}return{settings:{...Eh},progress:null}}function d_(i,t){try{localStorage.setItem(Ul,JSON.stringify({v:1,settings:i,progress:t,savedAt:Date.now()}))}catch{}}function p_(){try{localStorage.removeItem(Ul)}catch{}}const m_="modulepreload",g_=function(i,t){return new URL(i,t).href},Th={},Ah=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=g_(c,n),c in Th)return;Th[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let p=a.length-1;p>=0;p--){const _=a[p];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":m_,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function x_(i,t){const e=()=>{var h;return(h=i.input).virtual||(h.virtual={move:{x:0,y:0},held:{},taps:[]})},n={on:!1,t:0,holdUntil:{},tapCd:{},goal:null,lastPos:new P,log:[]},s={app:t,game:i,state(){const h=i.player,f=i.boss;return{screen:i.state,stage:i.progress?i.stage():null,progress:i.progress?JSON.parse(JSON.stringify(i.progress)):null,player:{x:+h.pos.x.toFixed(2),y:+h.pos.y.toFixed(2),z:+h.pos.z.toFixed(2),facing:+h.facing.toFixed(2),chill:+h.chill.toFixed(1),grounded:h.grounded,action:h.action?.pose||null,jumps:h.jumpCount},panic:+(i.panic??0).toFixed(1),cam:{yaw:+i.cam.yaw.toFixed(3),pitch:+i.cam.pitch.toFixed(3)},enemies:i.enemies.filter(p=>!p.removed).map(p=>({kind:p.kind,stress:+p.stress.toFixed(1),max:p.maxStress,calmed:p.calmed,state:p.state,d:+p.pos.distanceTo(h.pos).toFixed(1)})),boss:f?{name:f.name,kind:f.kind,stress:+f.stress.toFixed(1),max:f.maxStress,phase:f.phase||0}:null,lock:i.lock?i.lock.kind:null,activeHotspot:i.activeHotspot,fps:+i.fps.toFixed(1),pulses:{...i.stats},fieldOn:h.kit.field.busy(),hasFive:!!h.kit.five,objectives:i.progress?i.objectives().map(p=>p.id):[],markersVisible:Object.entries(i.markers||{}).filter(([p,_])=>_.visible&&/^h/.test(p)).map(([p])=>p),traffic:i.city.traffic?{...i.city.traffic.counts,stops:i.city.traffic.stops,honks:i.city.traffic.honks}:null,pixelRatio:i.pixelRatio,music:i.music?{started:i.music.started,intensity:+i.music.intensity.toFixed(2),target:i.music.target,bpm:Math.round(i.music.bpm),vol:i.music.vol,muted:i.music.muted,outGain:i.music.out?+i.music.out.gain.value.toFixed(3):null,ctx:i.sfx.ctx?i.sfx.ctx.state:null,...i.music.stats}:null,drawCalls:i.renderer.info.render.calls,tris:i.renderer.info.render.triangles}},setVirtual(h){Object.assign(e(),h)},tap(h){e().taps.push(h)},hold(h,f){e().held[h]=f},teleport(h,f,p){i.player.pos.set(h,f,p),i.player.vel.set(0,0,0),i.cam.pos.set(h,f+3,p+6)},faceCamera(h){i.cam.yaw=h},frameStats(){const h=i.frameTimes.slice(-300),f=h.reduce((_,g)=>_+g,0)/Math.max(1,h.length),p=[...h].sort((_,g)=>_-g);return{avgFps:1/f,p95ms:(p[Math.floor(p.length*.95)]||0)*1e3,n:h.length}},autopilot(h,f){if(n.on=h,n.goal=f?new P(f.x,0,f.z):null,n.goalY=f?.y||0,n.route=f?.route||null,n.ret=null,!h){const p=e();p.move={x:0,y:0},p.held={}}},apLog:()=>n.log,reclimbs:()=>n.reclimbs||0,modelView(h={}){i.modelView={yaw:0,dist:2.6,h:1.4,look:1.15,pose:null,...h},i.state="model",i.hud.show(!1);for(const f of document.querySelectorAll(".screen"))f.classList.add("hidden")}};s.spawn=async(h,f,p,_=0)=>{const g=await Ah(()=>Promise.resolve().then(()=>zv),void 0,import.meta.url),m={citizen:g.Citizen,goon:g.Goon,caster:g.Caster,drone:g.Drone}[h];return i.addEnemy(new m(i,new P(f,_,p),{})).id},s.enemy=h=>{const f=i.enemies.find(p=>p.id===h);return f?{x:+f.pos.x.toFixed(2),z:+f.pos.z.toFixed(2),state:f.state,stress:f.stress,calmed:f.calmed,d:+f.pos.distanceTo(i.player.pos).toFixed(2)}:null},s.cars=()=>i.city.traffic.cars.filter(h=>!h.parked).map(h=>({alongZ:h.alongZ,lane:h.lane,dir:h.dir,s:+h.s.toFixed(2),v:+h.v.toFixed(2),x:+h.px.toFixed(2),z:+h.pz.toFixed(2)})),s.signal=h=>i.city.traffic.signal(h,i.time),s.waves=async()=>(await Ah(async()=>{const{WAVES:h}=await Promise.resolve().then(()=>a_);return{WAVES:h}},void 0,import.meta.url)).WAVES,s.setProgress=h=>{Object.assign(i.progress,h),i.refreshMarkers(),i.updateObjective()},s.ROOF_ROUTE=[{x:-62.5,z:-4},{x:-62.5,z:-6},{x:-62.5,z:-8.8,j:1,y:.9},{x:-62.5,z:-11.6,j:1,y:1.7},{x:-62.5,z:-15.5,j:2,y:4.6,trigger:3.6},{x:-63.5,z:-22.3,j:2,y:6.8,trigger:2.6},{x:-69.5,z:-22.3,j:2,y:9,trigger:4.2},{x:-75,z:-24,y:9}],window.__CB=s;const r=i.input.sample.bind(i.input);i.input.sample=()=>(a.on&&i.state==="play"?o(1/60):n.on&&i.state==="play"&&u(1/60),r());const a={on:!1,i:0,t:0,wps:[],log:[]};s.climb=h=>{Object.assign(a,{on:!0,i:0,t:0,wps:h,log:[]})},s.climbState=()=>({on:a.on,i:a.i,n:a.wps.length,log:a.log});function o(h){const f=e(),p=i.player,_=a.wps[a.i];if(!_){a.on=!1,f.move={x:0,y:0};return}a.t+=h;const g=new P(_.x-p.pos.x,0,_.z-p.pos.z),m=g.length();f.move=m>.3?l(g.normalize()):{x:0,y:0},_.j&&p.grounded&&m<(_.trigger||2.2)&&p.pos.y<(_.y??99)-.3&&(f.taps.push("jump"),a.jumped=!0),_.j===2&&a.jumped&&!p.grounded&&p.vel.y<3&&p.airJumps>0&&(f.taps.push("jump"),a.jumped=!1),m<.6&&p.pos.y>=(_.y??-1)-.15&&p.grounded?(a.log.push({i:a.i,y:+p.pos.y.toFixed(2),t:+a.t.toFixed(2)}),a.i++,a.t=0,a.jumped=!1):a.t>8&&(a.log.push({i:a.i,fail:!0,x:+p.pos.x.toFixed(2),y:+p.pos.y.toFixed(2),z:+p.pos.z.toFixed(2)}),a.on=!1,f.move={x:0,y:0})}function l(h){const f=i.cam.yaw,p=new P(-Math.sin(f),0,-Math.cos(f)),_=new P(Math.cos(f),0,-Math.sin(f));return{x:h.dot(_),y:h.dot(p)}}function c(h,f){const p=performance.now();(n.tapCd[h]||0)>p||(n.tapCd[h]=p+f*1e3,e().taps.push(h))}function u(h){const f=e(),p=i.player,_=performance.now(),g=n.route&&i.targets().some(A=>A.pos.distanceTo(p.pos)<45&&(A.flying||A.pos.y>n.goalY-3));if(n.route&&!g&&(n.ret=null),n.route&&g&&p.grounded&&p.pos.y<n.goalY-3){n.ret||(n.ret={i:0,wps:[{x:-55,z:p.pos.z},{x:-55,z:n.route[0].z},n.route[0]]});const A=n.ret.wps[n.ret.i],D=new P(A.x-p.pos.x,0,A.z-p.pos.z);if(D.length()>1.2){f.move=l(D.normalize()),d(h,f);return}if(n.ret.i<n.ret.wps.length-1){n.ret.i++;return}n.ret=null,s.climb(n.route.slice(1)),n.reclimbs=(n.reclimbs||0)+1;return}f.held=f.held||{},f.held.field=(n.holdUntil.field||0)>_;const m=i.targets().filter(A=>A.pos.distanceTo(p.pos)<45);let M=i.lock&&!i.lock.calmed?i.lock:null;!M&&m.length&&c("lock",.5),M||(M=m.sort((A,D)=>A.pos.distanceTo(p.pos)-D.pos.distanceTo(p.pos))[0]);for(const A of i.pulses){const I=(Math.hypot(p.pos.x-A.c.x,p.pos.z-A.c.z)-A.r)/A.speed;!A.hit&&!A.bot&&I>.02&&I<.3&&p.pos.y-i.col.groundAt(p.pos.x,p.pos.z,p.radius,p.pos.y)<.5&&(A.bot=!0,p.chill>30&&Math.random()<.35?(n.holdUntil.field=_+700,f.held.field=!0):f.taps.push("jump"))}const R=i.boss&&i.boss.kind==="amp"?i.boss:null;if(R&&R.state==="overdrive"&&R.stateT>.8&&!n.odJump&&(n.odJump=!0,p.chill>30?(n.holdUntil.field=_+900,f.held.field=!0):f.taps.push("jump")),R&&R.state!=="overdrive"&&(n.odJump=!1),!M){if(p.chill<75&&!m.length){n.jogA=(n.jogA||0)+h*1.6,f.move={x:Math.cos(n.jogA),y:Math.sin(n.jogA)};return}if(n.goal){const A=n.goal.clone().sub(p.pos).setY(0);A.length()>1.5?(f.move=l(A.normalize()),d(h,f)):f.move={x:0,y:0}}else f.move={x:0,y:0};return}const S=M.pos.clone().sub(p.pos),b=S.y;S.y=0;const w=S.length()-(M.radius||.5),C=S.clone().normalize();if(M.kind==="enforcer"&&(M.state==="tele"||M.state==="charge")){const A=new P(C.z,0,-C.x);f.move=l(A);return}if(M.kind==="enforcer"&&M.state==="slam"){w<5.5&&M.stateT>.3&&M.stateT<.5&&f.taps.push("jump"),f.move=l(C.clone().multiplyScalar(-1));return}if(M.kind==="enforcer"&&!(M.dazed>0)){const A=new P(C.z,0,-C.x);w<7.5?(f.move=l(C.clone().multiplyScalar(-1).addScaledVector(A,.4).normalize()),d(h,f)):(f.move=l(A.addScaledVector(C,w>10?.5:0).normalize()),d(h,f)),p.chill>45&&c("blast",.42);return}if(M.kind==="enforcer"){p.chill>=16&&w>2.2&&c("blast",.42),w>1.4?(f.move=l(C),d(h,f)):f.move={x:0,y:0},w<2.6&&c("strike",.14);return}(i.proj.list.some(A=>A.owner==="enemy"&&!A.dead&&A.mesh.position.distanceTo(p.pos)<6)||i.panic>65)&&p.chill>30&&!p.kit.field.busy()&&(n.holdUntil.field=_+700),m.filter(A=>A.pos.distanceTo(p.pos)<5).length>=3&&p.chill>35&&!p.kit.field.busy()&&(n.holdUntil.field=_+1400);const L=i.proj.list.find(A=>A.owner==="enemy"&&!A.dead&&A.mesh.position.distanceTo(p.pos)<9&&A.vel.clone().normalize().dot(p.pos.clone().sub(A.mesh.position).normalize())>.8);if(L&&!p.kit.field.busy()){const A=L.vel.clone().setY(0).normalize();n.dodge=n.dodge||(Math.random()<.5?1:-1),f.move=l(new P(A.z*n.dodge,0,-A.x*n.dodge));return}else n.dodge=0;if(p.chill<18&&M.kind!=="core"){n.jogA=(n.jogA||0)+h*1.2;const A=new P(C.z,0,-C.x);f.move=l(A.multiplyScalar(.9).addScaledVector(C,w<5?-.6:.2).normalize()),d(h,f);return}const F=M.kind==="drone"||M.kind==="core";(F||w>5)&&p.chill>=16&&c("blast",.42);const z=M.kind==="amp"?1.6:M.kind==="drone"?5:1.4;(F||n.goalY>5&&M.pos.y>n.goalY-3)&&n.goal&&p.pos.clone().setY(0).distanceTo(n.goal)>(n.goalY>5?5.5:7)?(f.move=l(n.goal.clone().sub(p.pos).setY(0).normalize()),d(h,f)):w>z?(f.move=l(C),d(h,f)):f.move={x:0,y:0},w<2.6&&Math.abs(b)<1.6&&c("strike",.14),M.kind==="core"&&w<3&&(c("jump",.8),c("strike",.14))}function d(h,f){const p=i.player;n.t+=h,n.t>.5&&(p.pos.distanceTo(n.lastPos)<.6&&Math.hypot(f.move.x,f.move.y)>.5&&c("jump",.4),n.lastPos.copy(p.pos),n.t=0)}}const Qt=i=>document.getElementById(i),Au=f_(),Ce=Au.settings;let an=Au.progress;const zn=new l_;zn.setVolume(Ce.mute?0:Ce.vol);const Qs=new u_(zn);Qs.setVolume(Ce.music,Ce.mute);const v_=()=>{zn.unlock(),Qs.start()};for(const i of["pointerdown","keydown","touchstart"])window.addEventListener(i,v_,{once:!0,passive:!0});const Ru=new o_(Qt("game")),Ae=new Dl(Qt("game"),Ru,zn,Ce);Ae.music=Qs;const la=()=>d_(Ce,an);Ae.onSave=()=>{an=Ae.progress,la()};const __=["screen-title","screen-pause","screen-settings","screen-end"];function _i(i){for(const t of __)Qt(t).classList.toggle("hidden",t!==i)}function Cu(){const i=an&&!an.amp&&(an.cleared.length||an.enforcer||an.playTime>5);Qt("btn-continue").classList.toggle("hidden",!i);const t=an;let e="";t&&(e=`Saved: ${t.cleared.length}/3 hotspots calmed${t.enforcer?", Enforcer calmed":""}${t.ampCalmed&&!t.amp?", Amp calmed":""}${t.wins?` | City calmed x${t.wins}, best ${Pu(t.bestTime)}`:""}`),Qt("save-info").textContent=e}const Pu=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function ca(){Ae.state="title",Ae.hud.show(!1),Ae.clearEnemies(),_i("screen-title"),Cu()}function ha(i){zn.unlock(),Qs.start(),an=i,la(),_i(null),Ae.startSession(an),M_()}function M_(){const i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&i.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}function ua(){Ae.state==="play"&&(Ae.state="pause",Ae.save(),_i("screen-pause"))}function Nl(){_i(null),Ae.state="play",Qo=performance.now()}Ru.onPause=()=>{Ae.state==="play"?ua():Ae.state==="pause"&&Nl()};Qt("btn-new").onclick=()=>{zn.unlock(),zn.play("ui"),ha(oa())};Qt("btn-continue").onclick=()=>{zn.unlock(),zn.play("ui"),ha(an)};Qt("btn-pause").onclick=ua;Qt("btn-pause").addEventListener("pointerdown",i=>i.stopPropagation());Qt("btn-resume").onclick=Nl;Qt("btn-quit").onclick=()=>{Ae.save(),ca()};let Lu="screen-title";const Iu=i=>{Lu=i,Qt("set-quality").value=Ce.quality,Qt("set-sens").value=Ce.sens,Qt("set-vol").value=Ce.vol,Qt("set-music").value=Ce.music,Qt("set-mute").checked=Ce.mute,Qt("set-invert").checked=Ce.invertY,Qt("set-fps").checked=Ce.showFps,_i("screen-settings")};Qt("btn-settings").onclick=()=>Iu("screen-title");Qt("btn-settings2").onclick=()=>Iu("screen-pause");Qt("btn-settings-done").onclick=()=>{const i=Qt("set-quality").value,t=i!==Ce.quality;Object.assign(Ce,{quality:i,sens:+Qt("set-sens").value,vol:+Qt("set-vol").value,music:+Qt("set-music").value,mute:Qt("set-mute").checked,invertY:Qt("set-invert").checked,showFps:Qt("set-fps").checked}),zn.setVolume(Ce.mute?0:Ce.vol),Qs.setVolume(Ce.music,Ce.mute),Qt("fps").classList.toggle("hidden",!Ce.showFps),la(),t&&(Ae.applyQuality(),Ae.showToast?.("Quality saved (full effect after reload)")),_i(Lu)};Qt("btn-reset").onclick=()=>{p_(),an=null,Cu(),_i("screen-title")};Ae.onEnd=i=>{an=Ae.progress,la(),Ae.hud.show(!1),_i("screen-end"),Qt("screen-end").classList.toggle("win",i==="win"),Qt("screen-end").classList.toggle("lose",i!=="win"),i==="win"?(Qt("end-title").textContent="CITY CALMED",Qt("end-text").textContent=`The OVERDRIVE signal is silent and the Amp Tower glows green. The Amp finally sat down and breathed. Calm the storm. Time ${Pu(Ae.sessionTime)}.`,Qt("btn-end-primary").textContent="PLAY AGAIN"):(Qt("end-title").textContent="THE CITY PANICKED",Qt("end-text").textContent="Panic hit 100%. Keep moving to recharge Chill, calm enemies before they swarm you, and jump or Calm Field through OVERDRIVE pulses.",Qt("btn-end-primary").textContent="RETRY FROM CHECKPOINT"),Qt("btn-end-primary").onclick=()=>ha(i==="win"?oa():an)};Qt("btn-end-title").onclick=ca;document.addEventListener("visibilitychange",()=>{document.hidden&&ua()});let Qo=performance.now();function Du(i){const t=Math.min(.1,(i-Qo)/1e3);Qo=i;const e=window.__CB?.speed||1;for(let n=1;n<e;n++)Ae.update(Math.min(t,1/30));Ae.tick(Math.min(t,1/30),t),requestAnimationFrame(Du)}requestAnimationFrame(Du);ca();x_(Ae,{start:ha,pause:ua,resume:Nl,goTitle:ca,settings:Ce,getProgress:()=>an,defaultProgress:oa});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(i=>console.warn("SW registration failed",i)));let Fs=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),Fs=i,window.__CB_installable=!0,Qt("btn-install").classList.remove("hidden")});Qt("btn-install").onclick=async()=>{Fs&&(Fs.prompt(),await Fs.userChoice.catch(()=>{}),Fs=null,Qt("btn-install").classList.add("hidden"))};
